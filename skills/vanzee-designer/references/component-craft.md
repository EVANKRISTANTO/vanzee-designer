# System-Wide Component Craft & Micro-Interaction Standard

Setiap komponen pendukung—bukan hanya layout utama/hero—**wajib mewarisi token visual yang sama** (palet warna, permukaan, hairline border, radius scale, tipografi, elevasi bayangan, dan kurva gerak) agar seluruh pengalaman antarmuka terasa satu kesatuan berkualitas tinggi.

## Aturan Utama: System-Wide Visual Parity
1. **Tanpa Komponen "Anak Tiri":** Modal `<dialog>`, popover, dropdown/select, tooltip, toast, alert, tabel, pagination, drawer, command palette, badge, slider, dan empty state tidak boleh dibiarkan memakai tampilan default browser mentah (`<select>` double-arrow, `alert()` browser, `<input>` tanpa styling, atau tabel polos).
2. **Warisi Token Desain Utama:** Gunakan `--surface`, `--border-hairline`, `--radius-*`, `--font-sans`/`--font-mono`, warna aksen referensi terpilih, serta token gerak `--ease-*` dan `--dur-*`.
3. **Interaktif & Aksesibel Penuh:** Semua kontrol wajib memiliki `:hover`, `:active` (`scale(0.97)`), `:focus-visible`, ukuran sentuh memadai (`>= 44px` pada tombol aksi/navigasi), dan menghormati `prefers-reduced-motion`.

---

## 1. Selection & Pickers (Kontrol Pemilih Lanjutan)
- **Select / Dropdown & Date Range Pill:**
  - Wajib `-webkit-appearance: none; appearance: none;` (plus `::-ms-expand { display: none; }`) saat memakai ikon chevron kustom agar tidak muncul panah ganda.
  - Pilihan bertingkat/kustom gunakan popover menu dengan highlight item aktif, indikator centang, dan navigasi keyboard panah.
- **Combobox / Autocomplete & Multi-Select Tag Input:**
  - Filter instan saat mengetik, sorot teks cocok, serta chip/tag pilihan dengan tombol hapus `×` halus (`scale` pop-in/out).
- **Toggle Switch, Segmented Control & Range Slider:**
  - *Toggle:* thumb bergeser dengan `--ease-spring`, warna track berubah mulus.
  - *Segmented Control:* pill aktif meluncur mulus (`transform: translateX(...)`) di belakang opsi terpilih (`Day | Week | Month`).
  - *Range Slider:* track aktif terisi sesuai persentase, thumb membesar halus saat drag, dan tooltip nilai live di atas thumb.
- **Stepper, Star Rating, File Dropzone & OTP Input:**
  - *Stepper:* tombol `-` / `+` taktil + angka `tabular-nums`.
  - *Dropzone:* border putus-putus menyala aksen saat `dragenter/dragover`, tampilkan preview file + progress bar real-time.
  - *OTP / PIN:* auto-advance antar kotak digit + dukungan paste penuh.

---

## 2. Buttons & Action Triggers
- **Hierarki Tombol Lengkap:**
  - *Primary:* warna aksen utama referensi, kontras teks >= 4.5:1, lift `-1px` saat hover, `scale(0.97)` saat `:active`.
  - *Secondary / Outline / Ghost:* hairline border selaras kartu, isi transparan/lembut.
  - *Destructive:* warna merah tegas (`#dc2626` / `#b02926`), wajib konfirmasi eksplisit pada aksi permanen.
  - *Async / Loading:* spinner ringkas + teks progres (*"Menyimpan..."*), pertahankan lebar tombol (`min-width` / grid overlay) agar layout tidak melompat.
- **Bulk Action Bar:** Muncul slide-up halus di bagian bawah layar ketika baris dicentang, berisi jumlah item terpilih + tombol aksi cepat (`Download`, `Share`, `Delete`) + tombol batal pilihan.

---

## 3. Navigation & Wayfinding
- **Sidebar / Slim Icon Rail & Mobile Drawer:**
  - Tandai item aktif tidak hanya dengan warna, tetapi juga bentuk/pill/elevasi yang serasi referensi (mis. pill ungu gradasi atau lingkaran indigo bercahaya).
  - Pada mobile, ubah sidebar menjadi **Drawer / Bottom Bar** dengan tombol trigger jelas, `Esc` untuk tutup, dan atribut `inert` di konten belakang saat drawer terbuka.
- **Tabs, Breadcrumbs, Pagination & Wizard Stepper:**
  - *Pagination:* tampilkan jumlah data (*"Showing 1–10 of 124"*), selector `Rows per page`, dan state disabled yang jelas pada `Previous` / `Next`.
  - *Command Palette (`⌘K` / `Ctrl+K`):* buka modal `<dialog>` terpusat dengan filter real-time, highlight baris terpilih, dan badge `<kbd>` ringkas.

---

## 4. Data Display, Tables & Charts
- **Data Table:**
  - Wajib `tabular-nums` untuk angka/uang/tanggal, header jelas (`<th scope="col">`), sort indicator berotasi mulus, row hover tint lembut, status pill warna pastel ber-kontras >= 4.5:1, serta *expandable row* atau *scroll container* rapi di mobile.
- **Accordion (`<details>` / Grid `0fr -> 1fr`), Timeline & Avatar Stack:**
  - *Avatar Stack:* avatar bertumpuk dengan border pemisah putih `2px` yang sedikit menyebar (`translateX`) saat hover + badge `+N`.
- **Charts & Gauges (Line, Bar, Polar, Half-Donut, Progress Ring):**
  - Wajib interaktif (hover maupun fokus keyboard pada titik/batang) menampilkan crosshair halus + tooltip mengambang yang memakai gaya kartu, radius, dan bayangan yang sama dengan UI utama.

---

## 5. Feedback, Status & Overlays
- **Modal `<dialog>`:**
  - Gunakan elemen native `<dialog closedby="any">` dengan `overscroll-behavior: contain` pada `dialog:modal` & `dialog::backdrop`, backdrop blur ringan (`4px`), serta animasi masuk `scale(0.96) translateY(8px) -> none` + fade (`220ms --ease-out-expo`).
- **Popover (`[popover]`) & Tooltip:**
  - Gunakan radius, border hairline, dan shadow yang konsisten dengan kartu utama; pastikan selalu bisa ditutup dengan `Esc` atau klik luar.
- **Toast / Snackbar & Inline Alert:**
  - *Toast:* slide-in di pojok layar dengan ikon status, `aria-live="polite"`, dan auto-dismiss bersih.
  - *Inline Alert:* jelaskan penyebab + langkah pemulihan (mis. tombol *"Coba lagi"*).
- **Skeleton Loader & Guided Empty State:**
  - *Skeleton:* menyerupai proporsi kartu/baris asli dengan shimmer GPU-only (`transform: translateX`).
  - *Empty State:* ikon relevan + judul singkat + alasan kosong + CTA utama yang langsung bisa diklik.

---

## 6. Layout, Gestures & Media
- **Bento / Asymmetric Grid & Carousel:** Gunakan `aspect-ratio` tetap agar bebas CLS, scroll-snap halus + dot indikator aktif pada carousel.
- **Drag-to-Sort & Swipe-to-Delete:** Beri elevasi bayangan lembut saat item diseret; saat swipe hapus, tampilkan aksi merah dengan konfirmasi/undo toast.
- **Interactive Media / Hotspot:** Pastikan tombol kontrol media (`Play/Pause`, `Equalizer`) dan pin hotspot peta/produk memenuhi tap target aman dan punya `aria-label`.
