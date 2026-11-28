# Web & UI Security Standards (PTES, Alpha Code & OWASP 2025)

Panduan keamanan ringkas dan praktis untuk setiap website dan aplikasi web yang dibangun dengan `vanzee-designer`. Dirangkum dari metodologi **PTES** (*JPTI 2025*, DOI: `10.52436/1.jpti.609`), cakupan pentest **Alpha Code**, **OWASP Top 10 (2025)**, dan **OWASP API Security Top 10**.

---

## 1. Security Headers & Anti-Clickjacking (Wajib di Server / Hosting)

Mencegah *clickjacking* (temuan utama studi PTES 2025), MIME sniffing, dan eksekusi skrip liar (`OWASP A02:2025`):

```nginx
# Contoh Header Aman (Nginx / Reverse Proxy / Edge Config)
add_header X-Frame-Options "SAMEORIGIN" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' https: data:; frame-ancestors 'self'; object-src 'none'; base-uri 'self';" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
```

- **Subresource Integrity (SRI):** Jika memuat script/CSS pihak ketiga dari CDN publik (selain Google Fonts CSS dinamis), sertakan `integrity="sha384-..."` dan `crossorigin="anonymous"` (`OWASP A03:2025`).

---

## 2. Frontend, DOM & Session Security

- **Anti-XSS (`OWASP A05:2025`):** Jangan memasukkan input user, query URL, atau respons API tak tepercaya ke `innerHTML`, `outerHTML`, atau `document.write()`. Gunakan `textContent` / `createElement()`, atau sanitasi ketat dengan *DOMPurify* jika memang perlu merender HTML.
- **Anti-CSRF & Keamanan Cookie (`OWASP A01:2025` & `A07:2025`):**
  - Cookie sesi wajib memakai flag `HttpOnly; Secure; SameSite=Lax` (atau `SameSite=Strict` untuk aksi finansial/admin).
  - Gunakan **Anti-CSRF Token** pada endpoint mutasi (`POST/PUT/DELETE`) berbasis cookie sesi.
- **Zero Client Secrets:** Dilarang menanamkan API key, token auth, password, atau Webhook URL (Discord/Slack/Payment) di JavaScript frontend, HTML, atau repository Git—simpan di `.env` dan panggil lewat backend proxy.
- **Tautan Eksternal Aman:** Tambahkan `rel="noopener noreferrer"` pada `<a target="_blank">`.

---

## 3. API, Access Control & Supply Chain

- **Anti-IDOR / Object-Level Access Control (`OWASP A01:2025`):** Menyembunyikan tombol di UI bukan pengamanan. Setiap endpoint backend wajib memverifikasi bahwa user yang login benar-benar berhak atas `id` resource yang diminta (*deny by default*).
- **Minimalisasi Data API (*OWASP API Top 10*):** Endpoint hanya mengembalikan field yang benar-benar dipakai oleh UI—jangan mengirim seluruh objek database (seperti `password_hash`, token internal, atau data sensitif pengguna lain).
- **Validasi Input, Query Aman & Rate Limiting:** Validasi tipe, panjang, dan format input di sisi server; pakai parameterized query/ORM; pasang rate limit pada login, OTP, form kontak, dan webhook; serta tampilkan pesan error UI yang ramah tanpa membocorkan stacktrace atau detail database (`OWASP A10:2025`).
- **Kebersihan Dependensi (`OWASP A03:2025`):** Hindari library pihak ketiga usang; jalankan audit dependensi (`npm audit` / `composer audit`) sebelum rilis.

---

## 4. Zero Rahasia Dapur & Anti-Fingerprinting (*Ketat*)

Website publik hanya menampilkan **nilai produk dan layanan bagi pengguna**—jangan membocorkan arsitektur internal, infrastruktur, maupun detail implementasi ke publik (`OWASP A02:2025` & *Information Disclosure*):

1. **Larangan Bocor Tech Stack & Virtualization di UI Publik (Ketat):**
   - **Dilarang** menampilkan nama framework, bahasa backend, database, virtualization/hypervisor (KVM, Proxmox, Docker, spesifikasi VPS/node), atau arsitektur server di hero, kartu fitur, maupun footer **kecuali diminta eksplisit oleh user** atau website tersebut memang portofolio developer/produk teknis developer.
   - *Contoh salah:* `"Ditenagai Laravel 11 + MariaDB di atas Docker KVM Node-02"`. *Contoh benar:* `"Data tersinkronisasi real-time dengan uptime tinggi"`.
2. **Zero Internal Plumbing & Sisa Debug:**
   - Hapus komentar HTML/CSS internal (`<!-- ... -->`), nama tabel/kolom DB mentah (`users_tbl`, `ledger_id`), `console.log` sensitif, maupun label sisa AI (`Built with AI`, `Sample/Mock`).
3. **Anti-Fingerprinting Produksi:**
   - Sembunyikan header sidik jari teknologi (`X-Powered-By`, `server_tokens off;` di Nginx), nonaktifkan **Source Maps (`.map`)** di build produksi agar logika kode tidak terekspos, dan blokir akses publik ke `.env`, `.git`, `phpinfo`, atau endpoint diagnostik internal.
4. **Batas Tegas Data Publik vs Admin:**
   - Pisahkan payload API publik dan admin; jangan pernah merender metrik server, IP internal, log sistem, atau endpoint internal di halaman publik.

---

## 5. Checklist Security Gate Pra-Rilis (9 Poin Wajib)

1. [ ] Tidak ada API key, token, password, atau webhook URL yang tertulis di kode frontend/HTML/Git.
2. [ ] Tidak ada rendering input user via `innerHTML` mentah (bebas celah XSS).
3. [ ] Server/hosting mengirim header anti-clickjacking (`X-Frame-Options` + `CSP frame-ancestors`), `nosniff`, dan `Referrer-Policy`.
4. [ ] Form & endpoint mutasi memiliki validasi server-side, proteksi CSRF, dan rate limiting.
5. [ ] Endpoint hanya mengembalikan field yang diperlukan UI dan mengecek kepemilikan resource (anti-IDOR).
6. [ ] Cookie sesi memakai `HttpOnly`, `Secure`, dan `SameSite`.
7. [ ] Pesan error di UI tidak membocorkan stacktrace, path server, atau query SQL mentah.
8. [ ] UI/copy publik **bebas dari bocoran tech stack, virtualization, nama tabel DB, komentar internal, atau label sisa AI** (kecuali diminta user).
9. [ ] Build produksi mematikan source map (`.map`), menyembunyikan header `X-Powered-By` / versi server, serta memblokir `.env`/`.git`.
