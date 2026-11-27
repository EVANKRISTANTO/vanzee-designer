---
name: lighthouse-audit-fix
description: Use after building or significantly updating a website/web app (or when asked to run Lighthouse) to capture initial Lighthouse scores, analyze issues, recommend fixes via ask_question, apply approved changes, and re-verify scores.
---

# Lighthouse Audit, Analyze & Fix Workflow

Jalankan audit Lighthouse yang terukur setiap selesai membuat atau merombak website, lalu tampilkan hasil awal, analisa penyebab skor kurang, konfirmasi perbaikan ke pengguna, dan verifikasi ulang skornya.

## Alur Wajib (6 Langkah)

### 1. Siapkan URL Target (Mode Production/Preview Bila Memungkinkan)
- Untuk website lokal, lebih disarankan memakai **production build + preview** (`npm run build` lalu `npm run preview` atau static server) daripada dev server agar skor **Performance** (minifikasi, bundle size, caching) akurat.
- Jalankan server lokal sebagai background daemon (`IsDaemon: true`) bila belum aktif.

### 2. Jalankan Audit Awal
Jalankan skrip ringkas di folder `scripts/` skill ini (otomatis memakai Chrome atau Microsoft Edge yang terpasang; jika belum pernah install dependency, jalankan `npm install` di dalam folder `scripts/` terlebih dahulu):

```bash
node scripts/run-lighthouse.mjs "<URL>" --preset mobile
```
*(Gunakan `--preset desktop` bila pengguna meminta audit khusus desktop, atau jalankan keduanya bila perlu).*

### 3. Tampilkan Hasil Awal ke Pengguna
Sajikan ringkasan skor awal secara jelas sebelum membahas perbaikan:
- **Skor Kategori (0–100):** Performance, Accessibility, Best Practices, SEO.
- **Core Web Vitals:** FCP, LCP, TBT, CLS, Speed Index.
- Tandai kategori yang nilainya masih di bawah target (umumnya `< 90`).

### 4. Analisa Report & Susun Rekomendasi
Berdasarkan `topIssues` dari output JSON:
- Kelompokkan temuan berdampak terbesar (mis. gambar tanpa dimensi/format besar, CSS/JS render-blocking, kontras warna/label ARIA kurang, meta description/canonical hilang, atau header/security best practices).
- Jelaskan tiap temuan dengan bahasa sederhana dan spesifik (sebutkan file/elemen dan estimasi dampaknya jika ada — **jangan** mengarang angka yang tidak ada di output).

### 5. Konfirmasi Perbaikan Lewat `ask_question`
- **Jangan langsung mengedit kode sebelum konfirmasi**, kecuali pengguna memang sejak awal meminta perbaikan otomatis penuh.
- Gunakan `ask_question` (bila ada beberapa kelompok perbaikan, gunakan `is_multi_select: true` atau beri opsi "Terapkan semua rekomendasi" vs pilih kategori tertentu seperti Performance/Accessibility/SEO).

### 6. Terapkan Perbaikan & Cek Ulang (Before vs After)
- Terapkan perbaikan yang disetujui (sambil tetap mematuhi skill `antislop-ui`, `hallmark`, `typography-curation`, dan `micro-interactions`).
- Jika memakai production build, build ulang terlebih dahulu sebelum re-audit.
- Jalankan ulang `run-lighthouse.mjs` pada URL yang sama dan tampilkan tabel perbandingan **Skor Awal vs Skor Setelah Perbaikan**.
- Hentikan server daemon sementara bila sudah selesai dan tidak lagi dibutuhkan pengguna.
