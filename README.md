# Vanzee Designer — UI/UX Skills, References & Rules Pack

Paket skill dan rules terkurasi untuk Antigravity agar agen AI selalu membangun antarmuka dengan desain berkarakter, referensi visual nyata, komponen konsisten menyeluruh (*system-wide parity*), animasi modern, dan audit kualitas Lighthouse.

## Isi Paket

### Rules (`rules/AGENTS.md`)
- Otomatis memicu `vanzee-designer` setiap kali merancang atau membangun UI/UX maupun website.
- Wajib menanyakan referensi desain via `ask_question` (`is_multi_select: true`)—mendukung **1 referensi** maupun **gabungan beberapa referensi**.
- Mewajibkan inspeksi gambar/video referensi asli (via file lokal atau **CDN publik**) sebelum menulis kode.
- Mengizinkan pencarian aset gambar real-world dari Google/web (mis. foto produk brand) dengan verifikasi URL aktif.
- Menjalankan audit **Lighthouse** otomatis setelah website selesai dibuat.

### Skills (`skills/`)
1. **`vanzee-designer`**
   - **Icon, Illustration & 3D:** [Material Symbols & Icons](https://fonts.google.com/icons), [Icons8](https://icons8.com/)
   - **Fonts & Typography:** [Google Fonts](https://fonts.google.com/), [Fontshare](https://www.fontshare.com/), [Typewolf](https://www.typewolf.com/)
   - **Colors & Contrast:** [Realtime Colors](https://www.realtimecolors.com/), [Coolors](https://coolors.co/)
   - **Web & UI/UX Galleries:** [Refero](https://refero.design/styles), [Land-book](https://land-book.com/), [Lapa Ninja](https://www.lapa.ninja/), [Mobbin](https://mobbin.com/), [Godly](https://godly.design/), [Awwwards](https://www.awwwards.com/), [Shadcn Space](https://shadcnspace.com/animated-blocks), [Pinterest](https://www.pinterest.com/)
   - **9 Referensi UI/Dashboard Terkurasi + 7 Video Pola Interaksi Teranalisa (Lokal + CDN Publik):**
     1. *Fennel AI Agent Dashboard*
     2. *Paymo: Wallet Overview*
     3. *Business Transactions Dashboard*
     4. *Ecommerce Orders Dashboard*
     5. *FleetTrack: Container Fleet*
     6. *Personal Finance Analytics*
     7. *FleetTrack: Fleet Reports*
     8. *Cloud Dock: File Management*
     9. *Smart Home Control Dashboard*
     10. *Motion & Block Library (`references/motion-blocks-library.md`):* **Dot-Matrix AI Thinking Pill**, **Cinema 3D Seat Map & View Preview**, **Inline Morphing Sentence Order Sheet**, **Dark AI SaaS Landing Architecture**, **Product Dial Showcase Hero (Hero 68)**, **Immersive Game & Character Hero (Hero 55)**, **Frosted Glass Plan Cards (Pricing 18)**, plus 60+ blok **Shadcn Space Animated Blocks**.
   - **Otomasi Aset Nyata (Anti-Icon-Buatan):** Wajib pakai library ikon/logo/foto asli lewat pencarian web otomatis bila aset tidak tersedia secara lokal.
   - **Katalog 42 Micro-Interactions**, **System-Wide Component Parity** (`references/component-craft.md`), **Motion Recipes** (`references/motion-recipes.md`), dan **7 Guardrail Good UX vs Bad UX**.
2. **`typography-curation`** — Panduan pairing font anti-slop (menghindari font default AI yang monoton).
3. **`text-animations`** — Katalog 20 pola kinetic typography + resep CSS aksesibel (`aria-label` & `prefers-reduced-motion`).
4. **`micro-interactions`** — Token timing/easing CSS (`--ease-snappy`, `--ease-out-expo`, `--ease-spring`) dan standar gerak GPU-only.
5. **`lighthouse-audit-fix`** — Skrip dan workflow audit Lighthouse + Core Web Vitals sebelum & sesudah perbaikan.

---

## Cara Install & Pakai

### Opsi 1 — Install sebagai Plugin Global (Direkomendasikan)
Semua skill dan `rules/AGENTS.md` langsung aktif otomatis di semua proyek.

**Windows (PowerShell):**
```powershell
git clone https://github.com/EVANKRISTANTO/vanzee-designer.git "$env:USERPROFILE\.gemini\config\plugins\vanzee-designer"
```

**macOS / Linux:**
```bash
git clone https://github.com/EVANKRISTANTO/vanzee-designer.git ~/.gemini/config/plugins/vanzee-designer
```

### Opsi 2 — Install per Proyek (Workspace `.agents/plugins/`)
```bash
git clone https://github.com/EVANKRISTANTO/vanzee-designer.git .agents/plugins/vanzee-designer
```

### Opsi 3 — Install Manual sebagai Standalone Skills + Always-On Rule
Jika ingin memisahkan skill dan rule global secara manual:
1. Salin isi folder `skills/` ke `~/.gemini/config/skills/` (atau `.agents/skills/`).
2. Salin isi `rules/AGENTS.md` ke `~/.gemini/config/rules/vanzee-designer.md` dengan menambahkan frontmatter berikut di baris paling atas:
   ```markdown
   ---
   trigger: always_on
   ---
   ```

### Setup Tambahan untuk `lighthouse-audit-fix` (Opsional, 1x saja)
Agar skrip audit Lighthouse bisa berjalan lokal:
```bash
cd skills/lighthouse-audit-fix/scripts
npm install
```
*(Membutuhkan Node.js dan Google Chrome / Microsoft Edge yang sudah terpasang).*
