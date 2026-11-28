# Human Craft, Anti-AI-Look, Natural Copy & AI Readability

Panduan praktis hasil kurasi 5 artikel (*Forgelo*, *Developer Awam*, *Nusantara.co*, *The Conversation*, *Kawalu*) agar website yang dibangun dengan `vanzee-designer` terasa dibuat oleh desainer manusia, punya tulisan yang alami, dan mudah dipahami pengunjung maupun mesin pencari/AI.

---

## 1. Anti-AI-Look UI (*Agar Website Tidak Terlihat Hasil Generate AI*)

1. **Review & Pangkas Draf Pertama:** Jangan pernah berhenti di hasil awal yang terasa serba simetris dan penuh ornamen. Buang badge/garis dekorasi yang tidak punya fungsi dan pertajam hierarki visual.
2. **Kunci Design Token di `:root`:** Seluruh warna, ukuran font, radius, dan spacing wajib mengacu pada token yang konsisten—dilarang membiarkan ukuran atau jarak loncat-loncat antar komponen.
3. **Prioritaskan Alur Nyata, Bukan Sekadar Cantik di Screenshot:** Pastikan aksi utama pengguna (pesan, kontak, daftar, cari data) mudah dijangkau di desktop maupun layar sentuh HP.
4. **Satu Tujuan Utama per Halaman:** Arahkan perhatian pengunjung ke aksi kunci bisnis secara jelas, bukan menyebar fokus ke terlalu banyak tombol/topik dalam satu layar.
5. **Aset Nyata, Bebas Ilustrasi AI Aneh:** Hindari ilustrasi/wajah AI generik yang terasa artifisial; gunakan foto produk/brand nyata dan micro-interaction halus yang terasa organik.
6. **Fokus Manfaat Produk, Bukan Rahasia Dapur:** Pengunjung ingin tahu solusi untuk mereka—**jangan** membocorkan tech stack, database, virtualization, atau arsitektur server di copy/footer website publik kecuali diminta user atau memang produk teknis/portofolio developer.

---

## 2. Natural Human Copywriting (*Bebas Pola Tulisan AI*)

Detektor dan pembaca manusia langsung mengenali tulisan AI dari ritme yang terlalu seragam, struktur formal kaku, dan frasa klise berulang. Terapkan aturan ini untuk semua copy website (selaras dengan skill `antislop-copywriting`):

- **Variasikan Panjang Kalimat & Paragraf:** Jangan membuat semua kartu atau paragraf punya jumlah baris dan struktur kalimat yang kembar. Campurkan kalimat pendek tegas dengan kalimat penjelas alami.
- **Buang Klise Pembuka & Kata Kosong AI:**
  - *Hindari:* *"Di era digital yang serba cepat..."*, *"Penting untuk dicatat bahwa..."*, *"Memberdayakan perjalanan transformasi Anda ke level berikutnya"*, *"Solusi inovatif terdepan"*.
  - *Ganti dengan bahasa harian yang langsung ke inti:* jelaskan apa manfaat nyatanya dalam kata sehari-hari yang spesifik.
- **Konkret & Jujur (Tanpa Mengarang Bukti):** Gunakan detail riil (lokasi, harga jelas, jam buka, cara kerja spesifik). Jangan membuat testimoni, angka pelanggan, atau penghargaan fiktif.
- **Direct-Answer First:** Taruh inti jawaban atau penawaran tepat di kalimat pertama setiap bagian atau FAQ—jangan berputar-putar dengan pengantar panjang.

---

## 3. Keterbacaan AI (*AI Visibility*) & Checklist Pra-Terbit

Agar website mudah dipahami baik oleh pengunjung maupun mesin pencari/AI (*Google Search*, *AI Overviews*, *LLM*):

- **Fokus Topik & Konsistensi:** Jaga satu topik utama yang jelas dan gaya komunikasi yang konsisten antar bagian/halaman.
- **Struktur Semantik & Verifikasi:** Gunakan satu `<h1>` utama, urutan heading `<h2>`–`<h3>` yang logis, blok FAQ dengan jawaban langsung, serta `<title>` dan `<meta description>` yang menyebut layanan/lokasi secara jujur.
- **5 Cek Wajib Sebelum Publish:**
  1. Baca setiap kalimat sebagai pelanggan nyata—hapus klaim yang tidak bisa dibuktikan.
  2. Pastikan gambar contoh sudah diganti foto/aset nyata yang aktif (`200 OK`).
  3. Ketuk tombol CTA/kontak langsung di tampilan HP untuk memastikan alurnya berfungsi.
  4. Periksa ulang fakta penting (harga, nama produk, jam operasional, nomor kontak).
  5. Pastikan `<title>` dan `<meta description>` halaman akurat dan mudah dimengerti.
