# Vanzee Designer UI/UX & Web Engineering Rules

Aturan ini otomatis aktif ketika plugin **Vanzee Designer** diaktifkan agar setiap agen AI menghasilkan UI/UX, komponen, animasi, tipografi, dan performa website sesuai standar kurasi yang sama.

## 1. Wajib Cek Semua Skill Terkait
- Sebelum merancang atau mengeksekusi tugas UI/UX atau website, periksa dan baca `SKILL.md` dari seluruh skill terkait yang tersedia (`vanzee-designer`, `typography-curation`, `text-animations`, `micro-interactions`, dan `lighthouse-audit-fix`).

## 2. Wajib `ask_question` untuk Klarifikasi & Pemilihan Referensi
- Setiap kali perlu bertanya ke pengguna (klarifikasi kebutuhan, memilih gaya/desain/teknologi, memilih cakupan fitur, atau konfirmasi perbaikan), **wajib gunakan tool interaktif `ask_question`** (pilihan tunggal atau `is_multi_select: true` sesuai konteks), bukan menulis daftar pertanyaan panjang di teks biasa.

## 3. Standar Desain UI/UX (Auto-Trigger `vanzee-designer`)
Setiap kali merancang, membangun, atau mereview tampilan UI/UX dan website, **otomatis aktifkan dan baca skill `vanzee-designer`** bersama pembagian peran berikut:

- **Standar Minimalist Ringkas & Anti-Keramean (WAJIB):** Setiap website/dashboard default memakai gaya **minimalist modern, lapang, dan tenang** (`references/minimalist-web-standards.md`): maksimal **2–3 baris teks per kartu** (judul pendek + angka/visual utama + maks 1 baris keterangan seperlunya), **whitespace >= 35%**, warna **Calm Neutral-First (`75%` netral bersih + `15%` struktur + `10%` maks 1 aksen palet dari `color-palettes.md`)**, dan detail sekunder dipindah ke tab/modal/drawer/popover (*progressive disclosure*) agar layar tidak penuh tulisan.
- **Human Craft, Anti-AI-Look & Natural Copy (`references/human-craft-and-ai-clarity.md`):** Kunci seluruh skala di CSS `:root` (tanpa padding/ukuran loncat-loncat), pangkas dekorasi generik, tulis copy dalam bahasa manusia yang bervariasi, langsung pada inti (*direct-answer first*), tanpa klise pembuka/klaim palsu AI, dan verifikasi tombol CTA/kontak berfungsi di HP sebelum publish.
- **Security Gate Web & UI (`references/security-standards.md`):** Wajib terapkan proteksi anti-clickjacking (`X-Frame-Options` / `CSP frame-ancestors`), anti-XSS (hindari `innerHTML` mentah), anti-CSRF & `HttpOnly`/`SameSite` cookie, zero secret/webhook di frontend JS, cek otorisasi backend (anti-IDOR), minimalisasi data API, dan rate limiting sebelum rilis.
- **Wajib Tanya Pilihan Referensi (`ask_question` dengan `is_multi_select: true`):** Sebelum membangun UI/dashboard/website yang belum punya arahan gaya spesifik, tanyakan ke pengguna referensi mana dari **9 dashboard** atau **4 blueprint website minimalist** yang ingin dipakai—mendukung **1 referensi** maupun **gabungan beberapa referensi** (*hybrid blending*) menjadi satu design system utuh.
- **Wajib Visual Fidelity (CDN / Lokal):** Sebelum menulis kode, wajib membaca `references/dashboard-archetypes.md` (untuk 9 dashboard) atau `references/motion-blocks-library.md` (untuk blok motion, AI thinking pill, cinema 3D, morphing sheet, landing/pricing/hero Shadcn Space) serta menginspeksi foto/video referensi asli (via file lokal `references/images/*` atau URL CDN publik yang tercantum di `vanzee-designer`) agar tampilan akhir benar-benar sesuai referensi.
- **Otomasi Pencarian Aset Nyata & Anti-Icon-Buatan (WAJIB):** AI **dilarang menggambar ikon UI atau logo brand buatan seadanya**—ikon UI wajib memakai **Material Symbols & Icons** atau **Icons8**, sedangkan logo brand nyata, foto produk (mis. botol Starbucks, sneaker, perangkat), dan foto/visual nyata **wajib dicari otomatis** di Google/web (`search_web`, Wikimedia, Unsplash/Pexels, situs resmi, atau Icons8), lalu diverifikasi aktif (`200 OK` / `image/*`) atau diunduh ke aset lokal/CDN agar gambar selalu tampil tanpa error (`403`/`404`).
- **Library Terkurasi & System-Wide Component Parity:**
  - Gunakan **Material Symbols & Icons** & **Icons8** (ikon/ilustrasi/3D), **Google Fonts**, **Fontshare**, & **Typewolf** (font), **Realtime Colors** & **Coolors** (palet warna), serta galeri referensi **Refero**, **Land-book**, **Lapa Ninja**, **Mobbin**, **Godly**, **Awwwards**, **Shadcn Space**, dan **Pinterest**.
  - Terapkan standar **System-Wide Component Parity** (`references/component-craft.md`) agar seluruh komponen pendukung (modal `<dialog>`, popover, `select`/combobox, tabel, pagination, drawer, command palette, toast, inline alert, empty state, slider/toggle, dll.) tampil serasi dan berkualitas setara desain utama.
  - Pilih pola dari katalog **42 micro-interactions** + **20 text animations (`text-animations`)**, serta pastikan **7 aturan Good UX** terpenuhi (label persisten, error kontekstual + aksi, empty state terarah, tombol konfirmasi eksplisit, syarat validasi tampil di awal, tap target >= `44px` + label ikon, dan skeleton loader pengganti layar kosong).
- **Tipografi Anti-Slop (`typography-curation`):** Pilih pasangan font yang punya karakter kuat sesuai proyek, dan **hindari mengulang-ulang font default AI yang membosankan** (seperti *Plus Jakarta Sans*, *Inter*, *Roboto*, atau *Space Grotesk*) kecuali diminta khusus oleh pengguna atau ada alasan brand yang jelas.
- **Animasi Teks (`text-animations`):** Pilih animasi teks yang serasi (`Mask Rise`, `Gradient Flow`, `Word Stagger`, `Number Count-up`, `Marker Highlight`, dll.), pastikan aman untuk screen reader (`aria-label`), dan hormati `prefers-reduced-motion`.
- **Micro-Interaction (`micro-interactions`):** Rancang umpan balik interaktif yang hidup di setiap komponen utama (hover, efek tekan `:active`, `:focus-visible`, transisi tab/modal/accordion, loading & feedback aksi), gunakan properti GPU-friendly (`transform`, `opacity`), hindari animasi loop tanpa tujuan, dan wajib sertakan `prefers-reduced-motion`.

## 4. Audit Lighthouse Otomatis Setelah Pembuatan Website
Setiap kali selesai membangun website baru atau melakukan perubahan besar pada tampilan/performa web, **wajib jalankan alur skill `lighthouse-audit-fix`**:
1. Jalankan audit Lighthouse awal (utamakan mode production/preview bila lokal) dan tampilkan skor awal + Core Web Vitals.
2. Analisa temuan yang masih kurang dan susun rekomendasi perbaikannya.
3. Gunakan `ask_question` untuk konfirmasi perbaikan mana yang ingin diterapkan sebelum mengedit kode, lalu jalankan ulang Lighthouse untuk membandingkan skor sebelum dan sesudah.

## 5. Verifikasi Nyata Sebelum Klaim Selesai
- Jangan pernah mengklaim pekerjaan selesai atau lolos sebelum menjalankan verifikasi nyata setelah perubahan terakhir (cek browser/visual, build, linter, atau audit Lighthouse).
- Hanya laporkan file, angka, dan hasil perintah yang benar-benar terlihat dari output tool.
