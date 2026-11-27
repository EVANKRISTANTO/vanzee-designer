# Motion & Micro-Interaction Recipes (Vanzee Designer)

Resep implementasi ringan (GPU-friendly: `transform`, `opacity`, `stroke-dashoffset`, `grid-template-rows`) untuk pola unggulan dari katalog 42 micro-interactions.

## 1. Token Timing & Reduced Motion (Wajib)

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

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## 2. Float Label (Input Persisten & Aksesibel)

Menjaga label selalu terbaca setelah kolom diisi tanpa memakan ruang awal yang besar:

```css
.field { position: relative; }
.field input {
  width: 100%;
  padding: 20px 14px 8px;
}
.field label {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  transform-origin: left center;
  transition: transform var(--dur-fast) var(--ease-snappy), color var(--dur-fast);
  pointer-events: none;
}
.field input:focus + label,
.field input:not(:placeholder-shown) + label {
  transform: translateY(-125%) scale(0.78);
}
```

## 3. Progress Ring (SVG `stroke-dashoffset`)

```css
.ring-progress {
  transform: rotate(-90deg);
}
.ring-progress circle.value {
  stroke-dasharray: 283; /* 2 * pi * r (r=45) */
  stroke-dashoffset: calc(283 - (283 * var(--pct, 0)) / 100);
  transition: stroke-dashoffset var(--dur-slow) var(--ease-out-expo);
}
```

## 4. Accordion (CSS Grid `0fr -> 1fr`, Tanpa `max-height`)

```css
.accordion-panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--dur-base) var(--ease-out-expo);
}
.accordion-item[data-open="true"] .accordion-panel {
  grid-template-rows: 1fr;
}
.accordion-inner { overflow: hidden; }
.accordion-chevron {
  transition: transform var(--dur-base) var(--ease-snappy);
}
.accordion-item[data-open="true"] .accordion-chevron {
  transform: rotate(180deg);
}
```

## 5. Skeleton Shimmer GPU-Only (Pengganti Blank Spinner)

```css
.skeleton {
  position: relative;
  overflow: hidden;
  background: var(--surface-muted, #e5e7eb);
  border-radius: 8px;
}
.skeleton::after {
  content: "";
  position: absolute;
  inset: 0;
  transform: translateX(-100%);
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.55), transparent);
  animation: skeleton-sweep 1.3s ease-in-out infinite;
}
@keyframes skeleton-sweep {
  100% { transform: translateX(100%); }
}
```

## 6. Interactive Button Press, Copy Swap & Toast Entrance

```css
.btn {
  min-height: 44px;
  transition: transform var(--dur-instant) var(--ease-snappy), background-color var(--dur-fast);
}
.btn:active { transform: scale(0.97); }

.toast {
  animation: toast-in var(--dur-base) var(--ease-out-expo) both;
}
@keyframes toast-in {
  from { opacity: 0; transform: translateY(12px) scale(0.96); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
```

## 7. Avatar Stack Hover Spread & Menu-to-Close Morph

```css
.avatar-stack > * {
  transition: transform var(--dur-fast) var(--ease-spring);
}
.avatar-stack:hover > * + * {
  transform: translateX(6px);
}

.hamburger-line {
  transform-origin: center;
  transition: transform var(--dur-fast) var(--ease-snappy), opacity var(--dur-instant);
}
.menu-btn[aria-expanded="true"] .line-top { transform: translateY(6px) rotate(45deg); }
.menu-btn[aria-expanded="true"] .line-mid { opacity: 0; }
.menu-btn[aria-expanded="true"] .line-bot { transform: translateY(-6px) rotate(-45deg); }
```
