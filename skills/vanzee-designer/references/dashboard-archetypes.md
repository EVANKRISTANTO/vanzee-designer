# Dashboard UI Design References & Visual Blueprints

Dokumentasi arsitektur visual untuk 7 referensi desain UI terkurasi di `vanzee-designer`.

## Protokol Kesesuaian Visual & Multi-Referensi (WAJIB DIPATUHI)

Setiap kali membangun dashboard, web app, atau antarmuka UI:
1. **Wajib tanya pilihan referensi dulu:** Jika user belum menyebut referensi desain, gunakan `ask_question` dengan `is_multi_select: true` agar user dapat memilih **satu** atau **gabungan beberapa referensi** di bawah ini.
2. **Wajib inspeksi gambar aslinya dulu:** Baca gambar dari path lokal `references/images/<nama-file>.jpg` **atau** akses/unduh melalui **URL CDN publik** di bawah ini (agar tetap terbaca di device mana saja) menggunakan `read_file` sebelum menulis HTML/CSS/komponen.
3. **Dukung Penggabungan Multi-Referensi (Hybrid):** Bila user memilih >= 2 referensi, padukan bagian terbaik masing-masing (mis. shell/header dari Referensi 1 + gaya KPI/surface dari Referensi 2 + table/chart dari Referensi 3) ke dalam satu sistem warna & tipografi yang serasi.
4. **Tirukan DNA visual secara presisi:** Pertahankan struktur shell, proporsi grid, hierarki permukaan, gaya grafik, warna aksen, dan tipografi kontras sesuai foto—jangan mengubahnya menjadi template kartu standar yang generik.
5. **Tetap patuhi guardrail teknis:** Gunakan ikon **Material Symbols & Icons**, font non-slop dari **Google Fonts** (`tabular-nums` untuk seluruh angka metrik/uang), micro-interactions GPU-only, serta 7 aturan Good UX.

---

## 1. Fennel AI Agent Dashboard Design
- **Gambar Referensi CDN (Publik):** `https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/references/fennel-ai-agent-dashboard.jpg`
- **Gambar Referensi Lokal:** [references/images/fennel-ai-agent-dashboard.jpg](images/fennel-ai-agent-dashboard.jpg)
- **Cocok untuk:** Workspace AI agent, otomasi tugas, approval workflow, manajemen proyek kolaboratif.
- **Shell & Struktur:**
  - App frame terang bersih (`#F8F9FB`) dengan sidebar kiri ringan (`#F3F4F6`, ~`220px`, border kanan hairline `#E5E7EB`).
  - **Sidebar Kiri:** Workspace switcher di atas (`Fennel`), tombol `+ New` + ikon search, nav utama (`Home` active white pill, `Projects`, `Templates`, `Artifacts`, `Tasks` + badge jumlah), grup `Recent` (folder ikon), grup `Teams`, dan footer **Credits Card** (`Pro` pill, sisa kredit, progress bar segmen biru kotak-kotak, `Resets ...` + `Upgrade`) + profil user.
  - **Top Bar:** Breadcrumb kiri (`Home` + star), search pill tengah (`Search in project ⌘K`), kanan avatar stack tumpuk + tombol `Share` + menu `...`.
- **Anatomi Konten Utama:**
  - **Baris Hero (2 Kolom):** Kiri tanggal kecil muted + sapaan bold (`Good morning, ...`) + 1 baris ringkasan tugas; kanan **AI Prompt Composer Card** putih (`Ask your agents...`, ikon `+`, `@`, attachment di kiri bawah; selector `Agent v`, pill mode `Max`, dan tombol kirim bulat biru solid `#1D7AFC` di kanan bawah).
  - **4 KPI Cards Sejajar:** Kartu putih sudut membulat (`12px–14px`), border tipis `#EAECEF`, ikon kecil + label di atas, angka besar bold (`9h 15m`, `24`, `3`, `18`), dan 1 baris keterangan muted di bawah.
  - **Grid Bawah Asimetris (~62% Kiri / ~38% Kanan):**
    - *Kiri Atas — `Needs your approval` (`3` + `See all`):* Daftar persetujuan berisi ikon tipe file, judul tugas, metadata agen + waktu, serta sepasang tombol aksi di kanan (`Reject` outline + `Approve` biru solid).
    - *Kiri Bawah — `Running now` (`4` + `View tasks`):* Daftar proses berjalan dengan avatar maskot agen warna-warni (hijau, amber, teal, ungu), nama tugas + sub-step, progress bar biru tipis + estimasi waktu di kanan.
    - *Kanan Atas — `Recent files` (`See all`):* List file ringkas dengan ikon dokumen berwarna per tipe (hijau sheet, oranye slide, biru doc, ungu board) + chevron `>`.
    - *Kanan Bawah — `Your agents` (`6`):* Grid `3×2` kartu mini berlatar tint lembut (`#F7F8FA`), ikon agen membulat, nama agen, dan status pill (`● Working` biru lembut / `● Idle` abu-abu).

---

## 2. Paymo: Wallet Overview Dashboard UI
- **Gambar Referensi CDN (Publik):** `https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/references/paymo-wallet-overview.jpg`
- **Gambar Referensi Lokal:** [references/images/paymo-wallet-overview.jpg](images/paymo-wallet-overview.jpg)
- **Cocok untuk:** Dompet digital, fintech wallet, treasury pribadi, neobank web app.
- **Shell & Struktur:**
  - Canvas terang `#F5F7FA` dengan **ambient mesh gradient biru-slate lembut** di bagian atas-tengah (memberi kedalaman glassmorphism di belakang kartu teratas).
  - **Top Bar:** Logo bulat navy + wordmark di kiri; ikon bulat search, bell (titik notifikasi), dan avatar di kanan.
  - **Slim Icon-Only Left Rail (~56px):** 4 tombol ikon bulat melayang di atas (item aktif `Wallet` berlatar navy gelap `#182949` ikon putih) dan 2 di bawah (Settings, Logout).
  - **Header Halaman:** Judul `My Wallet` di kiri, tombol pill navy gelap (`↓ Export CSV`) di kanan.
- **Anatomi Bento Grid:**
  - **Baris Atas (3 Kolom):**
    1. *Available Balance Card:* Kartu kaca semi-transparan dengan gradasi biru es lembut, tombol panah bulat gelap di pojok kanan atas, angka saldo besar (`$56,751.23` + ikon toggle mata), teks `Available Limit • ... >`, dan **4 tombol Quick Actions bulat** (`Send`, `Add Funds`, `Pay Bills`, `QR`).
    2. *Stack 2 Kartu Metrik:* `Total Income` (`+$86,420.75` + pill tren coral lembut) di atas `Total Expenses` (`-$42,180.30` + pill tren coral lembut).
    3. *Credit Card Showcase:* Kartu putih berisi visual **kartu VISA frosted silver-to-deep-navy (`#253B63`)** dengan chip EMV, ikon contactless, watermark lengkung tipis, dan logo `VISA`.
  - **Baris Bawah (~65% Kiri / ~35% Kanan):**
    - *Kiri — `Cash Flow`:* Saldo + badge `% From last month` di kiri atas, dropdown `This Month v` di kanan atas; grafik batang vertikal membulat (`Jan–Dec`) bernuansa putih/es transparan, **1 batang aktif (`Aug`) berwarna navy gelap dengan pola arsiran diagonal (`repeating-linear-gradient`)** + tooltip mengambang putih berisi `Income` & `Expenses`.
    - *Kanan — `Upcoming Payments` (`View All`):* 5 baris tagihan dengan ikon bulat kiri, nama + deskripsi akun, nominal kanan atas + jatuh tempo kanan bawah.

---

## 3. Business Transactions Dashboard UI
- **Gambar Referensi CDN (Publik):** `https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/references/business-transactions-dashboard.jpg`
- **Gambar Referensi Lokal:** [references/images/business-transactions-dashboard.jpg](images/business-transactions-dashboard.jpg)
- **Cocok untuk:** Akuntansi bisnis, ledger transaksi, corporate banking, manajemen pengeluaran & approval.
- **Shell & Struktur:**
  - Sidebar kiri putih/terang (`~220px`) + area kerja utama `#F8F9FB` yang sangat lapang dan terstruktur.
  - **Sidebar Kiri:** Org switcher di atas, nav utama (`Transactions` aktif dengan pill lavender-indigo lembut `#EEF0FF`), sub-grup `Workflows` (`Bill Pay`, `Invoicing`, `Reimbursements`, `Accounting`), dan kartu promo bawah (miniatur kartu pembayaran + tombol charcoal `Set up now`).
  - **Top Bar:** Search pill kanan-tengah (`Search... ⌘K`), ikon link, bell, dan avatar.
  - **Header Halaman:** `Transactions` + subjudul singkat; tombol outline kanan `Match Receipts`.
- **Anatomi Konten:**
  - **3 Kartu Summary Aurora Gradient:** Kartu putih bersih dengan **sapuan gradasi pastel iridescent lembut dari sudut kanan atas**:
    1. `Net change this month`: wash biru langit -> lavender.
    2. `Money In`: wash mint -> peach hangat.
    3. `Money Out`: wash rose-pink -> amber lembut.
    Masing-masing punya ikon pill kecil di kiri atas, angka bold tabular (`+2,844.00 USD`), dan label subjudul di bawah.
  - **Tabel `Transactions` Full-Width:**
    - Toolbar atas: judul di kiri, sederetan tombol filter pill di kanan (`Data Views v`, `Filters`, `Date v`, `Keywords v`, `Amount v`, `↓ Export All`).
    - Kolom rapi: Checkbox, `Due date`, `To/From` (dengan logo/favicon vendor), `Status` (pill pastel: `Completed` hijau mint, `Canceled` merah coral, `Pending Review` amber), `Amount`, `Account`, `Method`, `GL Code` (dropdown inline), dan `Attachment` (tombol bulat `+`).
    - Footer pagination: `Showing 1-10 of 124 result` kiri; `Rows per page [10 v]` + `Previous / Next` kanan.

---

## 4. Ecommerce Orders Dashboard UI
- **Gambar Referensi CDN (Publik):** `https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/references/ecommerce-orders-dashboard.jpg`
- **Gambar Referensi Lokal:** [references/images/ecommerce-orders-dashboard.jpg](images/ecommerce-orders-dashboard.jpg)
- **Cocok untuk:** Admin e-commerce, order management system, SaaS merchant analytics.
- **Shell & Struktur:**
  - Kontras dramatis antara **Hero Banner Gelap Emerald (`#07140D`)** di atas dan area kerja terang (`#F6F7F8`) di bawah.
  - **Dark Hero Banner (~180px):** Latar hitam-hijau hutan dalam dengan aksen visual 3D metalik hijau emerald di kanan, search bar kaca gelap transparan + ikon settings & bell + pill profil operator kanan (`Operator · Dylan Parker`). Di kiri tampil tanggal + `Good Morning,` (sans) + nama pengguna memakai **display serif italic ekspresif** (`Dylan Parker.`). Bagian bawah banner berisi **baris tab horizontal** (`Dashboard`, `Orders` aktif putih/terang, `Products`, `Customers`, `Marketing`, `Online Store`, `Analytics`).
  - **Sub-header:** `Orders` + deskripsi singkat kiri; tombol hitam solid `+ New Product` kanan.
- **Anatomi Konten:**
  - **Baris Atas (Grid KPI 2×2 ~48% + Chart Lebar ~52%):**
    - *4 Kartu KPI dengan Micro-Chart Khas:*
      1. `Total Orders` (`8,215` + tren hijau) + **batang equalizer vertikal ungu membulat** di sisi kanan kartu.
      2. `New Orders` (`4,034` + tren hijau) + **batang vertikal oranye gaya diverging candlestick**.
      3. `Completed Orders` (`3,345` + tren hijau) + **matriks pill horizontal tersegmentasi oranye-abu**.
      4. `Cancelled Orders` (`1,543` + tren merah) + **matriks batang vertikal ungu-slate**.
    - *Kanan — `Order Analysis` Dual Line + Volume Card:* Dropdown `Monthly v`, 2 garis halus (oranye `Total orders`, ungu-biru `Cancelled`) di atas bar volume abu-abu tipis di bagian dasar, crosshair putus-putus vertikal, dan tooltip putih mengambang.
  - **Bawah — `Order list` Table Full-Width:** Toolbar dengan `Search orders...`, `All status v`, `↓ Export`; baris order dengan `Order Id` monospace (`#ORD-7F29A1`), `Customer`, `Date`, `Total`, `Items`, pill `Status` (`Delivered` hijau mint, `Shipped` ungu muda), `Payment`, dan `Actions (...)`.

---

## 5. FleetTrack: Container Fleet Dashboard
- **Gambar Referensi CDN (Publik):** `https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/references/fleettrack-container-fleet.jpg`
- **Gambar Referensi Lokal:** [references/images/fleettrack-container-fleet.jpg](images/fleettrack-container-fleet.jpg)
- **Cocok untuk:** Manajemen armada logistik, pelacakan kontainer, telemetri IoT kendaraan, supply chain ops.
- **Shell & Struktur:**
  - UI industrial presisi pada canvas abu-abu terang (`#F4F5F7`) dengan aksen utama **Safety Orange (`#FF4D00` / `#F2541B`)** dan hitam charcoal (`#111315`).
  - **Top Bar:** Logo oranye membulat + `FleetTrack` kiri; **floating pill nav tengah** (item aktif `Dashboard` berbentuk pill hitam solid berteks putih + 4 ikon nav lainnya); kanan search pill + bell + avatar.
  - **Header Row:** `Dashboard Overview` + subjudul di kiri; **4 kartu pill KPI ringkas sejajar** di kanan (`Active Vehicles`, `Vehicles in Maintenance`, `Average Efficiency`, `Cargo in Transit`) lengkap dengan ikon kotak dan badge tren `%`.
- **Anatomi Telemetri 2 Kolom (~68% Kiri / ~32% Kanan):**
  - **Hero Truck/Container Showcase:** Visual besar truk kontainer putih dengan **kontainer oranye mencolok**, tombol hotspot `+` di badan kontainer, **kartu overlay kaca `Container Details` di sisi kiri** (`Container ID #YMLU 654383`, diagram mini kontainer, `Type`, `Status: • Active`, `Location`, `In Transit`), tombol zoom `- + Reset View` di kiri bawah, dan panah carousel `< >` di kanan bawah.
  - **Strip Selektor Kendaraan:** 4 kartu horizontal unit kendaraan (`#A-BBS4964`, `#A-BBS4953` aktif berborder gelap, dll.) dengan berat kargo dan thumbnail sisi truk.
  - **Baris Telemetri Bawah (3 Sub-panel):**
    1. Grid `2×2` mini stat (`Total Pallets loaded`, `Free space remaining`, `Temperature status`, `Fuel needed`).
    2. `Delivery efficiency`: nilai besar + **grafik penggaris tick/barcode horizontal** dengan penanda target.
    3. `Load Balance`: perbandingan `Left side` vs `Right side` dengan **indikator skala tengah tick-bar** + `Risk of tilt: Low`.
  - **Kolom Kanan (3 Kartu Bertumpuk):**
    1. `Truck Information`: Driver avatar + tombol telepon & chat cepat, ID truk/dock/waktu mulai, **garis progres rute visual (`NY ----||---- AU`)**, serta dua tombol (`Change Driver`, `Edit Route`).
    2. `Capacity & load`: **Gauge setengah lingkaran tersegmentasi oranye-abu (`68% Weight`)** + `Current load` & `Max. Capacity`.
    3. `AI Route Optimization`: Thumbnail peta isometrik 3D truk di jalan raya dengan floating badge (`AI Optimized`, `24% Fuel Saved`) + kontrol zoom peta.

---

## 6. Personal Finance Analytics Dashboard
- **Gambar Referensi CDN (Publik):** `https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/references/personal-finance-analytics.jpg`
- **Gambar Referensi Lokal:** [references/images/personal-finance-analytics.jpg](images/personal-finance-analytics.jpg)
- **Cocok untuk:** Analitik keuangan pribadi, wealth tracker, laporan cash flow konsumen.
- **Shell & Struktur:**
  - Permukaan putih bersih di atas canvas cloud-gray (`#F6F7FA`) dengan aksen **Indigo-Cobalt (`#6165F7`)** dan **Coral-Orange (`#F97316`)**.
  - **Slim Left Icon Rail (~56px):** Logo bulat di atas; 5 ikon bulat vertikal di tengah (ikon aktif `Analytics` berupa lingkaran biru-indigo bercahaya lembut).
  - **Top Bar:** Search pill (`Search or jump to ⌘K`) di kiri; dropdown `Move Money v`, bell, dan avatar di kanan.
  - **Header Halaman:** `Analytics` + subjudul di kiri; date-range pill (`Apr 24, 2026 - May 28, 2026 v`) + tombol `↓ Export Report` di kanan.
- **Anatomi Konten:**
  - **Baris 5 KPI Cards Sejajar:** `Total Balance`, `Total Income`, `Total Expenses`, `Net Savings`, `Transactions` — masing-masing memiliki ikon badge pastel bulat/persegi di kiri atas, menu `...`, label `Vs last 30 days`, nominal besar tabular, dan badge tren `%` hijau/merah.
  - **Baris Tengah (~60% Kiri / ~40% Kanan):**
    - *Kiri — `Balance Overview`:* Dual line chart halus (garis oranye Income & garis indigo Expense) di atas histogram volume abu-abu tipis + tooltip mengambang (`May 2026`).
    - *Kanan — `Spending by category`:* **Polar / Nightingale Rose Chart transparan pastel** (sektor melingkar beradius beda dalam biru, ungu, peach, lavender) dengan daftar legenda titik warna & persentase di sebelah kanan (`Daily Needs 40%`, `Savings 20%`, dst.).
  - **Baris Bawah (3 Kartu Seimbang):**
    1. `Top Spending merchants`: Baris brand (`Amazon`, `Starbucks`, `Apple Store`) dengan ikon bulat, **progress bar horizontal berwarna** (hijau, oranye, indigo), dan nominal + `%` di kanan.
    2. `Income vs Expense`: **Gauge setengah lingkaran bergaris tick tersegmentasi** (oranye aktif vs abu-abu sisa) dengan teks tengah `Net Savings $1,750.00` serta split `Total Income` & `Total Expense` di bawah.
    3. `Cash flow Trend`: Grafik pulsa garis tajam (`Net Cash Flow $3,750.00`) dengan tooltip pin di titik puncak (`Mar 12, 2026`).

---

## 7. FleetTrack: Fleet Reports Dashboard
- **Gambar Referensi CDN (Publik):** `https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/references/fleettrack-fleet-reports.jpg`
- **Gambar Referensi Lokal:** [references/images/fleettrack-fleet-reports.jpg](images/fleettrack-fleet-reports.jpg)
- **Cocok untuk:** Halaman laporan lanjutan dalam satu ekosistem produk (pasangan multi-page dari *FleetTrack Container Fleet*), reporting operasional, audit KPI & biaya.
- **Shell & Struktur:**
  - Mewarisi 100% design system **FleetTrack** (`#F4F5F7` canvas, `#FF4D00` orange accent, floating dark pill top nav dengan `Reports` aktif).
  - **Header Row:** `Reports Overview` + subjudul di kiri; 4 KPI pills di kanan (`Total Trips`, `Total Distance`, `Total Fuel Used`, `Total Maintenance Cost`).
  - **Sub-Navigasi Tab Pill:** `Overview` (aktif teks oranye), `Trips`, `Fuel`, `Maintenance`, `Driver Performance`, `Compliance`, `Alerts`.
- **Anatomi Konten:**
  - **Baris Tengah (3 Kartu Analitik Seimbang):**
    1. `Trips Overview` (`Daily v`): Garis step/threshold oranye tebal per segmen waktu di atas tren abu-abu tipis.
    2. `Fuel Usage` (`Daily v`): Line pulse chart oranye tajam.
    3. **Kartu Kontras Gelap (`#141517`) — `Fuel Usage & Cost`:** Satu kartu aksen gelap yang menjadi jangkar visual kontras di sebelah kanan, berisi tombol `See All` putih, metrik besar `7.4 L`, 4 kolom mini (`Diesel 78%`, `Gasoline 62%`, `Total Cost $21.4K`, `Last month +6%`), dan **grafik histogram/barcode vertikal putih-abu** di bagian bawah.
  - **Baris Bawah (~64% Kiri / ~36% Kanan):**
    - *Kiri — `Report Summary` Table:* Filter segmented tabs (`All`, `Pending`, `Responded`, `Assigned` aktif oranye, `Completed`) + ikon filter tanggal/biaya; baris tabel berisi ikon truk + `Order ID`, `Customer` + kategori 2 baris, `Route` (asal -> tujuan 2 baris), `Weight`, `Date` (pastikan label kolom tanggal selalu akurat), dan `Status`.
    - *Kanan — `Fleet distribution by type` (`See All`):* 7 baris kategori armada (`Truck`, `Van`, `Car`, `M-Cycle`, `Minibus`, `Trailer`, `Box Truck`) dengan ikon kiri, angka jumlah, **meter batang vertikal oranye tersegmentasi**, dan `%` di kanan.

---

## 8. Cloud Dock: File Management Dashboard
- **Gambar Referensi CDN (Publik):**
  - Layout Utama & Sidebar: `https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/references/file-management-cloud-dock-main.jpg`
  - Tabel Kanan & Style Guide: `https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/references/file-management-cloud-dock-styleguide.jpg`
- **Gambar Referensi Lokal:** [file-management-cloud-dock-main.jpg](images/file-management-cloud-dock-main.jpg) & [file-management-cloud-dock-styleguide.jpg](images/file-management-cloud-dock-styleguide.jpg)
- **Cocok untuk:** Cloud storage, document hub, team drive, workspace manajemen file & kolaborasi.
- **Palet & Tipografi (Sesuai Style Guide Asli):**
  - **Theme Colors:** Deep Obsidian `#120B24`, Electric Violet `#7C3AED` / `#8B5CF6`, Soft Lavender `#EDE9FE`, Ice Sky `#DCEAFE`, Pastel Lilac `#C4B5FD`, di atas permukaan konten putih bersih (`#FFFFFF` / `#F8F7FC`).
  - **Tipografi:** Neo-grotesque bersih bergaya `Helvetica Neue` (`Instrument Sans` / `Hanken Grotesk` di Google Fonts sebagai alternatif bebas-slop yang sangat presisi).
- **Shell & Struktur:**
  - **Dual Left Navigation:** Slim icon rail putih paling kiri (~`48px`) + **Sidebar gelap obsidian (`#120B24`)** (~`240px`) berisi header `Dashboard`, `Search ⌘K`, item aktif pill gradasi ungu (`Overview` dengan sub-tree `My Overview`, `Recent Activity 242`), pohon folder `Starred Files` (`UI & UX Design` -> `Products Designs`), tombol putus-putus `+ New Folder`, dan **kartu promo bawah dengan ilustrasi roket 3D** (`Trial Ending Soon!`) + tombol outline `Upgrade to Pro`.
  - **Top Bar:** Kiri bar kuota storage (`Basic Storage 50GB / 100GB` + progress bar ungu) & breadcrumb (`Dashboard / Overview / Recent Activity 242`); kanan ikon tema, info, bel, avatar, tombol `Short v`, dan CTA pill ungu solid `+ Create`.
- **Anatomi Konten:**
  - **Baris `Recent edited` (`View all >`):** Kartu preview dokumen besar sudut membulat (`Project Brief.docx`, `Design Notes.docx`, `Project Details.xls`, `Cloud Dashboard.png`) lengkap dengan thumbnail pratinjau, badge tipe file, hover pill gelap `See details`, dan waktu edit.
  - **Baris `Shared Folders` (`Newest v` + `View all >`):** **Kartu folder bertumpuk 3D dengan tab folder di atas** — 1 kartu aktif berwarna ungu gelap solid (`Dashboard Designs · 62 files, 2.6 GB`) dan kartu lainnya putih dengan tab pastel ungu (`Figma Files`, `KDS Dashboard`, `Mobile App - UI`), lengkap dengan ikon app & **avatar stack kolaborator (`+12`)** di pojok kanan bawah.
  - **Bagian Tabel File & Toolbar:** Tab segmen (`Recently Opened` aktif ungu muda, `Shared Documents`, `Shared Folders`), search `Search files... ⌘F` + toggle `Grid / List`, kolom tabel (`FILE NAME` + sub-status `Shared` / `Restricted`, `OWNER` avatar stack, `DATE UPLOADED`, `LAST MODIFIED`, `FILE SIZE`), serta **sticky bottom selection bar** saat ada file dicentang (`Cloud Dashboard.fig · 1.5 GB · Restricted` + tombol aksi cepat download, link, hapus, export).

---

## 9. Smart Home Control Dashboard
- **Video Referensi CDN (Publik):** `https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/references/smart-home-control-dashboard.mp4`
- **Video Referensi Lokal:** [smart-home-control-dashboard.mp4](images/smart-home-control-dashboard.mp4)
- **Cocok untuk:** Smart home / IoT control hub, monitoring energi & solar, kontrol perangkat ruangan, dashboard bertema dark glassmorphism adaptif.
- **Shell & Struktur (Dark Ambient Glass):**
  - Latar foto interior/alam lembut dengan efek blur di belakang kontainer **dark olive-charcoal translucent glass (`#0F1714`–`#17201C`, border tipis `rgba(255,255,255,0.1)`)**.
  - **Top Header:** Kiri badge rumah (`My House · 71°F · Sunny`), tengah AI search pill (`Ask Havra`), kanan notifikasi & badge user (`Elia`).
  - **Slim Left Floating Icon Dock (~52px):** Ikon bulat transparan untuk navigasi utama (`Home`, `History`, `Devices`, `Energy`, `Security`, `Settings`).
  - **Bottom Floating Room & View Bar:** Pill switcher ruangan (`All`, `Living Room`, `Bedroom`, `Kitchen` aktif hijau, `Office`, `+`) dan tab halaman (`Home`, `Energy`, `Settings`).
- **3 Tampilan Utama (Multi-View Blueprint):**
  1. **Home Control View (Bento Grid):**
     - *Kartu Kiri Tinggi (`Air Conditioner` / `Kitchen Lights`):* Dial termostat melingkar (`19.5°` / `21°`, `Heat to 23°`) + 3 tile mode (`Cooling` aktif hijau, `Heating`, `Airflow`); atau **kartu slider kecerahan vertikal penuh (`90%` dengan isi cahaya krem hangat dari bawah)** + radio suhu warna (`Warm`, `Soft`, `Cool`). Di bawahnya mini kartu cuaca (`27° / 18°`).
     - *Grid Kanan:* Kartu wide media player (`Tidewater` + cover album + scrubber), kartu perangkat pintar lengkap dengan foto hardware 3D/nyata & toggle (`Sonos One`, `Dyson Purifier 4`, `Dishwasher 62%` ring hijau, `Fridge 3°`), serta kartu pratinjau kamera ruangan di kanan bawah.
  2. **Energy View (`Energy` + `Export CSV`):**
     - 4 kartu KPI berwarna solid/tint kuat (`Using now 3.82 kW` hijau tua, `Used today 14.3 kWh` emerald, `Solar today 20.8 kWh` kuning-amber, `Bought so far 0.0 kWh` coral).
     - Bawah kiri (~`68%`): `Used and made` (`Day | Week | Month`) — **grafik batang ganda hijau vs amber per jam** dengan tooltip interaktif.
     - Bawah kanan (~`32%`): `Solar` — **circular ring gauge (`48% Saved`)** + rincian `From sun` & `Bought`.
  3. **Settings -> Appearance (Live Theme Customizer):**
     - Kontrol `Theme` (`Light`, `Dark`, `System`), `Palette` pills (`Havra`, `Harbour`, `Ember`, `Grove`, `Slate`), `Accent` color hex input, `Glass tint` (`Neutral`, `Cool`, `Warm`), `Roundness`, `Density`, disandingkan dengan panel `Preview` real-time di kanan.
