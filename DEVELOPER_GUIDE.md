# 🛠️ PuntoMigrare - Guida per Sviluppatori

**Data:** 28 Ottobre 2025  
**Progetto:** Sito Web PuntoMigrare  
**Stato:** Pronto per la Produzione

---

## 👋 Benvenuto, Sviluppatore!

Stai per lavorare su un progetto ben strutturato. Questa guida ti metterà operativo rapidamente e ti aiuterà a capire come tutto si incastra. Il codebase è pulito, ben organizzato e segue le best practice moderne di React.

---

## 🚀 Avvio Rapido (5 Minuti)

### **Prerequisiti**

Assicurati di avere installato:
- **Node.js** v18+ (consigliato v20)
- **npm** o **yarn** (viene con Node)
- **Git** (per version control)
- **Editor di Codice** (VS Code consigliato - il progetto è configurato per esso)

### **Passaggi di Installazione**

```bash
# 1. Clona il repository (o scompatta la cartella del progetto)
cd "d:\CLIENTS\DEMO\Another PM WEBSITE\puntomigrare"

# 2. Installa le dipendenze (richiede 2-3 minuti)
npm install

# 3. Avvia il server di sviluppo
npm run dev

# 4. Apri il browser
# Il sito sarà su http://localhost:5173
```

Fatto! Dovresti vedere la homepage caricarsi. L'hot reload è abilitato, quindi le modifiche appariranno istantaneamente.

---

## 📁 Struttura del Progetto (Dove Si Trova Tutto)

```
puntomigrare/
│
├── public/                      # File statici (serviti così come sono)
│   ├── sitemap.xml             # SEO: Mappa del sito
│   ├── robots.txt              # SEO: Istruzioni per i crawler
│   └── 404.html                # Pagina 404 personalizzata
│
├── src/                         # Tutto il codice sorgente
│   ├── main.jsx                # Entry point dell'app (configura React Router)
│   ├── App.jsx                 # Componente principale (logica di routing)
│   ├── App.css                 # Stili globali dell'app
│   ├── index.css               # CSS reset + stili base
│   │
│   ├── assets/                 # Immagini, font, icone
│   │   ├── brand-fonts/        # Font Amsterdam (handwriting)
│   │   ├── brand-logo/         # File del logo (PNG, WebP)
│   │   ├── brand-posters/      # Immagini hero
│   │   └── svg-icons/          # Icone SVG personalizzate
│   │
│   ├── components/             # Componenti UI riutilizzabili
│   │   ├── Header.jsx          # Navigazione del sito (sticky)
│   │   ├── Footer.jsx          # Footer del sito
│   │   ├── HeroSection.jsx     # Hero della homepage con animazione
│   │   ├── ServicesSection.jsx # Griglia servizi homepage
│   │   ├── WhySection.jsx      # Sezione "Perché Noi" storytelling
│   │   ├── FaqSection.jsx      # Anteprima FAQ homepage
│   │   ├── Breadcrumb.jsx      # NUOVO: Navigazione breadcrumb con schema
│   │   ├── AnimateOnScroll.jsx # Animazioni trigger-on-scroll
│   │   ├── BackToTopButton.jsx # Pulsante "torna su" fluttuante
│   │   ├── WhatsAppButton.jsx  # Pulsante WhatsApp fluttuante
│   │   ├── MobileDrawer.jsx    # Menu mobile drawer
│   │   ├── CustomLoader.jsx    # Spinner di caricamento
│   │   └── StructuredData.jsx  # Helper markup Schema.org
│   │
│   ├── pages/                  # Componenti pagina completa
│   │   ├── HomePage.jsx        # Landing page
│   │   ├── ServiziPage.jsx     # Tutti i servizi (39+ elementi, ricerca/filtro)
│   │   ├── FaqPage.jsx         # FAQ con ricerca/categorie
│   │   ├── ContattiPage.jsx    # Pagina contatti con mappa
│   │   ├── ChiSiamoPage.jsx    # Pagina about (profili team)
│   │   ├── PrivacyPolicyPage.jsx
│   │   ├── CookiePolicyPage.jsx
│   │   └── NotFoundPage.jsx    # 404 personalizzato
│   │
│   ├── config/                 # File di configurazione
│   │   ├── businessHours.js    # Orari d'ufficio
│   │   ├── documentChecklist.js # Dati documenti richiesti
│   │   ├── services.js         # Configurazioni servizi
│   │   └── serviceIcons.jsx    # Mappatura icone
│   │
│   ├── styles/                 # Stili globali
│   │   └── Utilities.css       # Classi utility
│   │
│   ├── servicesData.js         # Tutti i 39+ servizi (file dati principale)
│   └── faqData.js              # Tutte le 25 domande FAQ
│
├── package.json                # Dipendenze & script
├── vite.config.js              # Configurazione build Vite
├── eslint.config.js            # Regole di linting
├── optimize-images.cjs         # Script ottimizzazione immagini
│
├── PROJECT_HANDOVER.md         # Documentazione per il cliente
├── DEVELOPER_GUIDE.md          # Questo file (sei qui!)
└── ANALYSIS_REPORT.md          # Analisi completa + audit SEO
```

---

## 🧰 Stack Tecnologico (Cosa Stiamo Usando)

### **Framework Core**
- **React 19.1.1** - Ultima versione stabile (release dic 2024)
- **React Router DOM 7.1.1** - Routing client-side (nuova API)
- **Vite 6.0.7** - Server di dev super veloce e tool di build

### **UI & Icone**
- **React Icons 5.4.0** - Libreria di icone (Font Awesome)
- **Framer Motion** - Animazioni fluide (in AnimateOnScroll)

### **Styling**
- **CSS Puro** - Nessun preprocessore (il CSS moderno è potente!)
- **Pattern CSS Modules** - Ogni componente ha il suo file `.css`
- **Variabili CSS** - Per colori/spaziatura consistenti

### **Build & Dev Tools**
- **ESLint 9** - Linting del codice (cattura errori)
- **@vitejs/plugin-react** - React Fast Refresh per hot reload
- **sharp** - Ottimizzazione immagini (in optimize-images.cjs)

### **Nessuna Libreria Esterna Per:**
- ❌ Framework UI (no Bootstrap, Material-UI, ecc.)
- ❌ Gestione stato (gli hook React bastano)
- ❌ Form (componenti React controllati vanilla)
- ❌ Client HTTP (l'API fetch è sufficiente)

**Perché questo è importante:** Bundle leggero, tempi di caricamento veloci, manutenzione più semplice.

---

## 🎨 Design System (Mantieni la Coerenza!)

### **Colori**

```css
/* Colori Brand */
--brand-blue: #2b286f;      /* Primario (header, bottoni)*/
--brand-orange: #f78d23;    /* Accento (CTA, highlight) */

/* Gradienti */
--gradient-blue: linear-gradient(135deg, #e8f0f7 0%, #dce8f3 50%, #d5e3f0 100%);
--gradient-orange: linear-gradient(135deg, #f78d23 0%, #e87722 100%);
--gradient-blue-button: linear-gradient(135deg, #2b286f 0%, #1e1d50 100%);

/* Neutrali */
--text-dark: #1f2937;
--text-medium: #374151;
--text-light: #6b7280;
--border-color: #e5e7eb;
--bg-light: #f9fafb;
```

### **Tipografia**

```css
/* Font Primario: Font di sistema (veloce, look nativo) */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, ...;

/* Font Accent: Amsterdam (handwriting) */
font-family: "Amsterdam One", cursive, sans-serif;
/* Usato per: Tagline hero, sottotitoli sezioni */
```

**Dimensioni Font:**
- H1: 2.5rem (40px) - Titoli pagina
- H2: 1.8-2rem (29-32px) - Header sezioni
- H3: 1.3rem (21px) - Titoli card
- Body: 1rem (16px) - Testo normale
- Small: 0.9rem (14px) - Didascalie

### **Spaziatura**

```css
/* Larghezze container */
.container { max-width: 1200px; }
.container-wide { max-width: 1400px; }

/* Padding standard */
Padding sezioni: 3-4rem verticale
Padding card: 1.5-2.5rem
Padding top pagina: 140px desktop / 120px mobile (per header fisso)
```

### **Componenti**

**Stili Bottoni:**
```css
/* CTA Primario */
background: linear-gradient(135deg, #f78d23 0%, #e87722 100%);
border-radius: 50px;
padding: 0.875rem 2rem;
font-weight: 600;

/* Hover */
background: linear-gradient(135deg, #2b286f 0%, #1e1d50 100%);
transform: translateY(-2px);
```

**Stili Card:**
```css
background: white;
border-radius: 14-20px;
box-shadow: 0 4px 20px rgba(43, 40, 111, 0.08);
border: 1px solid rgba(43, 40, 111, 0.1);

/* Hover */
transform: translateY(-4px);
box-shadow: 0 8px 30px rgba(43, 40, 111, 0.15);
```

---

## 📝 Task Comuni (Cosa Probabilmente Dovrai Fare)

### **1. Aggiornare Informazioni di Contatto**

**File da modificare:**
- `src/components/Header.jsx` - Numero telefono nell'header
- `src/components/Footer.jsx` - Tutti i dettagli contatto
- `src/pages/ContattiPage.jsx` - Contenuto pagina contatti
- `src/components/WhatsAppButton.jsx` - Link WhatsApp

**Cerca & Sostituisci:**
```javascript
// Trova: +390612345678
// Sostituisci con: [numero telefono reale]

// Trova: info@puntomigrare.it
// Sostituisci con: [email reale]
```

### **2. Aggiungere un Nuovo Servizio**

**Modifica:** `src/servicesData.js`

```javascript
export const allServices = [
  // Aggiungi il nuovo oggetto servizio
  {
    id: "s40",  // Incrementa dall'ultimo ID
    category: "Migranti",  // O: Viaggiatori, Famiglie, Altri Servizi
    title: "Nome del Tuo Servizio",
    shortTitle: "Versione breve",
    description: "Cosa fa questo servizio...",
    icon: "passport",  // Vedi serviceIcons.jsx per le opzioni
    featured: false,  // Imposta true per sezione "Servizi Più Richiesti"
    practices: [
      "Cosa specifica 1",
      "Cosa specifica 2",
    ],
    subservices: [  // Opzionale
      {
        id: "s40-sub1",
        title: "Nome sub-servizio",
        description: "Cosa copre...",
      }
    ]
  },
  // ... resto dei servizi
];
```

**Non serve rebuild** - hot reload lo mostrerà immediatamente!

### **3. Aggiungere una Nuova Domanda FAQ**

**Modifica:** `src/faqData.js`

```javascript
export const faqQuestions = [
  // Aggiungi la tua nuova domanda
  {
    id: "faq-26",  // Incrementa dall'ultimo
    category: "Immigrazione",  // O: CAF & Patronato, Altri Servizi
    question: "La tua domanda qui?",
    answer: "Risposta dettagliata qui..."
  },
  // ... resto delle FAQ
];
```

**Non dimenticare:** Aggiorna il conteggio schema markup in `FaqPage.jsx` se vuoi (si auto-genera dall'array, quindi è già fatto!).

### **4. Modificare Orari d'Apertura**

**Modifica:** `src/config/businessHours.js`

```javascript
export const businessHours = {
  monday: { open: "09:00", close: "18:00", isOpen: true },
  tuesday: { open: "09:00", close: "18:00", isOpen: true },
  // ... ecc
};
```

Poi aggiorna la visualizzazione in `ContattiPage.jsx` se necessario.

### **5. Aggiornare Pagina "Chi Siamo"**

**Modifica:** `src/pages/ChiSiamoPage.jsx`

Sostituisci il contenuto placeholder:
- Foto membri del team (in `src/assets/`)
- Nomi e titoli
- Descrizioni bio

```javascript
<div className="profile-card">
  <img 
    src="/percorso/foto-reale.jpg" 
    alt="Nome membro team"
  />
  <h3>Nome Reale</h3>
  <p className="role">Il Loro Titolo/Ruolo</p>
  <p className="bio">Bio reale qui...</p>
</div>
```

### **6. Ottimizzare Immagini**

**Prima di aggiungere immagini al progetto:**

```bash
# Esegui l'ottimizzatore di immagini
node optimize-images.cjs
```

Questo comprime le immagini senza perdita di qualità (usa la libreria sharp). Metti prima le immagini nelle rispettive cartelle:
- Logo brand → `src/assets/brand-logo/`
- Foto → `src/assets/brand-posters/`
- Icone → `src/assets/svg-icons/`

---

## 🔧 Script Disponibili

```bash
# Sviluppo (hot reload, source maps)
npm run dev

# Build per produzione (minificato, ottimizzato)
npm run build

# Anteprima build produzione localmente
npm run preview

# Esegui linter (controlla qualità codice)
npm run lint

# Ottimizza immagini (esegui prima di committare nuove immagini)
node optimize-images.cjs
```

**Output build:** Cartella `dist/` (questo è ciò che deploi)

---

## 🌐 Checklist Pre-Deployment

Prima di andare in produzione:

```bash
# 1. Esegui un build pulito
npm run build

# 2. Testa il build di produzione localmente
npm run preview

# 3. Controlla errori nella console del browser

# 4. Verifica che tutte le pagine carichino correttamente

# 5. Testa su dispositivo mobile (controllo responsive)

# 6. Deploya la cartella dist/ sul tuo hosting
```

**File importanti per l'hosting:**
- La cartella `dist/` contiene tutto
- `public/sitemap.xml` e `public/robots.txt` devono essere accessibili alla root
- Configura redirect: Tutte le route → `index.html` (per React Router)

---

## 🐛 Risoluzione Problemi Comuni

### **Problema: Errori "Module not found"**
```bash
# Soluzione: Reinstalla le dipendenze
rm -rf node_modules
npm install
```

### **Problema: Hot reload non funziona**
```bash
# Soluzione: Riavvia il server di dev
# Premi Ctrl+C per fermare, poi:
npm run dev
```

### **Problema: Immagini non caricano**
- Controlla i percorsi file (sensibile a maiuscole/minuscole!)
- Immagini in `src/assets/` usano percorsi relativi: `import logo from '../assets/brand-logo/logo.png'`
- Immagini in `public/` usano percorsi assoluti: `/logo.png`

### **Problema: Stili non si applicano**
- Controlla se il file CSS è importato nel componente
- Controlla errori di battitura nei selettori CSS
- Usa DevTools del browser per ispezionare l'elemento

### **Problema: Build fallisce**
```bash
# Controlla prima gli errori in modalità dev
npm run dev
# Risolvi eventuali errori mostrati nel terminale o console del browser
```

---

## 📚 File Importanti da Conoscere

### **Configurazione Router**
**File:** `src/App.jsx`

Tutte le route sono definite qui. Per aggiungere una nuova pagina:
```javascript
<Route path="/nuova-pagina" element={<NuovaPagina />} />
```

### **File Dati** (Modifica questi per aggiornamenti contenuto)
- `src/servicesData.js` - Tutti i servizi (39 elementi)
- `src/faqData.js` - Tutte le FAQ (25 domande)
- `src/config/businessHours.js` - Orari d'ufficio
- `src/config/documentChecklist.js` - Documenti richiesti

### **File SEO** (Importanti per Google)
- `public/sitemap.xml` - Aggiorna quando aggiungi/rimuovi pagine
- `public/robots.txt` - Istruzioni crawler
- Ogni componente pagina ha tag `<title>` e `<meta>` in cima

### **Stili Globali**
- `src/index.css` - CSS reset, stili base, font
- `src/App.css` - Stili a livello app
- `src/styles/Utilities.css` - Classi helper

---

## 🔒 Considerazioni SEO (Non Rompere Queste!)

### **Meta Tag (Ogni Pagina Ha Questi)**
```jsx
<title>Titolo Pagina - 50-60 caratteri | PuntoMigrare</title>
<meta name="description" content="Descrizione 140-160 caratteri..." />
<link rel="canonical" href="https://www.puntomigrare.it/url-pagina" />
```

**Non rimuovere o modificare questi** senza una buona ragione - sono ottimizzati per Google.

### **Schema Markup** (Dati Strutturati)
- `FaqPage.jsx` ha schema FAQPage (rich snippet)
- `Breadcrumb.jsx` ha schema BreadcrumbList
- Questi aiutano Google a capire il contenuto della pagina

### **Sitemap** (public/sitemap.xml)
Se aggiungi o rimuovi pagine, aggiorna la sitemap:
```xml
<url>
  <loc>https://www.puntomigrare.it/nuova-pagina</loc>
  <priority>0.8</priority>
  <changefreq>monthly</changefreq>
</url>
```

### **Testo Alt Immagini**
Ogni immagine ha testo alt per accessibilità e SEO:
```jsx
<img src="..." alt="Testo descrittivo qui" />
```

---

## 🎯 Standard di Qualità del Codice

### **Struttura Componente**
```jsx
// 1. Import
import React, { useState } from 'react';
import './Component.css';

// 2. Definizione componente
const Component = () => {
  // 3. State e hook
  const [state, setState] = useState(initialValue);
  
  // 4. Event handler
  const handleClick = () => { ... };
  
  // 5. Render
  return (
    <div className="component">
      {/* JSX qui */}
    </div>
  );
};

// 6. Export
export default Component;
```

### **Convenzioni di Nomenclatura**
- **Componenti:** PascalCase (`Header.jsx`, `ServicesSection.jsx`)
- **Classi CSS:** kebab-case (`.service-card`, `.btn-primary`)
- **Funzioni:** camelCase (`handleClick`, `fetchData`)
- **Costanti:** UPPER_SNAKE_CASE (`API_URL`, `MAX_ITEMS`)

### **Organizzazione CSS**
Il file CSS di ogni componente segue questa struttura:
```css
/* 1. Wrapper componente */
.component-name { }

/* 2. Elementi figli */
.component-name .child { }

/* 3. Modificatori */
.component-name.modifier { }

/* 4. Stati */
.component-name:hover { }
.component-name.active { }

/* 5. Media query alla fine */
@media (max-width: 768px) { }
```

---

## 🚨 Cose da NON Cambiare (A Meno Che Tu Non Sappia Cosa Stai Facendo)

1. **Setup React Router** in `App.jsx` - romperlo rompe la navigazione
2. **Config Vite** in `vite.config.js` - a meno che tu non conosca bene Vite
3. **Script package.json** - sono configurati per questo progetto
4. **Meta tag SEO** - sono ottimizzati, le modifiche potrebbero danneggiare il ranking Google
5. **Schema markup** - Google dipende da questa struttura
6. **CSS reset** in `index.css` - mantiene gli stili consistenti tra i browser

---

## 📞 Ottenere Aiuto

### **Documentazione Progetto**
- `ANALYSIS_REPORT.md` - Analisi completa, audit SEO, decisioni di design
- `PROJECT_HANDOVER.md` - Documentazione per il cliente
- Questo file - Guida sviluppatore

### **Documentazione React**
- [React Docs](https://react.dev/) - Documentazione ufficiale React
- [React Router](https://reactrouter.com/) - Docs libreria routing

### **Documentazione Vite**
- [Vite Guide](https://vitejs.dev/guide/) - Documentazione build tool

### **Risorse CSS**
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS) - Guida CSS completa
- [Can I Use](https://caniuse.com/) - Controllo compatibilità browser

---

## ✅ Checklist Pre-Deployment

Prima di andare live, verifica:

- [ ] Informazioni contatto aggiornate (telefono, email, WhatsApp)
- [ ] Pagina "Chi Siamo" ha contenuto reale e foto
- [ ] Orari d'apertura sono corretti
- [ ] Tutto il testo placeholder sostituito
- [ ] Immagini ottimizzate (`node optimize-images.cjs`)
- [ ] Build produzione riuscito (`npm run build`)
- [ ] Nessun errore console nel browser
- [ ] Mobile responsive (testa su device reale)
- [ ] Tutti i link funzionano (interni ed esterni)
- [ ] Pulsante WhatsApp linka al numero corretto
- [ ] Posizione mappa corretta sulla pagina Contatti
- [ ] Sitemap sottomessa a Google Search Console
- [ ] Listing Google My Business creato

---

## 🎁 Funzionalità Nice-to-Have (Migliorie Future)

Se il cliente vuole più funzionalità dopo, considera:

1. **Google Analytics** - Traccia visitatori (facile da aggiungere)
2. **Backend Form Contatti** - Ora non c'è invio form (WhatsApp è il CTA primario)
3. **Sezione Blog/News** - Per content marketing SEO
4. **Sistema Prenotazione Servizi** - Permetti ai clienti di prenotare appuntamenti
5. **Switcher Lingua** - Versioni English/Română (menzionano multilingue)
6. **Live Chat** - Invece di solo pulsante WhatsApp
7. **Carousel Testimonial** - Prova sociale su homepage

---

## 🤝 Note di Handover

### **Cosa è Fatto:**
✅ Sito completo (7 pagine)  
✅ Mobile responsive  
✅ SEO ottimizzato (sitemap, schema, meta tag)  
✅ Tutti i componenti documentati  
✅ Codice pulito e manutenibile  
✅ Nessun bug maggiore  
✅ Performance ottimizzate  

### **Cosa Serve Fare:**
❌ Aggiornare info contatto placeholder  
❌ Aggiungere foto/bio reali a Chi Siamo  
❌ Sottomettere sitemap a Google  
❌ Creare Google My Business  
❌ Approvazione cliente sul contenuto  

### **Limitazioni Conosciute:**
- Nessun backend (è un sito statico)
- Nessun invio form (WhatsApp è il CTA)
- Chi Siamo ha contenuto placeholder
- Dettagli contatto sono placeholder

---

## 💬 Note Finali

Questa è un'applicazione React solida e pronta per la produzione. Il codice è pulito, l'architettura è sana, e tutto è ben documentato. Dovresti essere in grado di iniziare a fare modifiche senza troppi grattacapi.

**Alcuni consigli:**
- Leggi `ANALYSIS_REPORT.md` per capire le decisioni di design
- Non sovra-ingegnerizzare - il cliente ha bisogno di semplicità
- Testa frequentemente su mobile (la maggior parte degli utenti sarà su telefoni)
- Mantieni il codebase leggero (nessuna dipendenza non necessaria)

**Se ti blocchi:**
- Controlla prima questa guida
- Leggi i commenti dei componenti (sono utili)
- Usa i DevTools del browser (sono i tuoi migliori amici)
- Googla il messaggio d'errore (React ha grande supporto community)

Buona fortuna e divertiti con il progetto! 🚀

---

**Domande?** Sentiti libero di aggiungere note a questo documento mentre impari il codebase.

---

_Ultimo aggiornamento: 28 Ottobre 2025_
