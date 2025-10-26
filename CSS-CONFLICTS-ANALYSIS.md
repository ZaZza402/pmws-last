# CSS Conflict Analysis Report - Punto Migrare

## Date: October 25, 2025

## Executive Summary

After cross-referencing component CSS files with the newly created modular styles folder, several conflicts and inconsistencies have been identified that need resolution.

---

## 🔴 CRITICAL ISSUES

### 1. **Duplicate CSS Variable Definitions**

**Location:** `src/components/BookingForm.css`

**Issue:**

```css
:root {
  --brand-blue: #2b286f;
  --brand-orange: #f78d23;
}
```

**Conflict:** These duplicate the tokens already defined in `index.css`:

```css
--blue: rgb(43, 40, 111);
--orange: rgb(247, 141, 35);
```

**Impact:** Can cause confusion and maintenance issues. The component uses `--brand-blue` and `--brand-orange` while the global system uses `--blue` and `--orange`.

**Recommendation:** Remove the `:root` declaration from `BookingForm.css` and replace all instances of `--brand-blue` with `var(--blue)` and `--brand-orange` with `var(--orange)`.

---

### 2. **Button Style Conflicts - HeroSection.css**

**Location:** `src/components/HeroSection.css` (lines 156-217)

**Issue:** The component redefines `.btn`, `.btn--primary`, and `.btn--ghost` classes with different styles than the global button system in `index.css`.

**Component Version:**

```css
.new-hero__cta .btn {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15)...;
}

.new-hero__cta .btn--primary {
  background: linear-gradient(135deg, #f78d23 0%, #e67d13 100%);
  border: 2px solid #f78d23;
}
```

**Global Version (index.css):**

```css
.btn {
  padding: 1rem 1.25rem;
  border: 1.5px solid transparent;
}

.btn--primary {
  background: linear-gradient(
    135deg,
    var(--orange),
    rgba(var(--orange-700-rgb), 0.9)
  );
  border-color: var(--orange);
}
```

**Impact:** Inconsistent button styling across the site. Hero buttons look different from buttons elsewhere.

**Recommendation:**

- Option A: Namespace the hero buttons (e.g., `.hero-btn` instead of `.btn`)
- Option B: Use the global button classes and add hero-specific modifiers (e.g., `.btn.btn--large`)

---

### 3. **Hero Section Naming Confusion**

**Location:**

- `src/components/HeroSection.css` uses `.new-hero` class
- `src/styles/Hero.css` uses `.hero` class

**Issue:** Two different hero styling systems exist:

- **Component:** `.new-hero` with parallax background, full viewport height
- **Global:** `.hero` with gradient background, fixed padding

**Impact:** Unclear which hero is actually being used. Could cause unexpected styling if classes conflict.

**Recommendation:**

- Keep `.new-hero` in component CSS as the active hero
- Remove or archive the old `.hero` styles in `src/styles/Hero.css`
- Or consolidate into one hero system

---

## ⚠️ MODERATE ISSUES

### 4. **Inconsistent CSS Variable Usage**

**Locations:** Multiple component files

**Issue:** Components use different patterns for CSS variables:

- `BookingForm.css`: `--brand-blue`, `--brand-orange`
- `DocumentChecklist.css`: `var(--blue, rgb(43, 40, 111))` (with fallback)
- `WhyIllustrations.css`: `var(--blue, rgb(43, 40, 111))` (with fallback)
- Global system: `var(--blue)`, `var(--orange)`

**Impact:** Inconsistent fallback patterns, harder to maintain.

**Recommendation:** Standardize on global CSS variables without component-specific overrides. Add fallbacks only where necessary.

---

### 5. **Global Class Name Conflicts**

**Classes with potential conflicts:**

- `.panel` - Used in both `Booking.css` (global) and potentially in components
- `.btn` - Redefined in `HeroSection.css`
- `.hero` vs `.new-hero` - Two competing hero systems

**Recommendation:** Use BEM naming or component-specific prefixes for component styles.

---

## ℹ️ MINOR ISSUES / OBSERVATIONS

### 6. **Separate Component CSS Files**

**Components with their own CSS files:**

1. `HeroSection.css` (298 lines)
2. `BookingForm.css` (180 lines)
3. `DocumentChecklist.css` (412 lines)
4. `CustomLoader.css` (191 lines)
5. `WhyIllustrations.css` (198 lines)

**Observation:** These are component-specific and generally well-isolated, but could benefit from using global CSS variables instead of duplicating color values.

---

### 7. **Hardcoded Color Values**

**Issue:** Many component CSS files use hardcoded hex values instead of CSS variables:

- `#2b286f` appears 15+ times across component CSS
- `#f78d23` appears 10+ times across component CSS

**Recommendation:** Replace all hardcoded brand colors with CSS variables for easier theming.

---

## 📋 RECOMMENDED ACTION PLAN

### Phase 1: Critical Fixes (Priority: HIGH)

1. **Fix BookingForm.css CSS variables**

   - Remove duplicate `:root` declaration
   - Replace `--brand-blue` → `var(--blue)`
   - Replace `--brand-orange` → `var(--orange)`

2. **Resolve Hero Section Confusion**

   - Decide on single hero system (recommend `.new-hero`)
   - Update `src/styles/Hero.css` accordingly
   - Remove or archive unused hero styles

3. **Fix Button Conflicts in HeroSection.css**
   - Namespace hero-specific buttons
   - Or use global buttons with modifiers

### Phase 2: Standardization (Priority: MEDIUM)

4. **Standardize CSS Variable Usage**

   - Update `DocumentChecklist.css` to use global variables
   - Update `WhyIllustrations.css` to use global variables
   - Remove all component-specific color definitions

5. **Replace Hardcoded Colors**
   - Search and replace `#2b286f` → `var(--blue)`
   - Search and replace `#f78d23` → `var(--orange)`
   - Add proper fallbacks where needed

### Phase 3: Architecture Improvements (Priority: LOW)

6. **Consider CSS Modules**

   - Evaluate moving to CSS modules for true component isolation
   - Or implement stricter BEM naming convention

7. **Documentation**
   - Document which CSS classes are global vs component-specific
   - Create style guide for future components

---

## 🎯 FILES REQUIRING UPDATES

### Immediate Changes Needed:

1. `src/components/BookingForm.css` - Remove `:root`, update variables
2. `src/components/HeroSection.css` - Namespace buttons or use global
3. `src/styles/Hero.css` - Remove old hero or mark as deprecated
4. `src/components/DocumentChecklist.css` - Use global variables
5. `src/components/WhyIllustrations.css` - Use global variables

### Files That Are OK:

- `src/styles/Header.css` ✅
- `src/styles/MobileMenu.css` ✅
- `src/styles/Services.css` ✅
- `src/styles/Why.css` ✅
- `src/styles/Footer.css` ✅
- `src/styles/Reviews.css` ✅
- `src/styles/Utilities.css` ✅
- `src/components/CustomLoader.css` ✅ (well-isolated)

---

## 🔧 CODE EXAMPLES FOR FIXES

### Fix 1: BookingForm.css

**Before:**

```css
:root {
  --brand-blue: #2b286f;
  --brand-orange: #f78d23;
}
.react-datepicker__header {
  background-color: var(--brand-blue) !important;
}
```

**After:**

```css
/* Remove :root block entirely */
.react-datepicker__header {
  background-color: var(--blue) !important;
}
```

### Fix 2: HeroSection.css Buttons

**Before:**

```css
.new-hero__cta .btn--primary {
  background: linear-gradient(135deg, #f78d23 0%, #e67d13 100%);
}
```

**After (Option A - Namespace):**

```css
.new-hero__cta .hero-btn--primary {
  background: linear-gradient(135deg, var(--orange) 0%, var(--orange-700) 100%);
}
```

**After (Option B - Use Global):**

```css
/* Remove component-specific button styles, use global .btn classes */
.new-hero__cta .btn {
  font-size: 1.1rem; /* Only override what's specific to hero */
}
```

---

## SUMMARY

**Total Conflicts Found:** 7

- Critical: 3
- Moderate: 2
- Minor: 2

**Files Affected:** 5 component CSS files
**Estimated Fix Time:** 1-2 hours
**Risk Level:** Medium (changes affect visible components)

**Next Steps:** Implement Phase 1 fixes to resolve critical conflicts, then proceed with standardization in Phase 2.
