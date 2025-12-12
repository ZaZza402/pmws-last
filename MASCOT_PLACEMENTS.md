# 🎭 Mascot Placement Strategy

## Strategic Placements for PuntoMigrare Mascots

This guide shows where and how to integrate the 4 mascot variations throughout the site.

---

## 1. 😊 Happy Mascot - Hero Section

**Location**: `HeroSection.jsx`  
**Purpose**: Welcome visitors with warmth and personality  
**Placement**: Next to logo or above CTA buttons  
**Size**: 80-100px

### Implementation:

```jsx
import Mascot from "./Mascot";

// In the render, add after the logo:
<motion.div
  variants={logoVariants}
  initial="hidden"
  animate={isLoaded ? "visible" : "hidden"}
  style={{
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  }}
>
  <img src={logoIcon} alt="PuntoMigrare" className="hero-logo" />
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Mascot mood="happy" size={80} alt="Benvenuto su PuntoMigrare" />
  </motion.div>
</motion.div>;
```

### CSS Addition to `HeroSection.css`:

```css
.hero-logo-wrapper {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  justify-content: center;
}

@media (max-width: 768px) {
  .hero-logo-wrapper {
    flex-direction: column;
    gap: 1rem;
  }
}
```

---

## 2. 🤔 Thinking Mascot - FAQ Section

**Location**: `FaqSection.jsx`  
**Purpose**: Encourage questions and curiosity  
**Placement**: Section header, floating beside the title  
**Size**: 60-70px

### Implementation:

```jsx
import Mascot from "./Mascot";

// Add to the section header:
<div className="faq-header">
  <div className="faq-header-content">
    <Mascot mood="thinking" size={70} className="faq-mascot" />
    <div>
      <h2>Domande Frequenti</h2>
      <p>Le risposte alle domande più comuni</p>
    </div>
  </div>
</div>;
```

### CSS Addition to `FaqSection.css`:

```css
.faq-header {
  text-align: center;
  margin-bottom: 3rem;
}

.faq-header-content {
  display: inline-flex;
  align-items: center;
  gap: 1.5rem;
  justify-content: center;
}

.faq-mascot {
  animation: gentle-bob 3s ease-in-out infinite;
}

@keyframes gentle-bob {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@media (max-width: 768px) {
  .faq-header-content {
    flex-direction: column;
    gap: 1rem;
  }
}
```

---

## 3. 💙 Helpful Mascot - Contact Page

**Location**: `ContattiPage.jsx`  
**Purpose**: Reassure users they'll get help  
**Placement**: Above contact options or in page header  
**Size**: 80-100px

### Implementation:

```jsx
import Mascot from "../components/Mascot";

// Add to the page header section:
<div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
  <div style={{ marginBottom: "1.5rem" }}>
    <Mascot
      mood="helpful"
      size={100}
      alt="Siamo qui per aiutarti"
      className="contact-mascot"
    />
  </div>
  <h1 style={{ color: "#2b286f" }}>Siamo qui per ascoltarti</h1>
  <p
    style={{
      maxWidth: "70ch",
      margin: "0.75rem auto 0 auto",
      fontSize: "1.1rem",
      color: "#475569",
    }}
  >
    Scegli il modo più comodo per metterti in contatto con noi.
  </p>
</div>;
```

### CSS Addition to `ContattiPage.css`:

```css
.contact-mascot {
  animation: welcoming-wave 2s ease-in-out infinite;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

@keyframes welcoming-wave {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-5deg);
  }
  75% {
    transform: rotate(5deg);
  }
}
```

---

## 4. 🎉 Celebrating Mascot - Success States

**Location**: Form submissions, completed processes  
**Purpose**: Celebrate user achievements  
**Placement**: Success messages, confirmation pages  
**Size**: 80-120px

### Implementation Example (Generic Success Component):

```jsx
import Mascot from "./Mascot";
import { motion } from "framer-motion";

const SuccessMessage = ({ title, message }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    className="success-message"
  >
    <motion.div
      animate={{
        rotate: [0, 10, -10, 0],
        y: [0, -10, 0],
      }}
      transition={{
        duration: 0.6,
        repeat: 3,
      }}
    >
      <Mascot mood="celebrating" size={120} alt="Operazione completata!" />
    </motion.div>
    <h3>{title || "Ottimo lavoro!"}</h3>
    <p>{message || "La tua richiesta è stata inviata con successo."}</p>
  </motion.div>
);
```

### CSS for Success Component:

```css
.success-message {
  text-align: center;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 16px;
  border: 2px solid #38bdf8;
}

.success-message h3 {
  color: #2b286f;
  margin: 1.5rem 0 0.75rem 0;
}

.success-message p {
  color: #475569;
  font-size: 1.1rem;
}
```

---

## 5. 💙 Helpful Mascot - 404 Error Page

**Location**: `NotFoundPage.jsx`  
**Purpose**: Make errors less frustrating  
**Placement**: Replace or accompany the compass icon  
**Size**: 100-120px

### Implementation:

```jsx
import Mascot from "../components/Mascot";

// Replace the icon section with:
<div className="not-found-icon" aria-hidden="true">
  {isMaintenancePage ? (
    <VscTools size={60} />
  ) : (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Mascot mood="helpful" size={120} alt="Possiamo aiutarti" />
      <VscCompass size={40} style={{ opacity: 0.6 }} />
    </div>
  )}
</div>;
```

### Enhanced Message:

```jsx
<>
  <h1>Pagina non trovata</h1>
  <p>
    Non preoccuparti! Capita a tutti di perdersi. Possiamo aiutarti a trovare
    quello che cerchi.
  </p>
  <div className="not-found-actions">
    <Link to="/" className="btn btn--blue">
      Torna alla Home
    </Link>
    <Link to="/contatti" className="btn btn--outline-blue">
      Contattaci per aiuto
    </Link>
  </div>
</>
```

---

## 6. 🤔 Thinking Mascot - Clustered Permit Pages

**Location**: `ClusteredPermessoPage.jsx`  
**Purpose**: Guide users through complex permit information  
**Placement**: In variant sections before detailed content  
**Size**: 50-60px (inline with text)

### Implementation:

```jsx
import Mascot from "../components/Mascot";

// In the variant section rendering:
<div className="variant-intro">
  <Mascot mood="thinking" size={50} className="inline-mascot" />
  <p className="variant-description">
    Ecco cosa devi sapere su questo tipo di permesso...
  </p>
</div>;
```

### CSS Addition to `ClusteredPermessoPage.css`:

```css
.variant-intro {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 12px;
  border-left: 4px solid #f57e13;
}

.inline-mascot {
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.variant-description {
  margin: 0;
  color: #475569;
  line-height: 1.6;
}
```

---

## 7. 😊 Happy Mascot - WhatsApp Button Enhancement

**Location**: `WhatsAppButton.jsx`  
**Purpose**: Make the WhatsApp popup friendlier  
**Placement**: Inside the popup header  
**Size**: 40-50px

### Implementation:

```jsx
import Mascot from "./Mascot";

// In the popup content:
<div className="whatsapp-popup-header">
  <Mascot mood="happy" size={45} className="popup-mascot" />
  <div>
    <h4>Chatta con noi!</h4>
    <p>Scegli con chi vuoi parlare</p>
  </div>
</div>;
```

### CSS Enhancement:

```css
.whatsapp-popup-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.popup-mascot {
  animation: subtle-pulse 2s ease-in-out infinite;
}

@keyframes subtle-pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
```

---

## 8. 🎉 Celebrating Mascot - Service Complete Badges

**Location**: Service cards when user completes a process  
**Purpose**: Gamification and positive reinforcement  
**Placement**: Badge overlay on completed service cards  
**Size**: 30-40px

### Implementation:

```jsx
import Mascot from "./Mascot";

const ServiceCard = ({ service, isCompleted }) => (
  <div className={`service-card ${isCompleted ? "completed" : ""}`}>
    {isCompleted && (
      <div className="completion-badge">
        <Mascot mood="celebrating" size={35} />
        <span>Completato!</span>
      </div>
    )}
    {/* Rest of service card */}
  </div>
);
```

---

## Animation Best Practices

### 1. **Floating Animation** (Gentle, welcoming)

```css
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.mascot-float {
  animation: float 3s ease-in-out infinite;
}
```

### 2. **Bobbing Animation** (Attention-grabbing)

```css
@keyframes bob {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-5px) rotate(-2deg);
  }
  75% {
    transform: translateY(-5px) rotate(2deg);
  }
}

.mascot-bob {
  animation: bob 2s ease-in-out infinite;
}
```

### 3. **Wiggle Animation** (Playful)

```css
@keyframes wiggle {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-5deg);
  }
  75% {
    transform: rotate(5deg);
  }
}

.mascot-wiggle {
  animation: wiggle 2.5s ease-in-out infinite;
}
```

### 4. **Pulse Animation** (Subtle attention)

```css
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
  }
}

.mascot-pulse {
  animation: pulse 2s ease-in-out infinite;
}
```

---

## Responsive Guidelines

### Desktop (>1024px)

- Hero: 100px
- FAQ: 70px
- Contact: 100px
- 404: 120px
- Inline: 50-60px

### Tablet (768px - 1024px)

- Hero: 80px
- FAQ: 60px
- Contact: 80px
- 404: 100px
- Inline: 45-50px

### Mobile (<768px)

- Hero: 60px
- FAQ: 50px
- Contact: 70px
- 404: 80px
- Inline: 40px

### Example Responsive CSS:

```css
.mascot-responsive {
  width: 100px;
  height: auto;
}

@media (max-width: 1024px) {
  .mascot-responsive {
    width: 80px;
  }
}

@media (max-width: 768px) {
  .mascot-responsive {
    width: 60px;
  }
}
```

---

## Accessibility Considerations

1. **Always provide meaningful alt text**:

   ```jsx
   <Mascot mood="happy" alt="Benvenuto, siamo qui per aiutarti" />
   ```

2. **Don't rely solely on mascot for important information**:

   ```jsx
   // ❌ Bad
   <Mascot mood="celebrating" />

   // ✅ Good
   <div>
     <Mascot mood="celebrating" alt="Successo" />
     <span className="sr-only">Operazione completata con successo</span>
   </div>
   ```

3. **Respect prefers-reduced-motion**:
   ```css
   @media (prefers-reduced-motion: reduce) {
     .mascot-float,
     .mascot-bob,
     .mascot-wiggle,
     .mascot-pulse {
       animation: none;
     }
   }
   ```

---

## Performance Tips

1. **Lazy load mascots below the fold**:

   ```jsx
   import { lazy, Suspense } from "react";
   const Mascot = lazy(() => import("./Mascot"));

   <Suspense fallback={<div style={{ width: 60, height: 80 }} />}>
     <Mascot mood="happy" size={60} />
   </Suspense>;
   ```

2. **Use will-change for animated mascots**:

   ```css
   .mascot-animated {
     will-change: transform;
   }
   ```

3. **Preload critical mascots** (add to index.html):
   ```html
   <link rel="preload" as="image" href="/src/assets/mascots/mascot-happy.svg" />
   ```

---

## Quick Implementation Checklist

- [ ] Add happy mascot to Hero section with float animation
- [ ] Add thinking mascot to FAQ section header
- [ ] Add helpful mascot to Contact page header
- [ ] Add helpful mascot to 404 page
- [ ] Add celebrating mascot to success messages
- [ ] Add thinking mascot to permit page variants
- [ ] Enhance WhatsApp popup with happy mascot
- [ ] Test all placements on mobile devices
- [ ] Verify accessibility (alt text, keyboard navigation)
- [ ] Check animation performance (60fps target)
- [ ] Add prefers-reduced-motion support
- [ ] Optimize with lazy loading where appropriate

---

## Summary of Placements

| Mascot         | Location               | Purpose                 | Size     |
| -------------- | ---------------------- | ----------------------- | -------- |
| 😊 Happy       | Hero, WhatsApp popup   | Welcome, friendliness   | 80-100px |
| 🤔 Thinking    | FAQ, Permit pages      | Learning, guidance      | 50-70px  |
| 💙 Helpful     | Contact, 404           | Support, assistance     | 80-120px |
| 🎉 Celebrating | Success states, Badges | Achievement, completion | 35-120px |

---

**Next Steps**: Choose 2-3 key placements to implement first, test user response, then roll out to additional areas based on feedback.
