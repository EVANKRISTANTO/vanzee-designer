# UX Principles, Notification Craft & Discord Webhook UI Guide

Panduan terkurasi dari benchmark aplikasi terkemuka (*Dibimbing*) dan dokumentasi arsitektur notifikasi serta komponen interaktif **Discord Webhook** (`https://discord-webhook.com/`).

---

## 1. 7 Prinsip UI/UX & Benchmark Produk Nyata

Saat merancang antarmuka web/aplikasi, gunakan 7 prinsip ini sebagai penyeimbang estetika dan kegunaan:

1. **Kesesuaian & Konsistensi:** Tombol, ikon, tipografi, dan pola aksi wajib mengikuti satu bahasa desain yang kohesif (*Dropbox, Instagram, Apple*).
2. **Kesederhanaan untuk Keterbacaan:** Kontras jelas, tata letak bersih, dan fokus pada tugas utama tanpa kompleksitas berlebih (*Dropbox, Google Drive*).
3. **Navigasi Intuitif & Pencarian Cepat:** Menu terstruktur logis, pencarian responsif, serta kode warna/simbol yang langsung dimengerti (*Spotify, Google Maps*).
4. **Umpan Balik & Responsif:** Setiap klik, filter, atau submit harus memberi konfirmasi visual instan dan beradaptasi mulus di semua ukuran layar.
5. **Aksesibilitas & Inklusivitas:** Wajib `alt` gambar, kontras warna memadai (`>= 4.5:1`), serta ramah keyboard dan screen reader.
6. **Keterlibatan Emosional & Kustomisasi Bermakna:** Gunakan psikologi warna yang tepat, progres/gamifikasi ramah bila cocok (*Duolingo*), atau kontrol filter/preferensi yang terasa personal (*Airbnb, Canva*).
7. **Fleksibilitas & Arsitektur Modular:** Komponen dirancang modular agar mudah diperbarui tanpa merusak konsistensi keseluruhan sistem.

---

## 2. Desain Notifikasi & Alert yang Efektif (*Web & Webhook*)

Baik untuk toast/banner di web maupun alert sistem ke Discord:

- **Color Coding Berdasarkan Tingkat Urgensi (*Severity*):**
  - `critical`: `#FF0000` (aksi segera) · `error`: `#FF4444` · `warning`: `#FF9900` · `info`: `#5865F2` · `success`: `#00FF00` · `debug`: `#808080`.
- **Scannable Key-Value Layout:** Pecah detail alert menjadi field ringkas sejajar (`Status`, `Service`, `Duration`, `Amount`) daripada satu paragraf teks panjang.
- **Actionable Notifications:** Setiap notifikasi penting wajib menyertakan tombol atau tautan langkah lanjutan (`Acknowledge`, `View Logs`, `View Incident`, `Open Order`).
- **Anti-Spam & Noise Reduction:** Gunakan **Conditional Threshold** (kirim hanya jika melewati batas) dan **Batching / Aggregation** (gabungkan event minor ke dalam satu ringkasan periodik).

---

## 3. Referensi Discord Webhook, Embeds, Components V2 & Interactive Actions

- **Visual Builder:** [Discord Webhook](https://discord-webhook.com/) — visual editor gratis untuk merancang JSON *Embeds*, *Components V2*, *Interactive Buttons*, dan *Polls* dengan live preview.

### A. Webhook vs Bot (Kapan Pakai Yang Mana)
| Kebutuhan | Pilih **Webhook** | Pilih **Bot / Hybrid** |
| :--- | :--- | :--- |
| **Notifikasi 1-arah** (CI/CD deploy, order masuk, payment alert, server uptime, error log, laporan cron) | ✅ Setup ~30 detik, tanpa hosting bot | Berlebihan bila hanya push |
| **Interaksi 2-arah** (slash commands, tombol callback, form modal, toggle role, baca pesan) | ❌ Post-only (kecuali pairing bot) | ✅ Wajib bot / hybrid webhook+bot |

### B. Format Embed, Components V2 & Batasan Teknis
- **Classic Embeds:** `color` memakai **integer desimal RGB** (mis. `#5865F2` → `5793266`, bukan string hex!).
  - Batas agar terhindar error `400 (50035)`: `title <= 256`, `description <= 4096`, `field.name <= 256`, `field.value <= 1024`, `footer.text <= 2048`, maks `10 embeds/msg` & `6000` total karakter; file lampiran maks `25 MB` (`multipart/form-data` + `attachment://filename`).
- **Components V2 (`flags: 32768` / `1 << 15`):** Mendukung layout modern (`Container`, `Section`, `TextDisplay`, `MediaGallery`, `Separator`, `Button`, `SelectMenu`). Jangan mencampur V2 components dengan classic `embeds` dalam satu pesan.
- **Interactive Buttons & Action Chains:** Gunakan pola *Role Toggle* (1 tombol untuk tambah/hapus), *Ephemeral Reply* (balasan privat agar channel tidak penuh), *Modal Form* (maks 5 field), *Action Chains* bertumpuk, serta *Per-button / Per-user Cooldown* untuk mencegah spam klik.
- **Edit, Delete & Thread:** Tambahkan `?wait=true` pada `POST` untuk mendapatkan `message_id` lalu gunakan `PATCH`/`DELETE /messages/{id}`; pakai `?thread_id=...` untuk thread atau `thread_name` untuk membuat post baru di Forum Channel.

### C. Keamanan & Keandalan Produksi (WAJIB)
1. **Lindungi Webhook URL:** URL webhook adalah kredensial bearer. **Jangan pernah** menaruhnya di JavaScript frontend/browser atau commit ke Git—simpan di `.env` / secret manager dan kirim melalui **backend proxy**.
2. **Sanitasi Mention:** Setel default `"allowed_mentions": { "parse": [] }` saat memproses input pengguna agar teks `@everyone` / `@here` tidak memicu ping massal.
3. **Rate Limit & Retry:** Anggaran aman `~5 req / 2 detik` (`30 req/menit` per webhook). Pantau header `X-RateLimit-Remaining`, hormati `Retry-After` pada HTTP `429`, dan gunakan exponential backoff pada error `5xx`.
