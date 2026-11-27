---
name: text-animations
description: Use when animating headlines, hero text, counters, kinetic typography, badges, or text transitions in websites and web apps so motion is smooth, readable, and accessible.
---

# Text Animations & Kinetic Typography

Katalog 20 pola animasi teks modern (terinspirasi *20 Text Animations*) untuk membuat headline, hero section, angka metrik, dan transisi copy terasa hidup tanpa mengorbankan keterbacaan maupun performa.

## 1. Aturan Wajib Aksesibilitas & Performa

1. **Screen Reader Safe (Wajib untuk Split Text):** Saat memecah teks per kata/huruf menjadi `<span>`, selalu pasang `aria-label="Teks Lengkap"` pada elemen induk dan `aria-hidden="true"` pada span pecahan agar screen reader tidak mengeja huruf satu per satu.
2. **GPU-Friendly:** Utamakan `transform`, `opacity`, `clip-path`, dan `background-position`. Hindari menganimasikan `font-size`, `width`, `height`, atau `margin` yang memicu layout shift (CLS).
3. **Hormati `prefers-reduced-motion`:** Nonaktifkan gerak berulang/geser dan tampilkan teks akhir secara langsung saat preferensi reduced motion aktif.
4. **Proporsional & Terarah:** Pakai 1–2 gaya utama per halaman (mis. *Mask Rise* untuk hero + *Number Count-up* untuk KPI)—jangan mencampur terlalu banyak gaya bertabrakan dalam satu viewport.

## 2. Katalog 20 Text Animations

| # | Nama Animasi | Efek Visual & Mekanisme | Paling Cocok Untuk |
| :--- | :--- | :--- | :--- |
| **01** | **Typewriter** | Kemunculan karakter berurutan + kursor berkedip (`steps()` / timer) | Terminal hero, AI prompt demo, slogan |
| **02** | **Mask Rise** | Teks muncul dari bawah (`translateY(105%) -> 0`) di dalam kontainer `overflow: hidden` | Hero H1 editorial, section title bersih |
| **03** | **Scramble Decode** | Karakter acak berputar lalu terkunci bertahap menjadi teks asli | UI tech/cyber, badge AI, status dekripsi |
| **04** | **Gradient Flow** | Gradasi multi-warna bergerak halus (`background-clip: text`, `background-position`) | Kata kunci hero SaaS, aksen brand |
| **05** | **Word Stagger** | Tiap kata muncul berurutan (`opacity` + `translateY`, jeda `35–55ms`) | Subjudul, tagline multi-kata |
| **06** | **Blur In** | Teks fokus dari buram ke tajam (`filter: blur(12px) -> 0` + fade) | Reveal elegan, landing page mewah |
| **07** | **Letter Bounce** | Tiap huruf memantul ringan berurutan dengan `--ease-spring` | Brand kreatif, playful CTA, badge |
| **08** | **Marker Highlight** | Sapuan stabilo melebar di belakang teks (`scaleX(0 -> 1)`, `transform-origin: left`) | Penekanan value proposition / frasa kunci |
| **09** | **Number Count-up** | Angka naik halus dengan easing (`requestAnimationFrame` + `tabular-nums`) | KPI dashboard, statistik sosial proof |
| **10** | **Rotating Word** | Kata kunci berganti vertikal di dalam slot `overflow: hidden` | Headline dinamis (`Ship it faster/bolder`) |
| **11** | **Tracking Expand** | `letter-spacing` melebar mulus + garis bawah tipis ikut memanjang | Label luxury, judul minimalis |
| **12** | **Outline to Fill** | Teks stroke berongga (`-webkit-text-stroke`) terisi warna solid bertahap | Hero poster, efek hover link besar |
| **13** | **RGB Glitch** | Lapisan duplikat cyan & merah bergeser cepat (`clip-path` slice) | Gaming, event kreatif (pakai singkat saja) |
| **14** | **Wave** | Gelombang vertikal sinusoidal antar-huruf yang mengalir lembut | Elemen interaktif hover, kreatif Gen Z |
| **15** | **Letter Flip** | Tiap huruf berputar 3D (`perspective` + `rotateX(-90deg -> 0)`) | Split headline, ticker perubahan status |
| **16** | **Squiggle Underline** | Garis bawah SVG bergelombang tergambar otomatis (`stroke-dashoffset`) | Link penting, penegasan copy persuasif |
| **17** | **3D Extrude** | Bayangan berlapis (`text-shadow`) + geser diagonal memberi efek kedalaman | Poster bold, section showcase |
| **18** | **Zoom Punch** | Skala cepat membesar lalu mengunci (`scale(1.35) -> 1`) dengan snap | Callout promo, angka/kata impact (`BOOM`) |
| **19** | **Strike & Replace** | Teks lama dicoret garis horizontal lalu berganti halus ke kata baru | Perbandingan harga/nilai (`Cheap -> Premium`) |
| **20** | **Split Halves** | Paruh atas & bawah teks (`clip-path: inset`) meluncur menyatu dari arah berlawanan | Transisi slide, reveal judul dramatis |

## 3. Resep CSS Siap Pakai (Pola Paling Sering Dipakai)

```css
/* 02. Mask Rise */
.mask-wrap { overflow: hidden; display: inline-block; }
.mask-rise {
  display: inline-block;
  animation: maskRise 520ms cubic-bezier(0.16, 1, 0.3, 1) both;
}
@keyframes maskRise {
  from { transform: translateY(110%); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
}

/* 04. Gradient Flow */
.text-gradient-flow {
  background: linear-gradient(90deg, #38bdf8, #818cf8, #34d399, #38bdf8);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradientFlow 4s linear infinite;
}
@keyframes gradientFlow {
  to { background-position: 200% center; }
}

/* 08. Marker Highlight */
.marker-highlight { position: relative; z-index: 1; }
.marker-highlight::before {
  content: "";
  position: absolute;
  inset: 0.08em -0.15em;
  z-index: -1;
  background: #d9f99d;
  border-radius: 4px;
  transform: scaleX(0);
  transform-origin: left center;
  animation: highlightSweep 480ms cubic-bezier(0.16, 1, 0.3, 1) 180ms forwards;
}
@keyframes highlightSweep {
  to { transform: scaleX(1); }
}

@media (prefers-reduced-motion: reduce) {
  .mask-rise, .text-gradient-flow, .marker-highlight::before {
    animation: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
}
```

> Untuk sinkronisasi dengan ikon, palet, dan komponen UI, kombinasikan skill ini dengan **`vanzee-designer`** dan **`micro-interactions`**.
