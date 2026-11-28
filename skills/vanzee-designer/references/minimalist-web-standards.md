# Minimalist Modern Website & Anti-Crowding Standards

Standar desain **Minimalist Ringkas** untuk memastikan setiap website dan dashboard tampil modern, tenang, lapang, berkelas, dan nyaman dibaca—tanpa layar penuh teks atau ornamen bertumpuk.

---

## 1. Batas Kepadatan Teks (*Text & Copy Density Budget*)

1. **Aturan 3 Detik:** Pengunjung harus langsung paham tujuan halaman dan aksi utamanya dalam `<= 3 detik` tanpa membaca paragraf panjang.
2. **Hero Section:**
   - Headline utama: maksimal **5–8 kata** (`1–2` baris).
   - Subheadline: maksimal **12–18 kata** (`<= 2` baris).
   - Maksimal **1–2 tombol aksi** (1 Primary CTA + 1 opsional Secondary). Jangan menaruh daftar fitur panjang di hero.
3. **Kartu & Blok Konten (*Minimalist Ringkas*):**
   - Batas isi kartu: maksimal **2–3 elemen** — `Judul pendek (2–5 kata)` + `Angka / Visual utama` + maksimal `1 baris keterangan singkat (<= 10 kata)` seperlunya.
   - **Dilarang Menumpuk Metadata:** Jangan memasukkan eyebrow pill + judul + 2 subjudul + paragraf + 3 tag + footnote + tombol aksi di dalam 1 kartu.
4. **Badge & Pill Hemat:** Maksimal **1 pill status fungsional** per kartu (hanya jika menunjukkan status nyata seperti `Active` / `+4.2%`). Hapus badge hiasan yang tidak membawa informasi baru.
5. **Progressive Disclosure:** Detail lanjutan, catatan panjang, pengaturan sekunder, dan filter tambahan **wajib dipindahkan** ke balik **tab, modal `<dialog>`, drawer, popover, atau accordion**—bukan dijejalkan di tampilan awal.

---

## 2. Ruang Napas & Ritme Layout (*Whitespace >= 35%*)

- **Section Landing Page:** Jarak vertikal antar section `80px–120px` (desktop) dan `56px–72px` (mobile).
- **Grid & Kartu:** Gunakan gap antar kartu `20px–28px` (website) atau `16px` (dashboard), dengan padding internal kartu yang lega (`20px–28px`).
- **Batas Kolom per Baris:** Maksimal **3–4 kartu** sejajar untuk konten/fitur (atau maksimal 4–5 untuk KPI angka ringkas). Hindari grid padat berisi banyak kotak penuh tulisan.
- **Lebar Baris Teks:** Batasi paragraf pada `50ch–65ch` agar mata tidak lelah.

---

## 3. Aturan Warna Tenang (*Calm Neutral-First 75 / 15 / 10*)

Agar palet terlihat mahal dan tidak norak atau melelahkan mata:
- **75% Netral Bersih:** Background kanvas utama memakai putih bersih (`#FFFFFF`), off-white hangat (`#FAF8F4`), atau soft cloud (`#F6F7FB`) — atau latar gelap matte tenang (`#0B0F14` / `#111315` / `#17121F`) untuk dark mode.
- **15% Struktur Permukaan:** Border hairline tipis (`1px solid`) yang hampir menyatu dengan latar, bayangan sangat lembut, serta teks sekunder dengan kontras `>= 4.5:1`.
- **10% Satu Aksen Utama:** Pilih **1 palet** dari `references/color-palettes.md` dan gunakan warna aksennya **hanya** untuk tombol CTA utama, indikator navigasi aktif, dan sorotan angka penting. Jangan mewarnai seluruh ikon, border, atau latar kartu sekaligus.

---

## 4. 4 Blueprint Website & Landing Page Minimalist Modern

Saat pengguna meminta pembuatan **website / landing page** (bukan dashboard data), pilih atau kombinasikan salah satu pola lapang berikut:

| Blueprint Website | Ciri Visual & Struktur Lapang | Paling Cocok Untuk |
| :--- | :--- | :--- |
| **A. Editorial SaaS Minimalist** | Navbar bersih (4–5 link + 1 CTA), Hero split/centered dengan headline tajam & 1 visual produk, section bergantian lapang, pricing 3 tier bersih, FAQ accordion | SaaS B2B, AI platform, developer tools |
| **B. Product Showcase Lapang** | Foto produk asli besar di tengah dengan ruang kosong luas, tipografi display kuat, spesifikasi diringkas jadi 3–4 angka kunci tanpa paragraf | E-commerce flagship, F&B/minuman, fashion, hardware |
| **C. Creative Studio & Portfolio** | Grid 2 kolom berjarak lebar (`28px–36px`), thumbnail karya besar + hanya judul & kategori `1` baris di bawah foto; detail proyek dibuka di modal/halaman detail | Agency, portofolio pribadi, arsitektur, fotografi |
| **D. Focused Single-Flow App** | 1 alur interaksi utama terpusat di layar tanpa sidebar penuh menu (terinspirasi *Inline Morphing Sheet* & *Smart Home Glass*), hasil tampil instan | Kalkulator, booking, generator, micro-SaaS |

---

## 5. Audit Anti-Keramean (Wajib Lolos Sebelum Selesai)

- [ ] Inti halaman langsung terbaca dalam **3 detik** tanpa membaca paragraf.
- [ ] Setiap kartu hanya punya judul pendek, angka/visual utama, dan maksimal 1 baris keterangan seperlunya.
- [ ] Terdapat whitespace minimal `35%` dengan jarak antar blok yang lega.
- [ ] Warna aksen dibatasi hanya di titik fokus (`<= 10%` layar), mayoritas latar tetap netral tenang.
- [ ] Konten detail & kontrol sekunder tersembunyi rapi di tab, modal, drawer, atau tooltip.
