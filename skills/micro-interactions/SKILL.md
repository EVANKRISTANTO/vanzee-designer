---
name: micro-interactions
description: Use when designing or implementing UI components, pages, transitions, buttons, forms, navigation, or feedback states so every interface includes purposeful, responsive micro-interactions and motion.
---

# UI/UX Micro-Interactions & Purposeful Motion

Setiap elemen interaktif dan transisi di antarmuka harus terasa **responsif, hidup, dan memberi umpan balik jelas** kepada pengguna—bukan animasi tempelan yang berjalan terus-menerus.

## 1. Prinsip Dasar Motion & Micro-Interaction

1. **Punya Tujuan UX yang Jelas:** Animasi dipakai untuk menandakan respons klik, hubungan spasial (asal modal/dropdown), perubahan state, atau progres loading—bukan untuk hiasan berputar/berdenyut tanpa henti.
2. **Cepat & Ringan (GPU-Only):** Animasikan properti `transform` dan `opacity` (plus warna/shadow ringan bila perlu). **Jangan pernah** memakai `transition: all` dan **jangan** menganimasikan `width`, `height`, `top`, `left`, `margin`, atau `padding`.
3. **Aksesibilitas Wajib:** Setiap elemen interaktif harus memiliki `:focus-visible` yang jelas, dan semua animasi/transisi wajib menghormati `@media (prefers-reduced-motion: reduce)`.
4. **Konsistensi ke Seluruh Komponen Sekunder (System-Wide Parity):** Jangan hanya memoles hero/layout utama—komponen pendukung seperti `select`/dropdown (hilangkan panah ganda native), `combobox`, `date picker`, `pagination`, `command palette`, `drawer`/`bottom sheet`, `popover`, `tooltip`, `toast`, `inline alert`, `empty state`, dan `bulk action bar` wajib memakai token gerak, radius, border, dan kualitas visual yang setara dengan desain utama (lihat `vanzee-designer/references/component-craft.md`).

## 2. Token Timing & Easing Standar

Deklarasikan token ini di CSS `:root` agar gerak seluruh antarmuka terasa seragam dan terkalibrasi:

```css
:root {
  --ease-snappy: cubic-bezier(0.2, 0, 0, 1);
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

  --dur-instant: 90ms;
  --dur-fast: 150ms;
  --dur-base: 220ms;
  --dur-slow: 320ms;
}
```

## 3. Daftar Micro-Interaction yang Wajib Dipikirkan per Komponen

1. **Tombol & Elemen Klik (`button`, `a`, card interaktif):**
   - *Hover:* perubahan warna halus + lift ringan (`translateY(-1px)`) atau pergeseran ikon arah hanya jika bermakna (`150ms`).
   - *Active / Press:* efek tekan taktil (`transform: scale(0.97)` dalam `90ms`) agar klik terasa nyata di desktop maupun sentuhan mobile; jaga area sentuh minimal `44px × 44px`.
   - *Focus:* `:focus-visible` muncul instan tanpa delay.
   - *Micro-Feedback Spesifik:* gunakan efek seperti *Like Burst* (pop + particle ring), *Send -> Sent* (ikon meluncur + status pill), *Ripple Tap* dari titik klik, atau *Trash / Unlock* state morph.

2. **Aksi Async, Form & Umpan Balik State:**
   - *Copy / Submit / Save / Download:* transisi ikon & teks yang halus (mis. `Salin` -> `Tersalin` dengan ikon centang pop-in `--ease-spring`).
   - *Progress & Loading:* ganti isi tombol dengan spinner ringkas berlabel jelas (*"Menyimpan..."*) tanpa mengubah lebar tombol, atau pakai *Progress Bar* / *Progress Ring* (`stroke-dashoffset`) untuk progres terukur.
   - *Error & Validasi Upfront:* tampilkan aturan input (mis. syarat kata sandi) sejak awal secara live checklist sebelum gagal; saat error muncul, sertakan pesan kontekstual + tombol pemulihan (*"Coba lagi"*) dan getaran horizontal ringan (`±4px`, `240ms`).
   - *Float Label:* jika memakai input kompak, geser label ke atas (`translateY` + `scale`) saat fokus/terisi agar label tetap terlihat setelah diketik.

3. **Navigasi, Tab, Rating & Toggle:**
   - *Tabs / Segmented Control:* indikator aktif bergeser mulus (`transform: translateX(...)`) mengikuti tab terpilih.
   - *Menu -> Close & Search Expand:* morph ikon hamburger menjadi `X` dan perluas ikon search menjadi kolom input dengan transisi halus.
   - *Toggle Switch, Day/Night & Checkbox:* thumb bergeser dengan `--ease-spring` + centang SVG `stroke-dashoffset` draw-in.
   - *Stepper, Range Slider & Star Rating:* respon angka/bintang instan dengan `--ease-spring` pada setiap perubahan nilai.

4. **Modal, Toast, Popover, Card & Accordion:**
   - *Masuk / Keluar:* kombinasikan `opacity: 0 -> 1` dan `transform: scale(0.96) translateY(6px) -> none` (`220ms --ease-out-expo`; keluar lebih cepat `150ms`), serta *Toast* slide-in untuk notifikasi non-blokir.
   - *Dialog Destruktif:* label tombol aksi wajib menyebut aksi eksplisit (mis. *"Hapus catatan"*, bukan *"OK"*).
   - *Accordion / FAQ:* pakai teknik CSS Grid `grid-template-rows: 0fr -> 1fr` + rotasi chevron `180deg`, bukan `max-height` tebak-tebakan.
   - *Card & List Gestures:* terapkan *Avatar Stack* hover spread, *Card Flip* (`rotateY(180deg)`), *Drag to Sort* elevasi bayangan, atau *Swipe Delete* dengan collapse halus bila relevan.

5. **List, Data, Empty State & Scroll Reveal:**
   - *Entry / Stagger:* bila memakai animasi masuk halaman/list/bar chart, gunakan stagger singkat (`30ms–45ms` per item, total <= `300ms`) agar pengguna tidak menunggu.
   - *Skeleton vs Layar Kosong:* untuk loading halaman/list, **selalu utamakan skeleton shimmer** (`transform: translateX` pada pseudo-element) yang menyerupai layout asli daripada layar kosong + spinner tengah agar bebas layout shift (CLS).
   - *Guided Empty State:* saat data benar-benar kosong, tampilkan ikon, teks ringkas, dan CTA langkah berikutnya.

> Untuk katalog lengkap 42 pola micro-interaction & contoh resep CSS siap pakai, rujuk skill **`vanzee-designer`**, dan untuk 20 pola animasi teks/headline, rujuk skill **`text-animations`**.

## 4. Aturan Reduced Motion (Wajib Ada di CSS)

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
