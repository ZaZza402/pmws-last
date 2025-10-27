# PuntoMigrare - Project Documentation

**Last Updated:** October 27, 2025  
**Status:** Production Ready  
**Version:** 1.4

---

## 🚀 Recent Updates

### v1.4 - Latest (October 27, 2025)

- ✅ **MAJOR: Brand Color Enhancement** - Comprehensive blue color integration
  - All section titles (h2) now use primary blue (#2b286f)
  - Why Section icons enhanced with blue gradient backgrounds
  - Service card categories use blue with enhanced text-shadow
  - FAQ answer strong text emphasized with blue
  - Why Section card gaps increased (1rem → 1.5rem) for better breathing room
  - Subtle blue section dividers added between sections
  - Service cards hover with blue glow effect
  - Why Section cards have hover state with blue border
- ✅ **Design Audit Completed** - Comprehensive analysis documented in DESIGN_AUDIT.md
- ✅ **Visual Hierarchy Improved** - Better balance: 40% blue, 20% orange, 40% neutral

### v1.3 (October 27, 2025)

- ✅ **Mobile Menu Redesigned** - Premium side drawer sliding from right
  - Full-height elegant slide-in animation
  - 280px width (85% max on small screens)
  - Smooth cubic-bezier easing
  - Sticky header with hamburger → X animation preserved
  - Logo and hamburger turn white when menu opens
  - Orange accent line on hover
  - Custom scrollbar styling
  - Backdrop blur effect
  - Compact WhatsApp CTA button

### v1.2 (October 27, 2025)

- ✅ **Page Transitions Added** - Subtle fade-in animation (300ms) on all page navigations
- ✅ **Mobile Menu Enhancement** - Click outside backdrop now closes the menu
- ✅ **CTA Text Update** - Changed FAQ button from "Vedi Tutte le Domande Frequenti" to "Hai più domande?"

### v1.1

- ✅ **Scroll Position on Navigation** - Added `ScrollToTop` component to instantly scroll to top when changing pages
- ✅ **Dead Code Removed** - Cleaned up 6 unused files
- ✅ **Footer Link Fixed** - Removed broken Chi Siamo link (page kept for future use)

### Removed Files (v1.1)

1. `src/App.css` - Unused stylesheet
2. `src/index.css.backup` - Backup file
3. `src/components/CustomLoader.jsx` - Unused component
4. `src/components/CustomLoader.css` - Unused styles
5. `src/config/serviceIcons.jsx` - Unused icon mapping
6. `src/config/services.js` - Unused config

---

## 📋 Executive Summary

**PuntoMigrare** is a modern, professional website for a CAF (Centro di Assistenza Fiscale) and immigration services center located in Rome, Italy. The site provides information about immigration services, tax assistance (CAF), and various administrative services for migrants, travelers, and families.

### 🎯 Purpose

- Showcase immigration and fiscal services
- Provide clear information through FAQ sections
- Enable easy contact via WhatsApp, phone, and email
- Establish trust through professional presentation
- Generate leads for consultations

---

## 🛠️ Tech Stack

### Core Technologies

- **Framework:** React 19.1.1
- **Build Tool:** Vite 7.1.2
- **Router:** React Router DOM 7.8.1
- **Animation:** Framer Motion 12.23.12
- **Icons:** React Icons 5.5.0
- **Language:** JavaScript (ES6+)
- **Styling:** Pure CSS (No CSS frameworks like Tailwind)

### Development Tools

- **Testing:** Vitest 3.2.4 + Testing Library
- **Linting:** ESLint 9.33.0
- **Image Optimization:** Sharp 0.34.4
- **Deployment:** GitHub Pages (gh-pages 6.3.0)

### Key Dependencies

```json
{
  "framer-motion": "^12.23.12",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-icons": "^5.5.0",
  "react-intersection-observer": "^9.16.0",
  "react-router-dom": "^7.8.1"
}
```

---

## 📁 Project Structure

```
puntomigrare/
├── public/
│   └── 404.html                    # GitHub Pages 404 fallback
├── src/
│   ├── assets/                     # Static assets
│   │   ├── brand-fonts/           # Self-hosted fonts (Roboto, Candara)
│   │   ├── brand-logo/            # Logo variations (SVG, PNG)
│   │   ├── brand-posters/         # Hero & service images (WebP optimized)
│   │   └── svg-icons/             # Icon assets
│   ├── components/                # Reusable components
│   │   ├── AnimateOnScroll.jsx    # Scroll animation wrapper
│   │   ├── BackToTopButton.jsx    # Floating back-to-top button
│   │   ├── ContactQuickLinks.jsx  # Quick contact section
│   │   ├── CustomLoader.jsx       # Custom loading spinner (UNUSED)
│   │   ├── DocumentChecklist.jsx  # Document requirements checklist
│   │   ├── DocumentSection.jsx    # Document info section
│   │   ├── ErrorBoundary.jsx      # Error handling component
│   │   ├── FaqSection.jsx         # Homepage FAQ preview
│   │   ├── Footer.jsx             # Site footer with links
│   │   ├── Header.jsx             # Main navigation header
│   │   ├── HeroSection.jsx        # Homepage hero with parallax
│   │   ├── MobileDrawer.jsx       # Mobile navigation menu
│   │   ├── ScrollingIconsBackground.jsx  # Animated background icons
│   │   ├── ScrollingServices.jsx  # Horizontal scrolling service ticker
│   │   ├── ServicesSection.jsx    # Services showcase cards
│   │   ├── StructuredData.jsx     # SEO schema markup
│   │   ├── WhatsAppButton.jsx     # Floating WhatsApp button
│   │   ├── WhySection.jsx         # "Why choose us" section
│   │   ├── WhyIllustrations.jsx   # SVG illustrations (3 variants)
│   │   └── __tests__/            # Component tests
│   ├── config/                    # Configuration files
│   │   ├── businessHours.js       # Opening hours configuration
│   │   ├── documentChecklist.js   # Required documents data
│   │   ├── serviceIcons.jsx       # Icon mapping (UNUSED)
│   │   └── services.js            # Service types (UNUSED)
│   ├── pages/                     # Page components
│   │   ├── HomePage.jsx           # Main landing page
│   │   ├── ServiziPage.jsx        # All services detail page
│   │   ├── FaqPage.jsx            # Full FAQ page with search
│   │   ├── ContattiPage.jsx       # Contact page with map
│   │   ├── ChiSiamoPage.jsx       # About us page (NOT IN ROUTING)
│   │   ├── CookiePolicyPage.jsx   # Cookie policy
│   │   ├── PrivacyPolicyPage.jsx  # Privacy policy
│   │   └── NotFoundPage.jsx       # 404 error page
│   ├── styles/
│   │   └── Utilities.css          # Utility classes
│   ├── App.jsx                    # Root component with routing
│   ├── App.css                    # DEAD CODE (unused)
│   ├── main.jsx                   # React entry point
│   ├── index.css                  # Global styles & CSS variables
│   ├── index.css.backup           # DEAD CODE (backup file)
│   ├── faqData.js                 # FAQ questions & answers
│   └── servicesData.js            # Service categories & details
├── eslint.config.js               # ESLint configuration
├── vite.config.js                 # Vite build configuration
├── package.json                   # Dependencies & scripts
└── optimize-images.cjs            # Image optimization script
```

---

## 🎨 Design System

### Color Palette (Modern RGB-based)

```css
--blue-rgb: 43, 40, 111; /* Primary: Deep purple #2b286f */
--blue-700-rgb: 34, 32, 89; /* Darker purple shade */
--orange-rgb: 247, 141, 35; /* Accent: Vibrant orange #F78D23 */
--orange-700-rgb: 220, 120, 20; /* Darker orange */

/* Neutrals with subtle warmth */
--bg: rgb(252, 253, 255); /* Page background */
--text: rgb(30, 41, 59); /* Body text */
--card: rgb(255, 255, 255); /* Card background */
--border: rgb(226, 232, 240); /* Border color */
```

### Typography

- **Primary Font:** Roboto (400, 300, 500, 700, 900, Italic) - Self-hosted
- **Accent Font:** Candara Bold - Self-hosted
- **Font Loading:** `font-display: swap` for optimal performance
- **Base Size:** Responsive with `clamp()` functions
- **Line Height:** 1.7 for body, 1.2 for headings

### Spacing & Layout

- **Container Width:** `min(1180px, 92vw)`
- **Border Radius:** 22px (large), 16px (medium), 12px (small)
- **Section Padding:** 32px mobile, 48px desktop
- **Scroll Margin:** 88px (for fixed header compensation)

### Shadows

```css
--shadow-1: Subtle shadow for cards
--shadow-2: Deeper shadow for elevation
--shadow-accent: Orange glow for CTAs
```

### Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 991px
- Desktop: ≥ 992px

---

## 🧩 Component Architecture

### Layout Components

#### **Header.jsx**

- Sticky navigation with scroll effects
- Desktop nav with active link highlighting
- Mobile hamburger menu trigger
- Logo with brand colors (Orange + Purple)
- Scroll-based styling changes (adds `scrolled` class)

#### **Footer.jsx**

- 3-column grid layout (Brand, Institutional Links, Navigation)
- Social media links (Facebook, Instagram, WhatsApp)
- Contact information with semantic `<address>` tags
- Legal links (Privacy, Cookie policies)
- Copyright with dynamic year

#### **MobileDrawer.jsx**

- **Premium side drawer** sliding from right ✨ REDESIGNED in v1.3
- Full-height fixed positioning (280px width, 85vw max on small screens)
- Smooth cubic-bezier slide animation (translateX)
- Dark purple gradient background
- Left-aligned links with orange accent bar on hover
- Bottom WhatsApp CTA with gradient background
- Custom scrollbar styling (6px width)
- Semi-transparent backdrop with blur effect
- **Click outside backdrop to close** ✨ NEW in v1.2
- Sticky header with hamburger → X animation always visible
- Escape key closes menu
- Focus trap for accessibility
- Proper ARIA attributes
- Centered dropdown style (320px width)

### Content Sections

#### **HeroSection.jsx**

- Parallax background with Framer Motion
- Animated logo reveal with zoom effect
- Staggered text animations
- Multiple CTA buttons (WhatsApp, Phone)
- Background image lazy loading with placeholder

#### **ServicesSection.jsx**

- Horizontal scrolling service cards
- Parallax image effects on scroll
- Category-based organization (4 categories)
- Service cards with background images
- Colored band with service links
- Mobile swipe indicators (dots)
- `ScrollingServices` ticker at top

#### **WhySection.jsx**

- 3 reasons with icons (Time, Clarity, Language)
- Animated icon background
- Visual switcher (3 illustration options):
  - Trust & Security
  - Professional Team
  - Results & Data
- SVG illustrations rendered inline

#### **FaqSection.jsx** (Homepage)

- Shows first 3 FAQ questions
- Accordion-style expandable items
- CTA button: "Hai più domande?" (updated v1.2 from "Vedi Tutte le Domande Frequenti")
- Links to full FAQ page
- Warm orange background gradient

#### **ContactQuickLinks.jsx**

- Quick contact methods timeline
- WhatsApp, Phone, Email options
- Visual icons with descriptions

#### **DocumentSection.jsx**

- Checklist of required documents
- Organized by category
- Helpful for visitors to prepare

### Utility Components

#### **ScrollToTop.jsx** ✨ v1.1

- Automatically scrolls to top on route changes
- Prevents annoying scroll position carryover between pages
- Handles hash navigation (e.g., #servizi) by scrolling to anchors
- Disables browser's scroll restoration (`window.history.scrollRestoration = "manual"`)
- Uses `behavior: "instant"` for immediate positioning
- Non-intrusive and automatic

#### **PageTransition.jsx** ✨ v1.2

- Wraps all page content with elegant fade-in transition
- **300ms fade-in** animation for page wrapper
- **400ms fade + slide-up (8px)** for content
- Subtle and professional - "felt, not seen"
- Respects `prefers-reduced-motion` for accessibility
- Applied to all 7 pages in the application

#### **AnimateOnScroll.jsx**

- Wraps content for scroll-triggered animations
- Uses `react-intersection-observer`
- Fade + slide up effect
- Optional stagger for children

#### **BackToTopButton.jsx**

- Appears after scrolling past hero (80vh)
- Smooth scroll to top
- Animated entrance/exit with Framer Motion

#### **WhatsAppButton.jsx**

- Floating action button (FAB)
- Appears after scrolling past hero
- Direct link to WhatsApp with pre-filled message
- Hover/tap animations

#### **ErrorBoundary.jsx**

- Catches React errors globally
- Friendly error UI
- "Go Home" and "Reload" buttons
- Shows error details in dev mode

#### **StructuredData.jsx**

- JSON-LD schema for SEO
- LocalBusiness schema type
- Opening hours, address, services
- Improves Google search appearance

### Illustration Components

- **WhyTrustIllustration.jsx** - Trust & security visual
- **WhyTeamIllustration.jsx** - Team professional visual
- **WhyStatsIllustration.jsx** - Results & data visual

All use inline SVG with CSS animations.

---

## 📄 Page Structure

### **HomePage.jsx**

```jsx
<HeroSection />
<ServicesSection />
<WhySection />
<FaqSection />
<ContactQuickLinks />
<DocumentSection />
```

**Purpose:** Main landing page with all key information
**SEO:** Canonical URL, meta description, title

### **ServiziPage.jsx**

- Full service catalog with accordion items
- Search functionality
- Category quick navigation
- Auto-expand on hash navigation (#s1, #s2, etc.)
- WhatsApp CTA for each service

### **FaqPage.jsx**

- Complete FAQ list
- Category filter (Immigrazione, CAF, Altri Servizi)
- Live search across questions & answers
- Expandable accordion interface

### **ContattiPage.jsx**

- Contact methods (WhatsApp, Phone, Email)
- Business hours display
- Google Maps iframe (lazy loaded)
- Address information

### **ChiSiamoPage.jsx** ⚠️ **NOT ROUTED**

- "About Us" page with team profiles
- Placeholder images (need replacement)
- Link exists in Footer, but NOT in App.jsx routes
- **ACTION REQUIRED:** Add route or remove footer link

### **PrivacyPolicyPage.jsx & CookiePolicyPage.jsx**

- Legal compliance pages
- Standard policy text (Italian)

### **NotFoundPage.jsx**

- Custom 404 error page
- Home button and back button
- Friendly error message

---

## 📊 Data Management

### **servicesData.js**

Contains all service information:

```javascript
export const serviceCategories = [
  "Migranti", // Immigration services
  "Viaggiatori", // Traveler services
  "Famiglie", // Family services
  "Altri Servizi", // Other services
];

export const allServices = [
  {
    id: "s1",
    category: "Migranti",
    title: "Permessi di Soggiorno, Art. 31",
    shortTitle: "Permessi di soggiorno, art. 31",
    description: "...",
    icon: "passport",
    practices: ["...", "..."],
  },
  // ... 18+ services total
];
```

### **faqData.js**

Contains FAQ questions organized by category:

```javascript
export const faqQuestions = [
  {
    id: "imm-q1",
    category: "Immigrazione",
    question: "...",
    answer: "...",
  },
  // ... 15+ questions
];
```

### **businessHours.js**

Business hours configuration:

- Monday, Tuesday, Thursday: 9:00-18:00 (break 13:00-14:30)
- Wednesday, Friday: 9:00-13:00
- Saturday, Sunday: Closed

---

## 🎭 Animations & Interactions

### Framer Motion Usage

1. **Hero Animations:** Staggered reveals on page load
2. **Parallax Scrolling:** Background moves slower than foreground
3. **Button Interactions:** Scale on hover/tap
4. **WhatsApp Button:** Fade + scale entrance
5. **Scroll Animations:** Fade up on element visibility

### CSS Transitions

- Button hover effects (transform, shadow)
- Header scroll state (background, shadow)
- Accordion expand/collapse (max-height)
- Mobile drawer slide-in (transform)

### Performance Optimizations

- `will-change` property used sparingly
- `transform` for GPU acceleration
- Passive scroll listeners where possible
- Intersection Observer for scroll-triggered animations

---

## 🔍 SEO & Accessibility

### SEO Features

✅ Semantic HTML5 tags  
✅ Meta descriptions on all pages  
✅ Canonical URLs  
✅ OpenGraph tags for social sharing  
✅ Twitter Card meta tags  
✅ Structured Data (JSON-LD)  
✅ Sitemap ready (via react-router)  
✅ Mobile-responsive  
✅ Fast load times (Vite optimization)

### Accessibility Features

✅ Skip to main content link  
✅ ARIA labels and roles  
✅ Keyboard navigation support  
✅ Focus management in modals  
✅ Alt text for images  
✅ Color contrast compliance  
✅ Screen reader friendly  
✅ Semantic heading hierarchy

### Performance

- **Code Splitting:** Lazy loaded pages with `React.lazy()`
- **Chunk Strategy:** Separate chunks for React, Framer Motion, Icons
- **Image Optimization:** WebP format with Sharp
- **Font Loading:** Self-hosted with `font-display: swap`
- **CSS Code Splitting:** Enabled in Vite config
- **Tree Shaking:** Automatic with Vite
- **Minification:** Terser with console removal

---

## 🚀 Build & Deployment

### Development

```bash
npm run dev        # Start dev server with --host flag
npm run lint       # Run ESLint
npm run preview    # Preview production build
```

### Production Build

```bash
npm run build      # Build for production
npm run deploy     # Deploy to GitHub Pages
```

### Build Configuration (vite.config.js)

- **Base URL:** `/` (root path)
- **Manual Chunks:** React vendor, Framer Motion, Icons
- **Minification:** Terser (drops console logs)
- **CSS Code Split:** Enabled
- **Chunk Size Warning:** 1000kb limit

### Deployment

- **Platform:** GitHub Pages
- **Repository:** ZaZza402/pmws-last
- **Branch:** main
- **URL:** https://zazza402.github.io/pmws-last (configured as homepage)
- **404 Handling:** 404.html redirects to index.html for client-side routing

---

## ✅ Code Cleanup Status

### ✅ Removed Files (v1.1)

All dead code has been removed:

1. ~~`src/App.css`~~ - Deleted
2. ~~`src/index.css.backup`~~ - Deleted
3. ~~`src/components/CustomLoader.jsx`~~ - Deleted
4. ~~`src/components/CustomLoader.css`~~ - Deleted
5. ~~`src/config/serviceIcons.jsx`~~ - Deleted
6. ~~`src/config/services.js`~~ - Deleted

### 📝 Design Decisions

- **ChiSiamoPage.jsx** - Kept unrouted for potential future use (client may add content later)
- **Footer Link** - Removed link to Chi Siamo page to prevent 404 errors

### Remaining Cleanup Opportunities

- **`react.svg`** in assets - Default Vite asset, likely unused
- **Test coverage** - Only one test file exists (Header.test.jsx)

---

## 🔧 Configuration Files

### **package.json Scripts**

```json
{
  "dev": "vite --host", // Dev server accessible on network
  "build": "vite build", // Production build
  "lint": "eslint .", // Lint check
  "preview": "vite preview", // Preview build locally
  "predeploy": "npm run build", // Pre-deploy hook
  "deploy": "gh-pages -d dist" // Deploy to GitHub Pages
}
```

### **eslint.config.js**

- Uses new flat config format
- React Hooks rules enabled
- React Refresh for HMR
- Vitest globals included
- `no-unused-vars` disabled (for flexibility)
- Ignores `dist/` folder

### **vite.config.js**

- React plugin enabled
- Test environment: jsdom
- Base path: `/`
- Optimized manual chunks for better caching

---

## 📞 Contact Information (In Code)

**Phone:** +39 06 1234 5678  
**Email:** info@puntomigrare.it  
**WhatsApp:** +39 06 1234 5678  
**Address:** Via del Fuoco Sacro, 97, 00133 Roma RM  
**Social Media:**

- Facebook: https://www.facebook.com/puntomigrare
- Instagram: https://www.instagram.com/puntomigrare

---

## 🐛 Known Issues & TODOs

### ✅ Fixed in v1.1

1. ~~Scroll position carryover on navigation~~ - Fixed with ScrollToTop component
2. ~~Dead code files~~ - All removed
3. ~~ChiSiamoPage footer link leads to 404~~ - Link removed from footer

### Current Status

- **ChiSiamoPage** - Page exists but unrouted (kept for potential future use)
- **Placeholder images in ChiSiamoPage** - Need real team photos when/if activated

### Improvements

- ⚠️ **Hardcoded contact info** - Should be in config file for easy updates
- Consider creating a `config/contact.js` to centralize contact info
- Add more unit tests (currently only 1 test file)
- Consider adding a blog section for SEO
- Add Google Analytics or similar tracking
- Consider adding a booking/appointment system
- Implement cookie consent banner (GDPR compliance)

### Performance

- Consider lazy loading images below the fold
- Implement service worker for offline capability
- Add font preload for critical fonts

---

## 🎯 User Journey

### Primary User Flow

1. **Land on Homepage** → See hero with trust-building message
2. **Scroll Services** → Browse 4 service categories with visual cards
3. **Read "Why Us"** → Understand value proposition (time, clarity, language)
4. **Check FAQ** → Quick answers to common questions
5. **Contact** → Click WhatsApp button (primary CTA)

### Secondary Flows

- **Browse All Services** → ServiziPage for detailed service info
- **Search FAQ** → FaqPage with category filter
- **Visit Contact Page** → See map, hours, multiple contact methods
- **Legal** → Privacy/Cookie policy for compliance

---

## 🎨 Visual Design Notes

### Layout Style

- **Clean & Professional:** Minimalist design with ample whitespace
- **Card-based:** Services and content in elevated cards
- **Gradient Backgrounds:** Subtle gradients for section differentiation
- **Image-heavy:** Large hero images and service cards with photos

### Brand Personality

- **Trustworthy:** Professional colors (purple/blue primary)
- **Warm:** Orange accents for friendliness
- **Accessible:** Clear language, high contrast
- **Modern:** Contemporary design with smooth animations

### Photography Style

- **Human-centric:** Photos of families, travelers, documents
- **Optimistic:** Bright, hopeful imagery
- **Relevant:** Images match service context (travel, family, paperwork)

---

## 📝 Content Strategy

### Tone of Voice

- **Friendly but professional:** "Tu" form in Italian (informal you)
- **Clear and transparent:** No bureaucratic jargon
- **Empathetic:** Acknowledges user frustrations
- **Action-oriented:** Clear CTAs and next steps

### Key Messages

1. "Il tuo punto di riferimento" - Your reference point
2. "Nessuna sorpresa, solo chiarezza" - No surprises, only clarity
3. "Il tuo tempo è prezioso" - Your time is valuable
4. "Parliamo la tua lingua" - We speak your language

### Content Types

- **Service Descriptions:** Short + long format
- **FAQ:** Question/answer pairs with conversational tone
- **Blog Potential:** Could add articles about immigration process
- **Legal:** Standard privacy/cookie text

---

## 🔐 Security & Privacy

### Data Handling

- **No user data collection** on client-side
- External links use `rel="noopener noreferrer"`
- Privacy and Cookie policies present
- No cookies set by application (only external services like Google Maps)

### External Services

- Google Maps iframe (privacy considerations)
- WhatsApp links (external)
- Social media links (external)

---

## 🌍 Internationalization

### Current Language

- **Italian only** (it_IT)
- Language attribute: `<html lang="it">`
- All content in Italian

### Future I18n

- Could add English/Romanian (mentioned in site: "Parliamo inglese e rumeno")
- Would need i18n library (e.g., react-i18next)
- Currently no i18n implementation

---

## 📱 Responsive Design

### Mobile First Approach

- Base styles for mobile
- Media queries for tablet/desktop
- Touch-friendly interactions
- Mobile drawer for navigation
- Swipeable service cards

### Tablet Considerations

- Adjusted spacing
- Flexible grid layouts
- Optimized image sizes

### Desktop Enhancements

- Full navigation bar
- Multi-column layouts
- Parallax effects
- Hover states

---

## 🧪 Testing Strategy

### Current Tests

- Single test file: `Header.test.jsx`
- Tests brand text rendering
- Uses Testing Library + Vitest

### Testing Gaps

- No component integration tests
- No E2E tests
- No accessibility tests
- Limited coverage

### Recommended Tests

- [ ] Test all page routes
- [ ] Test form submissions (when added)
- [ ] Test accessibility with axe
- [ ] Test mobile interactions
- [ ] Test error boundary behavior

---

## 🔄 Version History

### v1.0 (Current)

- Initial production release
- Full feature set implemented
- 7 pages (6 routed + 1 unrouted)
- 18+ services cataloged
- 15+ FAQ questions
- Responsive design complete
- SEO optimized
- Accessibility features

---

## 📚 Documentation Notes

This documentation was created through comprehensive code analysis on **October 27, 2025**. It should be updated whenever:

- New features are added
- Routes change
- Content is updated
- Dead code is removed
- Design system changes

**Maintained by:** Project AI Assistant  
**For:** PuntoMigrare Development Team

---

## ✅ Quick Start Checklist for New Developers

- [ ] Clone repository
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Review this documentation
- [ ] Check for TODOs in code
- [ ] Fix ChiSiamoPage routing issue
- [ ] Remove dead code files
- [ ] Update placeholder content in ChiSiamoPage
- [ ] Consider centralizing contact info
- [ ] Add more tests

---

**End of Documentation**
