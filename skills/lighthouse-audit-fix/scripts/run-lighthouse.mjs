import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function findBrowserPath() {
  if (process.env.CHROME_PATH && fs.existsSync(process.env.CHROME_PATH)) {
    return process.env.CHROME_PATH;
  }
  const candidates = [
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    path.join(process.env.LOCALAPPDATA || "", "Google\\Chrome\\Application\\chrome.exe"),
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  ];
  return candidates.find((p) => p && fs.existsSync(p)) || null;
}

function parseArgs(argv) {
  const args = { url: "", preset: "mobile", saveJson: "", categories: "" };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--preset" && argv[i + 1]) {
      args.preset = argv[++i];
    } else if (a === "--save-json" && argv[i + 1]) {
      args.saveJson = argv[++i];
    } else if (a === "--categories" && argv[i + 1]) {
      args.categories = argv[++i];
    } else if (!a.startsWith("--") && !args.url) {
      args.url = a;
    }
  }
  return args;
}

function runCli(cliPath, cliArgs, env) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [cliPath, ...cliArgs], {
      env,
      stdio: ["ignore", "pipe", "pipe"],
    });
    let stderr = "";
    let stdout = "";
    child.stdout.on("data", (d) => (stdout += d.toString()));
    child.stderr.on("data", (d) => (stderr += d.toString()));
    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) resolve({ stdout, stderr });
      else reject(new Error(`Lighthouse exited with code ${code}: ${stderr || stdout}`));
    });
  });
}

function summarizeItem(item) {
  const out = {};
  if (item.url) out.url = String(item.url).slice(0, 140);
  if (item.node?.snippet) out.snippet = String(item.node.snippet).slice(0, 140);
  if (item.node?.selector) out.selector = String(item.node.selector).slice(0, 100);
  if (typeof item.wastedMs === "number") out.wastedMs = Math.round(item.wastedMs);
  if (typeof item.wastedBytes === "number") out.wastedBytes = Math.round(item.wastedBytes);
  if (typeof item.totalBytes === "number") out.totalBytes = Math.round(item.totalBytes);
  if (item.label) out.label = item.label;
  return out;
}

function summarizeReport(lhr, preset) {
  const categories = {};
  const auditToCategory = new Map();

  for (const [catId, cat] of Object.entries(lhr.categories || {})) {
    categories[catId] = cat.score === null ? null : Math.round(cat.score * 100);
    for (const ref of cat.auditRefs || []) {
      const list = auditToCategory.get(ref.id) || [];
      list.push({ id: catId, weight: ref.weight || 0 });
      auditToCategory.set(ref.id, list);
    }
  }

  const vitalKeys = [
    "first-contentful-paint",
    "largest-contentful-paint",
    "total-blocking-time",
    "cumulative-layout-shift",
    "speed-index",
    "interactive",
  ];
  const vitals = {};
  for (const k of vitalKeys) {
    const a = lhr.audits?.[k];
    if (a) {
      vitals[k] = {
        displayValue: a.displayValue || null,
        score: a.score === null ? null : Math.round(a.score * 100),
      };
    }
  }

  const topIssues = [];
  for (const [id, audit] of Object.entries(lhr.audits || {})) {
    if (audit.score === null || audit.score >= 0.9) continue;
    if (audit.scoreDisplayMode === "informative" || audit.scoreDisplayMode === "notApplicable") continue;
    const refs = auditToCategory.get(id) || [];
    const maxWeight = refs.reduce((m, r) => Math.max(m, r.weight), 0);
    const items = Array.isArray(audit.details?.items)
      ? audit.details.items.slice(0, 3).map(summarizeItem).filter((x) => Object.keys(x).length > 0)
      : [];

    topIssues.push({
      id,
      title: audit.title,
      categories: refs.map((r) => r.id),
      score: Math.round(audit.score * 100),
      weight: maxWeight,
      displayValue: audit.displayValue || null,
      overallSavingsMs: audit.details?.overallSavingsMs ?? null,
      overallSavingsBytes: audit.details?.overallSavingsBytes ?? null,
      items,
    });
  }

  topIssues.sort((a, b) => {
    const sa = (b.overallSavingsMs || 0) - (a.overallSavingsMs || 0);
    if (sa !== 0) return sa;
    if (b.weight !== a.weight) return b.weight - a.weight;
    return a.score - b.score;
  });

  return {
    finalUrl: lhr.finalDisplayedUrl || lhr.requestedUrl,
    preset,
    fetchTime: lhr.fetchTime,
    scores: categories,
    vitals,
    topIssues: topIssues.slice(0, 20),
    runtimeError: lhr.runtimeError || null,
  };
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (!opts.url) {
    console.error("Usage: node run-lighthouse.mjs <url> [--preset mobile|desktop] [--categories performance,accessibility,best-practices,seo] [--save-json path]");
    process.exit(1);
  }

  const browserPath = findBrowserPath();
  if (!browserPath) {
    console.error("No Chromium-based browser (Chrome or Microsoft Edge) found. Set CHROME_PATH env var.");
    process.exit(1);
  }

  const cliPath = path.join(__dirname, "node_modules", "lighthouse", "cli", "index.js");
  if (!fs.existsSync(cliPath)) {
    console.error(`Lighthouse CLI not found at ${cliPath}. Run npm install in ${__dirname}.`);
    process.exit(1);
  }

  const tempJson =
    opts.saveJson ||
    path.join(os.tmpdir(), `lighthouse-report-${Date.now()}-${Math.random().toString(36).slice(2)}.json`);

  const cliArgs = [
    opts.url,
    "--output=json",
    `--output-path=${tempJson}`,
    "--quiet",
    '--chrome-flags=--headless --no-sandbox --disable-gpu',
  ];

  if (opts.preset === "desktop") {
    cliArgs.push("--preset=desktop");
  }
  if (opts.categories) {
    cliArgs.push(`--only-categories=${opts.categories}`);
  }

  try {
    await runCli(cliPath, cliArgs, { ...process.env, CHROME_PATH: browserPath });
    const raw = fs.readFileSync(tempJson, "utf8");
    const lhr = JSON.parse(raw);
    const summary = summarizeReport(lhr, opts.preset);
    console.log(JSON.stringify(summary, null, 2));
  } finally {
    if (!opts.saveJson && fs.existsSync(tempJson)) {
      fs.rmSync(tempJson, { force: true });
    }
  }
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
});
