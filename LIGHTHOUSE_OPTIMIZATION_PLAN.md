# 🚀 LIGHTHOUSE PERFORMANCE OPTIMIZATION - ACTION PLAN

**Date**: October 25, 2025  
**Project**: PuntoMigrare Website  
**Goal**: Achieve 90+ Lighthouse Score (Performance, Accessibility, Best Practices, SEO)

---

## 📊 OPTIMIZATION CATEGORIES

### 🔴 CRITICAL (Implement Now)

1. Image Optimization
2. Font Loading Strategy
3. Code Splitting & Lazy Loading
4. Remove Unused Dependencies
5. Meta Tags & SEO

### 🟠 HIGH PRIORITY

6. Accessibility Improvements
7. Caching Strategy
8. Preload Critical Assets

### 🟡 MEDIUM PRIORITY

9. Service Worker (PWA)
10. Resource Hints

---

## 🎯 IMPLEMENTATION CHECKLIST

### ✅ 1. IMAGE OPTIMIZATION (CRITICAL)

**Current Issues**:

- PNG logos in multiple sizes (insegna.png, logo.png, etc.)
- Google Fonts loaded from external CDN
- No image lazy loading beyond route-level

**Actions**:

- [ ] Convert all PNG logos to WebP with fallback
- [ ] Add explicit width/height to prevent CLS
- [ ] Implement native lazy loading
- [ ] Preload hero image

---

### ✅ 2. FONT LOADING STRATEGY (CRITICAL)

**Current Issues**:

- Google Fonts loaded from CDN (render-blocking)
- Custom Roboto fonts in local assets

**Actions**:

- [ ] Remove Google Fonts CDN link
- [ ] Use only local Roboto fonts
- [ ] Add font-display: swap
- [ ] Preload critical font files

---

### ✅ 3. CODE SPLITTING & LAZY LOADING (CRITICAL)

**Current Status**: ✅ Already done! Pages are lazy loaded.

**Additional Optimization**:

- [ ] Check bundle size with vite-plugin-visualizer
- [ ] Ensure Framer Motion is tree-shaken
- [ ] Lazy load heavy components (ScrollingServices, WhyIllustrations)

---

### ✅ 4. REMOVE UNUSED DEPENDENCIES (CRITICAL)

**Found in package.json**:

- `@mui/material` & `@emotion/*` - NOT used anywhere!
- `googleapis` - Booking form deleted, likely unused
- `resend` - Not used in current codebase
- `date-fns` - Was for booking form, now obsolete

**Action**: Remove these to reduce bundle size significantly.

---

### ✅ 5. META TAGS & SEO (CRITICAL)

**Missing**:

- [ ] Language attribute in HTML
- [ ] Structured data (LocalBusiness)
- [ ] OpenGraph tags
- [ ] Favicon optimization

---

### ✅ 6. ACCESSIBILITY (HIGH PRIORITY)

**Issues to Fix**:

- [ ] Skip to main content link
- [ ] Focus indicators on all interactive elements
- [ ] Color contrast verification
- [ ] ARIA labels completeness
- [ ] Keyboard navigation testing

---

### ✅ 7. CACHING STRATEGY (HIGH PRIORITY)

**Vite Build Optimization**:

- [ ] Configure Vite for optimal chunking
- [ ] Enable CSS code splitting
- [ ] Configure cache headers (vercel.json or netlify.toml)

---

### ✅ 8. PRELOAD CRITICAL ASSETS (HIGH PRIORITY)

**To Preload**:

- [ ] Hero background image
- [ ] Logo (insegna.png)
- [ ] Critical font files (Roboto-Regular, Roboto-Bold)

---

## 📦 ESTIMATED BUNDLE SIZE REDUCTION

**Before**:

- MUI + Emotion: ~150KB (gzipped)
- googleapis: ~800KB (uncompressed)
- resend: ~50KB
- date-fns: ~70KB
- **Total Removable**: ~1MB+

**After Removal**:

- Estimated bundle size reduction: **40-50%**
- Faster initial load: **1-2 seconds improvement**

---

## 🎨 VISUAL SAFETY CHECKLIST

All optimizations designed to preserve visuals:

- ✅ WebP with PNG fallback (no visual change)
- ✅ Lazy loading with placeholders (smooth UX)
- ✅ Font swapping (text stays readable)
- ✅ No layout shifts (width/height attributes)
- ✅ Maintained animations (Framer Motion stays)

---

## 📈 EXPECTED LIGHTHOUSE SCORES

**Current (Estimated)**:

- Performance: 60-70
- Accessibility: 75-85
- Best Practices: 85-90
- SEO: 80-85

**After Optimization**:

- Performance: 90-95+ ✅
- Accessibility: 95-100 ✅
- Best Practices: 95-100 ✅
- SEO: 95-100 ✅

---

## 🔧 TOOLS NEEDED

1. **vite-plugin-imagemin** - Image compression
2. **vite-plugin-compression** - Gzip/Brotli compression
3. **vite-plugin-pwa** - Service worker (optional)
4. **@vitejs/plugin-legacy** - Browser compatibility (if needed)

---

## ⚡ QUICK WINS (30 Minutes)

1. Remove unused dependencies
2. Remove Google Fonts CDN
3. Add language attribute to HTML
4. Add width/height to images
5. Add preload hints for critical assets

---

## 🎯 IMPLEMENTATION ORDER

**Phase 1 (Now)**:

1. Remove unused dependencies ✅
2. Optimize fonts ✅
3. Add missing meta tags ✅

**Phase 2 (Next)**: 4. Image optimization ✅ 5. Accessibility fixes ✅

**Phase 3 (Final)**: 6. Advanced caching ✅ 7. PWA features ✅

---

**Ready to implement Phase 1? This will give immediate 20-30 point boost in Performance score!**
