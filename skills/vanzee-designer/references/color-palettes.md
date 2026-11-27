# Curated Best Color Palettes (6-Step Tonal Scales)

Kumpulan **12 palet warna terkurasi** dengan skala tonal 6 langkah (*gelap ke terang*) agar mudah diterapkan baik untuk **Light Mode** maupun **Dark Mode**, lengkap dengan kontras aksesibilitas terukur (WCAG AA >= 4.5:1 untuk teks, >= 3:1 untuk komponen/grafik) dan aturan **60-30-10**.

---

## Cara Memetakan 6 Langkah Warna ke CSS `:root`

Setiap palet memiliki 6 tingkat dari **1 (Tergelap)** sampai **6 (Terang)**:

| Mode | Canvas / Background (`60%`) | Surface / Card (`30%`) | Primary & Accent (`10%`) | Text Utama & Muted |
| :--- | :--- | :--- | :--- | :--- |
| **Light Mode** | Putih `#FFFFFF` atau Step 6 (`#E8FFF5`, `#F0DFCE`, dll.) | `#FFFFFF` + tint Step 5 (`border` / `badge`) | Step 2 / Step 3 (button), Step 1 (hover), Step 4 (highlight) | Step 1 (`#071C27`) untuk teks utama, Step 2/3 untuk subjudul |
| **Dark Mode** | Step 1 (`#071C27`, `#211713`, `#17121F`, `#0A1A3C`, `#2B000D`) | Step 2 (`#123747`, `#493027`, `#302538`, `#0F2E7A`, `#520018`) | Step 4 / Step 5 (CTA cerah & ring aktif) | Step 6 (`#DCE9E8`, `#F0DFCE`, `#E8DDEB`) untuk teks utama |

> **Aturan Kontras:** Selalu uji kombinasi warna foreground vs background agar teks terbaca jelas (`>= 4.5:1`), dan jaga aksen maksimal `10%` dari viewport agar tampilan tetap elegan.

---

## Bagian 1: 6 Palet Referensi Utama (CDN Publik)

### 1. Emerald Mint (`Fintech, Health, Eco SaaS, Wellness`)
- **CDN Swatch:** https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/palettes/palette-emerald-mint.jpg
- **Skala Hex:** `#0D6E5D` → `#14A085` → `#2EC7A4` → `#6DE7C1` → `#B5F5DB` → `#E8FFF5`
- **Token Cepat (Light):** Canvas `#E8FFF5` / `#FFFFFF` · Primary `#0D6E5D` · Accent `#14A085` · Highlight `#2EC7A4` · Soft Tint `#B5F5DB`

### 2. Espresso Mocha (`Coffee, Luxury F&B, Craft Editorial, Leather/Fashion`)
- **CDN Swatch:** https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/palettes/palette-espresso-mocha.jpg
- **Skala Hex:** `#211713` → `#493027` → `#76503B` → `#A87557` → `#D0A98B` → `#F0DFCE`
- **Token Cepat (Dark/Warm):** Canvas `#211713` · Surface `#493027` · Secondary `#76503B` · Accent `#A87557` · Warm Text/Light Canvas `#F0DFCE`

### 3. Ocean Petrol (`Enterprise SaaS, Maritime/Logistics, Data Analytics, Security`)
- **CDN Swatch:** https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/palettes/palette-ocean-petrol.jpg
- **Skala Hex:** `#071C27` → `#123747` → `#245568` → `#477C8B` → `#91B3B9` → `#DCE9E8`
- **Token Cepat (Dark/Light):** Dark Canvas `#071C27` · Surface `#123747` · Primary `#245568` · Accent `#477C8B` · Light Surface `#DCE9E8`

### 4. Royal Plum (`AI Studio, Creative Agency, Beauty, Premium SaaS`)
- **CDN Swatch:** https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/palettes/palette-royal-plum.jpg
- **Skala Hex:** `#17121F` → `#302538` → `#51405F` → `#796487` → `#B09BB8` → `#E8DDEB`
- **Token Cepat (Dark/Velvet):** Dark Canvas `#17121F` · Surface `#302538` · Container `#51405F` · Accent `#796487` · Light Text/Tint `#E8DDEB`

### 5. Electric Cobalt (`Cloud Platform, B2B Dashboard, DevTools, Banking`)
- **CDN Swatch:** https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/palettes/palette-electric-cobalt.jpg
- **Skala Hex:** `#0A1A3C` → `#0F2E7A` → `#1857D6` → `#3B82F6` → `#93C5FD` → `#E0F2FF`
- **Token Cepat (Light/Dark):** Dark Ink `#0A1A3C` · Primary `#1857D6` · Electric CTA `#3B82F6` · Sky Ring `#93C5FD` · Ice Canvas `#E0F2FF`

### 6. Crimson Velvet (`Automotive, Entertainment, Cinema, Bold E-Commerce`)
- **CDN Swatch:** https://r2.fivemanage.com/NPwnP3XPgJZECWofbq36U/vanzee-designer/palettes/palette-crimson-velvet.jpg
- **Skala Hex:** `#2B000D` → `#520018` → `#7C0A2A` → `#A5143C` → `#D9476D` → `#F8B3C4`
- **Token Cepat (Dark/Editorial):** Dark Canvas `#2B000D` · Surface `#520018` · Primary `#A5143C` · Highlight `#D9476D` · Blush Text/Tint `#F8B3C4`

---

## Bagian 2: 6 Palet Kurasi Tambahan (Untuk Kebutuhan Produk Lain)

### 7. Solar Amber (`Energy, Fintech Savings, Hardware, Marketplace`)
- **Skala Hex:** `#1C1206` → `#42280A` → `#8A4F0B` → `#D97706` → `#FBBF24` → `#FEF6E0`

### 8. Sage Botanical (`Skincare, Organic Food, Sustainability, Smart Home`)
- **Skala Hex:** `#111C14` → `#223828` → `#3B6046` → `#5E8B6A` → `#A7C7AE` → `#EEF5EF`

### 9. Safety Orange & Graphite (`Logistics, FleetTrack, Industrial IoT, Sports`)
- **Skala Hex:** `#111315` → `#24282E` → `#C23B00` → `#FF4D00` → `#FF9E75` → `#F5F6F8`

### 10. Obsidian Violet (`Cloud Dock, File Storage, AI Productivity, Web3`)
- **Skala Hex:** `#120B24` → `#27184A` → `#5B21B6` → `#7C3AED` → `#C4B5FD` → `#F5F3FF`

### 11. Warm Paper & Charcoal (`Portfolio, Editorial Media, Architecture, Law`)
- **Skala Hex:** `#141413` → `#2D2C29` → `#5E5B53` → `#9A8F7D` → `#D8D1C5` → `#FAF8F4`

### 12. Cyber Lime & Carbon (`AI CLI, Gaming, Developer Performance, Crypto`)
- **Skala Hex:** `#0B0F0C` → `#162118` → `#2E5918` → `#65A30D` → `#BEF264` → `#F4FBE8`

---

## Contoh Implementasi CSS Siap Pakai (Contoh: Ocean Petrol Dark + Light Toggle)

```css
:root {
  --c-ink: #071c27;
  --c-surface-deep: #123747;
  --c-primary: #245568;
  --c-accent: #477c8b;
  --c-tint: #91b3b9;
  --c-canvas: #dce9e8;
}
```

> Untuk eksplorasi kombinasi kustom dan uji kontras langsung di layout UI, gunakan **Realtime Colors** (`https://www.realtimecolors.com/`) dan **Coolors** (`https://coolors.co/`).
