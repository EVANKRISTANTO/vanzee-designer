---
name: typography-curation
description: Use when selecting, pairing, or reviewing fonts and typographic hierarchy for any website, web app, or UI design so typography feels distinctive, legible, and free of monotonous AI-default fonts.
---

# Typography Curation & Anti-Slop Font Pairing

Pilih tipografi yang punya **karakter nyata sesuai identitas produk**, mudah dibaca di semua ukuran layar, dan tidak jatuh ke kebiasaan default AI yang membosankan.

## 1. Hindari Font Default yang Monoton

Jangan memakai **Plus Jakarta Sans**, **Inter**, **Roboto**, **Open Sans**, atau **Space Grotesk** secara otomatis. Font tersebut hanya boleh dipakai jika user memintanya langsung atau ada alasan brand yang tertulis jelas.

Selalu bedakan pilihan font di tiap proyek berdasarkan karakter produknya.

## 2. Katalog Variasi Font (Google Fonts, Fontshare & Typewolf)

Pilih pasangan font yang kontras namun serasi dari kategori berikut — sumber utama via **Google Fonts** (`https://fonts.google.com/`) dan **Fontshare** (`https://www.fontshare.com/`, mis. *Satoshi*, *Clash Display*, *Cabinet Grotesk*, *General Sans*, *Switzer*), serta rujuk inspirasi pairing dari **Typewolf** (`https://www.typewolf.com/`), selaras dengan skill `vanzee-designer`:

### A. Modern SaaS, Tech & Product UI (Alternatif Segar Non-Inter/Jakarta)
- **Tajam & Modern:** `Instrument Sans`, `Schibsted Grotesk`, `Albert Sans`, `Hanken Grotesk`, `Geologica`
- **Ramah & Bersih:** `Figtree`, `Onest`, `Lexend`, `DM Sans`, `Be Vietnam Pro`, `Golos Text`
- **Geometris Berkarakter:** `Outfit`, `Sora`, `Manrope`, `Urbanist`, `Red Hat Display` + `Red Hat Text`

### B. Editorial, Konten, Media & Brand Mewah
- **Display Serif Ekspresif:** `Instrument Serif`, `Fraunces`, `Newsreader`, `Cormorant Garamond`, `Playfair Display`, `Bodoni Moda`
- **Body Pendamping:** `Source Serif 4`, `Literata`, `Lora`, `Karla`, `Nunito Sans`, `Public Sans`

### C. Kreatif, Agency, Portofolio & Gen Z
- **Display Unik:** `Bricolage Grotesque`, `Syne`, `Unbounded`, `Familjen Grotesk`, `Archivo`
- **Poster / Bold Impact:** `Anton`, `Bebas Neue`, `Oswald`, `Big Shoulders Display`
- **Playful & Hangat:** `Fredoka`, `Rubik`, `Quicksand`, `Comfortaa`

### D. Monospace (Angka Tabel, Kode, Harga, Data Teknis)
- **Pilihan Monospace:** `IBM Plex Mono`, `JetBrains Mono`, `Space Mono`, `Azeret Mono`, `Martian Mono`, `Roboto Mono`
- *Aturan:* Gunakan monospace untuk angka/kode/data tabular (`font-variant-numeric: tabular-nums`), bukan sebagai gaya dekoratif judul halaman non-teknis.

## 3. Aturan Pairing & Skala Tipografi

1. **Maksimal 2–3 Keluarga Font:** Umumnya 1 Display/Heading + 1 Body (+ 1 Mono opsional untuk angka/kode).
2. **Kontras yang Jelas:** Padukan karakter berbeda (mis. *Editorial Serif* + *Clean Humanist Sans*, atau *Expressive Grotesque* + *Neutral Body*) daripada dua font yang nyaris identik.
3. **Deklarasikan di CSS Tokens:** Simpan di `:root` (`--font-display`, `--font-sans`, `--font-mono`), muat bobot (*weights*) yang benar-benar dipakai saja, dan gunakan `font-display: swap`.
4. **Proporsi, Label Persisten & Keterbacaan:**
   - Display/H1: `line-height: 1.05–1.15`, `letter-spacing: -0.025em` s/d `-0.04em`.
   - Body: minimal `16px` (`1rem`), `line-height: 1.5–1.65`, lebar baris nyaman `55ch–70ch`.
   - Label Form & Navigasi: label input **wajib tetap terlihat jelas setelah kolom diisi** (jangan mengganti label dengan `placeholder` saja), dan ikon navigasi/toolbar perlu label teks singkat yang kontras serta bebas `letter-spacing` kapital berlebihan.
   - Pairing Ikon (`Material Symbols & Icons`): selaraskan ketebalan (`wght`) dan ukuran optik (`opsz`) ikon Google Material Symbols dengan bobot font teks pendampingnya.
5. **Tawarkan Pilihan ke User:** Jika user belum menentukan arah tipografi saat membuat UI baru, gunakan `ask_question` untuk menawarkan 2–3 opsi arah pairing font sebelum membangun halaman.
