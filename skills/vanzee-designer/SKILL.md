---
name: vanzee-designer
description: Use when designing, building, or reviewing websites, web apps, UI components, icons, typography, animations, or micro-interactions so interfaces use curated design libraries, purposeful motion, and verified UX guardrails.
---

# Vanzee Designer — Curated UI/UX Resources, Motion & UX Guardrails

Pusat kurasi resource UI/UX, daftar micro-interaction, dan standar Good UX untuk menghasilkan antarmuka web dan aplikasi yang rapi, responsif, berkarakter, dan mudah digunakan.

## 1. Curated Resource & Library Stack

Gunakan library terkurasi di bawah ini sebagai sumber utama saat merancang atau membangun antarmuka:

### A. Icon, Illustration & 3D Library
- **Material Symbols & Icons (Google Fonts):** `https://fonts.google.com/icons`
  - **Standar pakai:** Pilih satu gaya konsisten per proyek (`Outlined`, `Rounded`, atau `Sharp` — jangan dicampur dalam satu antarmuka).
  - **Variable Axes:** Manfaatkan sumbu `wght` (ketebalan selaras dengan font teks), `FILL` (`0` untuk default, `1` untuk state aktif/terpilih), `GRAD`, dan `opsz` agar ikon tajam di semua ukuran.
  - **Performa:** Untuk proyek produksi, utamakan SVG inline/komponen atau muat Google Fonts stylesheet dengan parameter `&icon_names=...` agar hanya ikon yang dipakai yang diunduh.
  - **Aksesibilitas:** Setiap tombol ikon wajib memiliki label teks pendamping atau `aria-label` yang jelas, serta area sentuh minimal `44px × 44px`.
- **Icons8 (Icons, Illustrations & 3D):** `https://icons8.com/`
  - Gunakan untuk ikon bergaya khusus, ilustrasi editorial/empty-state, dan elemen 3D siap pakai yang serasi dengan tema visual produk.

### B. Font Library & Typography Inspiration
- **Google Fonts:** `https://fonts.google.com/`
- **Fontshare (Quality Free Fonts):** `https://www.fontshare.com/` — sumber font modern berkualitas gratis (*Satoshi*, *Clash Display*, *Cabinet Grotesk*, *General Sans*, *Switzer*, *Zodiak*, dll.) untuk menghindari pilihan monoton.
- **Typewolf:** `https://www.typewolf.com/` — referensi pairing tipografi dunia nyata dan panduan proporsi editorial/UI.
  - **Standar pakai:** Padukan 1 Display/Heading + 1 Body (+ 1 Mono opsional untuk angka/harga/kode) dengan kontras karakter yang jelas (koord. dengan skill `typography-curation`).
  - **Anti-Slop:** Hindari memakai *Inter*, *Plus Jakarta Sans*, *Roboto*, atau *Space Grotesk* secara otomatis kecuali diminta langsung oleh pengguna atau merupakan identitas brand.
  - **Performa:** Muat hanya bobot (*weights*) yang benar-benar dipakai dan sertakan `display=swap`.

### C. Best Color Palettes (12 Palet 6-Step) & Contrast Tools
Gunakan **12 palet warna tonal 6 langkah** terkurasi di [references/color-palettes.md](references/color-palettes.md) (6 palet referensi CDN + 6 palet tambahan lintas industri, lengkap dengan aturan 60-30-10 & kontras WCAG >= 4.5:1):
- **Emerald Mint:** `#0D6E5D` → `#14A085` → `#2EC7A4` → `#6DE7C1` → `#B5F5DB` → `#E8FFF5` ([CDN](https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/palettes/palette-emerald-mint.jpg))
- **Espresso Mocha:** `#211713` → `#493027` → `#76503B` → `#A87557` → `#D0A98B` → `#F0DFCE` ([CDN](https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/palettes/palette-espresso-mocha.jpg))
- **Ocean Petrol:** `#071C27` → `#123747` → `#245568` → `#477C8B` → `#91B3B9` → `#DCE9E8` ([CDN](https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/palettes/palette-ocean-petrol.jpg))
- **Royal Plum:** `#17121F` → `#302538` → `#51405F` → `#796487` → `#B09BB8` → `#E8DDEB` ([CDN](https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/palettes/palette-royal-plum.jpg))
- **Electric Cobalt:** `#0A1A3C` → `#0F2E7A` → `#1857D6` → `#3B82F6` → `#93C5FD` → `#E0F2FF` ([CDN](https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/palettes/palette-electric-cobalt.jpg))
- **Crimson Velvet:** `#2B000D` → `#520018` → `#7C0A2A` → `#A5143C` → `#D9476D` → `#F8B3C4` ([CDN](https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/palettes/palette-crimson-velvet.jpg))
- **6 Palet Tambahan:** *Solar Amber*, *Sage Botanical*, *Safety Orange & Graphite*, *Obsidian Violet*, *Warm Paper & Charcoal*, dan *Cyber Lime & Carbon* (detail skala hex & mapping CSS ada di [references/color-palettes.md](references/color-palettes.md)).
- **Tools Uji Warna:** **Realtime Colors** (`https://www.realtimecolors.com/`) untuk simulasi UI langsung dan **Coolors** (`https://coolors.co/`) untuk eksplorasi & cek kontras.

### D. Website & UI/UX Inspiration Galleries
Gunakan galeri referensi di bawah ini saat meriset layout landing page, alur produk, gaya visual, maupun interaksi web modern:
- **Refero:** `https://refero.design/styles` — referensi gaya visual & komponen UI/UX terkurasi.
- **Land-book:** `https://land-book.com/` — galeri inspirasi desain website modern lintas industri.
- **Lapa Ninja:** `https://www.lapa.ninja/` — 7,300+ contoh desain landing page berkonversi tinggi.
- **Mobbin:** `https://mobbin.com/` — referensi pola flow & screen UI/UX produk nyata (web & mobile).
- **Godly:** `https://godly.design/` — inspirasi website dengan animasi, tipografi ekspresif, dan craft interaktif tinggi.
- **Awwwards:** `https://www.awwwards.com/` — tren web design, layout eksperimental, dan micro-interaction kelas dunia.
- **Shadcn Space & Animated Blocks:** `https://shadcnspace.com/` & `https://shadcnspace.com/animated-blocks` — library blok landing page & motion prompt Shadcn (Hero, Pricing, Bento, Feature, Integration, Auth, Full Landing Pages). Lihat katalog lengkap & video referensi CDN di [references/motion-blocks-library.md](references/motion-blocks-library.md).
- **Discord Webhook Builder & Components V2:** `https://discord-webhook.com/` — visual builder untuk menyusun Embeds, Components V2, interactive buttons, dan notifikasi terstruktur ([references/notification-and-discord-ui.md](references/notification-and-discord-ui.md)).

### E. Referensi Desain UI & Dashboard Terkurasi (9 Archetype CDN + Multi-Referensi)

Semua media referensi tersedia secara publik di **Fivemanage CDN** agar dapat diakses dan dilihat dari perangkat mana saja:

| Archetype Referensi | Ciri Visual Utama | Paling Cocok Untuk | Media Referensi (CDN Publik & Lokal) |
| :--- | :--- | :--- | :--- |
| **Fennel AI Agent Dashboard** | Sidebar terang, AI prompt composer + tombol biru, approval `Reject/Approve`, running tasks bar, grid status agen `3×2` | AI workspace, agent orchestrator, approval queue | [CDN](https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/references/fennel-ai-agent-dashboard.jpg) · [Lokal](references/images/fennel-ai-agent-dashboard.jpg) |
| **Paymo: Wallet Overview** | Mesh gradient es-biru lembut, icon-only rail, saldo kaca + 4 quick actions, kartu VISA navy, bar chart arsiran diagonal | E-wallet, fintech, dompet digital, treasury | [CDN](https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/references/paymo-wallet-overview.jpg) · [Lokal](references/images/paymo-wallet-overview.jpg) |
| **Business Transactions** | Sidebar workflow, 3 kartu KPI wash gradasi pastel iridescent sudut kanan atas, tabel ledger lengkap dengan GL code & status pill | Accounting, corporate banking, buku kas | [CDN](https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/references/business-transactions-dashboard.jpg) · [Lokal](references/images/business-transactions-dashboard.jpg) |
| **Ecommerce Orders** | Hero banner gelap emerald + nama display serif italic + tab bar di banner, 4 KPI spark-chart khas, dual line chart + order table | E-commerce admin, order & merchant analytics | [CDN](https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/references/ecommerce-orders-dashboard.jpg) · [Lokal](references/images/ecommerce-orders-dashboard.jpg) |
| **FleetTrack: Container Fleet** | Floating dark pill top nav, aksen safety orange `#FF4D00`, hero truk/kontainer + floating detail card, gauge arc & rute 3D | Logistik, fleet tracking, IoT & supply chain | [CDN](https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/references/fleettrack-container-fleet.jpg) · [Lokal](references/images/fleettrack-container-fleet.jpg) |
| **Personal Finance Analytics** | Icon rail indigo bercahaya, 5 KPI row, dual-line chart, polar rose pie chart pastel, merchant progress bar & half-donut tick arc | Personal finance, wealth & expense tracker | [CDN](https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/references/personal-finance-analytics.jpg) · [Lokal](references/images/personal-finance-analytics.jpg) |
| **FleetTrack: Fleet Reports** | Satu design system dengan FleetTrack, sub-nav tab pill, kartu jangkar kontras gelap (`Fuel Usage & Cost`), meter distribusi tick oranye | Halaman laporan lanjutan, ops & audit KPI | [CDN](https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/references/fleettrack-fleet-reports.jpg) · [Lokal](references/images/fleettrack-fleet-reports.jpg) |
| **Cloud Dock: File Management** | Dual sidebar obsidian `#120B24` + aksen electric violet `#7C3AED`, storage bar, preview dokumen, folder 3D avatar stack, bottom selection bar | Cloud storage, document hub, team drive | [CDN Main](https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/references/file-management-cloud-dock-main.jpg) · [CDN Style](https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/references/file-management-cloud-dock-styleguide.jpg) · [Lokal](references/images/file-management-cloud-dock-main.jpg) |
| **Smart Home Control** | Dark ambient translucent glass, icon dock kiri, room pill bawah, dial AC/vertical light slider, device cards 3D, Energy view & live Theme preview | Smart home, IoT control, energy & solar dashboard | [CDN Video](https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/references/smart-home-control-dashboard.mp4) · [Lokal](references/images/smart-home-control-dashboard.mp4) |

#### Aturan Wajib Pemilihan, Kepadatan & Penggabungan Referensi
1. **Wajib Tanya ke User (`ask_question`):** Setiap kali user meminta pembuatan UI/dashboard/website baru dan belum menyebut arah desainnya, **wajib tanyakan lewat `ask_question` dengan `is_multi_select: true`** referensi mana yang ingin dipakai (boleh pilih **1** atau **gabungan beberapa referensi** dari 9 dashboard atau 4 blueprint website minimalist modern).
2. **Mode Kepadatan Default = `Minimalist Ringkas` (Anti-Keramean):**
   - Setiap kartu & blok UI hanya boleh memuat **judul pendek (2–5 kata) + angka/visual utama + maksimal 1 baris keterangan seperlunya (<= 10 kata)**—jangan menumpuk paragraf, banyak badge, atau metadata ramai di layar utama.
   - Jaga ruang napas (**whitespace >= 35%**), maksimal 3–4 kartu per baris, dan pindahkan detail lanjutan ke **tab, modal `<dialog>`, drawer, popover, atau accordion** (*progressive disclosure*). Baca aturan lengkap & 4 blueprint website minimalist di [references/minimalist-web-standards.md](references/minimalist-web-standards.md).
3. **Dukung Gabungan Multi-Referensi (Hybrid Blending):** Jika user memilih 2 atau lebih referensi, gabungkan elemen terbaiknya secara harmonis menjadi **satu design system yang utuh** (termasuk menggabungkan gaya palet tenang `75% netral / 15% struktur / 10% 1 aksen`).
4. **Wajib Visual Fidelity:** Sebelum menulis kode, **baca** [references/dashboard-archetypes.md](references/dashboard-archetypes.md) (dashboard), [references/minimalist-web-standards.md](references/minimalist-web-standards.md) (website minimalist), atau [references/motion-blocks-library.md](references/motion-blocks-library.md) (motion blocks), **serta inspeksi media referensi asli** (lokal atau CDN) agar layout dan karakter visualnya sesuai referensi.

#### Referensi Interaksi & Landing Motion Terbaru (CDN Publik)
Selain 9 archetype dashboard di atas, tersedia **7 video pola interaksi & blok animasi** di [references/motion-blocks-library.md](references/motion-blocks-library.md) beserta 60+ blok **Shadcn Space** (`Dot-Matrix AI Thinking Pill`, `Cinema 3D Seat Map & View Preview`, `Inline Morphing Sentence Order Sheet`, `Dark AI SaaS Landing Architecture`, `Product Dial Showcase Hero 68`, `Immersive Game & Character Hero 55`, dan `Frosted Glass Plan Cards Pricing 18`).

### F. Image Reference & Pencarian Aset Real-World Otomatis (WAJIB, Anti-Icon-Buatan)
- **Pinterest (Visual & Moodboard Reference):** `https://www.pinterest.com/` — referensi komposisi visual, moodboard gaya, foto produk, dan inspirasi art direction.
- **Dilarang Menggambar Ikon / Logo Buatan Seadanya:** Jangan membuat `<svg>` ikon UI atau logo brand asal-asalan secara manual bila aset resmi/library tersedia:
  - Untuk **ikon UI**: wajib pakai **Material Symbols & Icons** atau **Icons8**.
  - Untuk **logo brand nyata, foto produk, foto orang, botol/kemasan, kendaraan, atau visual utama** (mis. logo Apple/Starbucks, foto sepatu sneaker, foto botol minuman, gambar alat rumah tangga): AI **wajib mencari aset asli secara otomatis** lewat pencarian web (`search_web`, Wikimedia Commons, brand/official site, Unsplash/Pexels, Icons8) atau mengambil referensi dari CDN/proyek.
  - Verifikasi URL gambar aktif (`200 OK`, tipe `image/*`) atau unduh ke folder aset lokal proyek (`assets/` / `public/`) serta unggah ke CDN bila tersedia agar gambar & logo selalu tampil tajam tanpa error `403`/`404` atau broken image, dan selalu lengkapi `alt`, dimensi/rasio (`aspect-ratio`), serta `object-fit`.

### G. Slot Ekspansi Resource Lainnya (Siap Diupdate)
Siap ditambahkan kategori tambahan sesuai permintaan pembaruan pengguna berikutnya.

---

## 2. Katalog 42 Micro-Interactions & Motion Patterns

Referensi pola animasi terkurasi (terinspirasi *The ABC of UI*) untuk membuat UI terasa hidup tanpa mengorbankan performa. Gunakan properti GPU-friendly (`transform`, `opacity`, `stroke-dashoffset`, `clip-path`, `grid-template-rows`) dan wajib hormati `prefers-reduced-motion`.

| Kategori | Pola Animasi | Mekanisme & Tujuan UX |
| :--- | :--- | :--- |
| **Buttons & Actions** | `Toggle`, `Like Burst`, `Send -> Sent`, `Copy -> Copied!`, `Download`, `Upload`, `Ripple Tap`, `Trash`, `Unlock` | Umpan balik klik taktil (`scale(0.97)`), konfirmasi sukses (ikon centang pop-in / plane fly-out / lid lift), dan kejelasan aksi tanpa layout shift. |
| **Forms & Inputs** | `Checkbox`, `Radio Group`, `Star Rating`, `Range Slider`, `Stepper`, `Float Label` | Draw-in SVG check (`stroke-dashoffset`), dot scale-in, label mengambang persisten saat fokus/terisi, dan angka stepper yang responsif. |
| **Loaders & Progress** | `Spinner`, `Dot Loader`, `Progress Bar`, `Progress Ring`, `Skeleton`, `Charging`, `Connecting`, `Typing...` | Indikator progres real-time (linear & circular SVG), status koneksi/chat aktif, dan skeleton layout-preserving untuk mencegah layar kosong. |
| **Navigation & Layout** | `Menu -> Close`, `Search Expand`, `Tab Switch`, `Grid <-> List`, `Accordion`, `Carousel`, `Drag to Sort` | Morph ikon hamburger ke `X`, pill/underline tab bergeser mulus, expand FAQ via CSS Grid `0fr -> 1fr`, dan reorder list dengan elevasi bayangan. |
| **Overlays & Cards** | `Open Folder`, `Doc Preview`, `Notification`, `Modal Pop`, `Toast`, `Card Flip`, `Swipe Delete` | Konteks spasial jelas (scale + translateY entrance), bell badge pop, flip kartu 3D `rotateY(180deg)`, dan aksi hapus geser dengan collapse halus. |
| **Media & Data** | `Avatar Stack`, `Equalizer`, `Play / Pause`, `Day / Night`, `Bar Chart` | Hover spread pada avatar tumpuk, morph ikon media, transisi tema celestial, dan pertumbuhan bar chart bertahap (`scaleY`). |

> Untuk token CSS standar dan contoh kode implementasi yang ringan & aksesibel, baca [references/motion-recipes.md](references/motion-recipes.md).

### Standar Kualitas Seluruh Komponen Pendukung (System-Wide Parity)
Semua komponen pendukung di luar layout utama—termasuk **Pickers** (`select`, `combobox`, `date picker`, `toggle`, `slider`, `stepper`, `dropzone`, `OTP`), **Actions** (`button variants`, `async button`, `bulk bar`), **Navigation** (`sidebar`, `drawer`, `tabs`, `pagination`, `breadcrumbs`, `⌘K command palette`), **Data & Charts** (`table`, `accordion`, `timeline`, `avatar stack`, `tooltip`), dan **Feedback/Overlays** (`<dialog>`, `popover`, `toast`, `inline alert`, `skeleton`, `empty state`, `lightbox`)—**wajib mewarisi token visual dan kualitas micro-interaction yang sama dengan desain utama**. Baca detail standarnya di [references/component-craft.md](references/component-craft.md).

### Katalog 20 Text Animations (Kinetic Typography)
Untuk animasi headline, hero, dan angka metrik, gunakan skill **`text-animations`** (termasuk `Typewriter`, `Mask Rise`, `Scramble Decode`, `Gradient Flow`, `Word Stagger`, `Blur In`, `Letter Bounce`, `Marker Highlight`, `Number Count-up`, `Rotating Word`, `Tracking Expand`, `Outline to Fill`, `RGB Glitch`, `Wave`, `Letter Flip`, `Squiggle Underline`, `3D Extrude`, `Zoom Punch`, `Strike & Replace`, `Split Halves`) dengan menjaga aksesibilitas screen reader (`aria-label`) & `prefers-reduced-motion`.

---

## 3. Checklist 7 Good UX vs Bad UX (Wajib Lolos)

Pastikan antarmuka tidak mengulang 7 kesalahan UX klasik berikut:

1. **Label Persisten > Placeholder Saja:** Label input wajib tetap terlihat di atas/samping kolom setelah diisi (atau pakai *Float Label* yang tetap terbaca). Jangan mengandalkan `placeholder` sebagai satu-satunya penanda kolom.
2. **Pesan Error Kontekstual + Solusi > Error Generik:** Hindari pesan buntu seperti *"Terjadi kesalahan / Error 500"*. Jelaskan apa yang terjadi, status data pengguna, dan sediakan aksi pemulihan (mis. *"Belum tersimpan ke cloud — Coba lagi"*).
3. **Guided Empty State > "Tidak ada data":** Saat data kosong, tampilkan ikon kontekstual, penjelasan singkat, dan tombol CTA utama langkah berikutnya (mis. `+ Buat catatan pertama`).
4. **Tombol Konfirmasi Eksplisit > "OK / Batal":** Pada dialog destruktif/hapus, sebutkan target dan dampaknya, serta tulis label tombol sesuai aksinya (mis. **`Hapus catatan`** berwarna merah, bukan `OK`).
5. **Aturan Validasi Tampil Di Awal > Muncul Setelah Gagal:** Tampilkan syarat input (mis. aturan kata sandi) sejak awal dengan indikator validasi real-time sebelum user menekan tombol lanjut.
6. **Tap Target ≥ 44px + Label Ikon > Ikon Kecil Tanpa Label:** Jaga area klik/sentuh minimal `44px × 44px` dengan jarak aman, dan sertakan label teks singkat di bawah/samping ikon navigasi/toolbar agar tidak membingungkan.
7. **Skeleton Screen > Layar Kosong + Spinner:** Saat memuat konten halaman/list, gunakan skeleton menyerupai bentuk layout asli agar loading terasa lebih cepat dan bebas layout shift (CLS rendah).

---

## 4. Human Craft, Anti-AI-Look, Natural Copy & AI Readability

Pastikan hasil website terasa dibuat manusia, bukan template AI generik, serta mudah dibaca pengunjung dan AI search ([references/human-craft-and-ai-clarity.md](references/human-craft-and-ai-clarity.md)):

1. **Anti-AI-Look UI:** Pangkas ornamen/simetri kaku di draf awal, kunci seluruh warna/spacing/radius di Design Token `:root`, dan prioritaskan alur konversi nyata di desktop & HP daripada sekadar bagus di screenshot.
2. **Natural Human Copywriting (Koord. `antislop-copywriting`):** Variasikan panjang kalimat, buang klise pembuka/penutup AI (*"Di era digital..."*, *"Penting untuk dicatat..."*, *"Memberdayakan perjalanan Anda"*), tulis konkret dalam bahasa harian yang spesifik tanpa mengarang angka/testimoni palsu.
3. **Direct-Answer & Pra-Terbit:** Taruh inti jawaban langsung di kalimat pembuka (ramah SEO & AI Overviews), jaga 1 topik jelas per halaman, ganti seluruh gambar contoh dengan aset nyata, dan cek fungsi tombol CTA langsung di HP sebelum publish.
4. **7 Prinsip UX, Actionable Alerts & Discord UI ([references/notification-and-discord-ui.md](references/notification-and-discord-ui.md)):** Terapkan konsistensi modular (*Spotify, Dropbox, Apple*), navigasi cepat, serta desain notifikasi yang *scannable* dengan *severity color-coding*, tombol aksi lanjut (*Acknowledge/View Logs*), dan pola aman Discord Webhook/Embeds/Components V2 (tanpa expose webhook URL di frontend JS).

---

## 5. Web & UI Security Guardrails (PTES, Alpha Code & OWASP 2025)

Setiap website dan aplikasi wajib melewati standar keamanan di [references/security-standards.md](references/security-standards.md):
- **Security Headers & Anti-Clickjacking (*Jurnal PTES 2025*):** Terapkan `X-Frame-Options`, `CSP` (`frame-ancestors`), `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `HSTS`, dan **SRI** untuk script/CSS eksternal.
- **Frontend & DOM Security:** Hindari `innerHTML` dengan input mentah (anti-XSS), lindungi cookie sesi (`HttpOnly; Secure; SameSite`), pasang token Anti-CSRF, dan **jangan pernah** menaruh API key/Webhook URL di kode JS client.
- **API & Akses Kontrol (*Alpha Code Pentest & OWASP 2025*):** Cek otorisasi & kepemilikan data di server (anti-IDOR, bukan hanya menyembunyikan tombol UI), batasi field API hanya yang diperlukan UI, validasi + rate limit endpoint sensitif, dan cegah error stacktrace tampil di UI.

---

## 6. Sinergi dengan Skill Lain

- **`vanzee-designer`** (Skill ini): Hub library terkurasi, 12 palet warna, standar minimalist ringkas, human craft & natural copy, 9 dashboard & 4 website blueprint, 42 micro-interaction, 7 guardrail Good UX, dan security guardrails.
- **`ui-ux-pro-max`**: Arah visual, komposisi tata letak, dan pemilihan palet warna produk.
- **`typography-curation`**: Pemilihan & pairing font spesifik non-AI-default dari Google Fonts & Fontshare.
- **`text-animations`**: Katalog 20 animasi teks & kinetic typography yang aksesibel.
- **`micro-interactions`**: Standar token timing/easing CSS dan aturan aksesibilitas gerak.
- **`antislop-copywriting`**: Filter kalimat alami bebas klise AI untuk seluruh teks halaman.
- **`lighthouse-audit-fix`**: Audit performa, aksesibilitas, SEO, dan Core Web Vitals setelah website selesai dibangun.
