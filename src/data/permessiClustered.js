// src/data/permessiClustered.js
// STRATEGIC "CLUSTER APPROACH" - 7 Power Pages
// Better SEO, better UX, easier maintenance

export const permessiClustered = [
  // ==========================================
  // PAGE 1: LAVORO SUBORDINATO E ASSIMILATI
  // The biggest power page - covers all employment types
  // ==========================================
  {
    id: "lavoro-subordinato",
    slug: "lavoro-subordinato",
    category: "permessi-di-soggiorno",
    type: "prima-richiesta",
    title: "Permesso di Soggiorno per Lavoro Subordinato",
    shortTitle: "Lavoro Subordinato",
    subtitle:
      "Lavoro dipendente, stagionale, attesa occupazione e casi particolari",
    metaTitle:
      "Permesso Soggiorno Lavoro Subordinato Roma | Dipendenti, Stagionali",
    metaDescription:
      "Guida completa al permesso lavoro subordinato: dipendenti, stagionali, Art. 27, attesa occupazione. Assistenza completa kit postale e Questura Roma.",
    keywords: [
      "permesso soggiorno lavoro subordinato",
      "permesso lavoro dipendente roma",
      "permesso lavoro stagionale",
      "attesa occupazione",
      "casi particolari art 27",
      "nulla osta lavoro",
      "kit postale permesso soggiorno",
      "rinnovo permesso lavoro",
      "conversione permesso studio lavoro",
    ],
    icon: "briefcase",
    duration: "1-2 anni secondo contratto",
    difficulty: "Media",
    featured: true,
    priority: 1,

    // This page covers these subtypes:
    variants: [
      "Lavoro Subordinato Standard",
      "Lavoro Stagionale (agricoltura, turismo)",
      "Attesa Occupazione (minimo 12 mesi)",
      "Casi Particolari Art. 27 TUI (lavoratori qualificati fuori quota)",
    ],
  },

  // ==========================================
  // PAGE 2: LAVORO AUTONOMO
  // Entrepreneurs, freelancers, professionals
  // ==========================================
  {
    id: "lavoro-autonomo",
    slug: "lavoro-autonomo",
    category: "permessi-di-soggiorno",
    type: "prima-richiesta",
    title: "Permesso di Soggiorno per Lavoro Autonomo",
    shortTitle: "Lavoro Autonomo",
    subtitle: "Per imprenditori, liberi professionisti e lavoratori autonomi",
    metaTitle: "Permesso Soggiorno Lavoro Autonomo Roma | Partita IVA, Impresa",
    metaDescription:
      "Permesso per lavoro autonomo: apertura partita IVA, iscrizione Camera Commercio, business plan. Assistenza completa per imprenditori stranieri a Roma.",
    keywords: [
      "permesso lavoro autonomo",
      "partita iva stranieri",
      "aprire impresa italia",
      "libero professionista straniero",
      "camera commercio stranieri",
      "business plan permesso soggiorno",
      "imprenditore extracomunitario",
    ],
    icon: "briefcase",
    duration: "1-2 anni rinnovabile",
    difficulty: "Alta",
    featured: true,
    priority: 2,

    variants: [
      "Imprenditori individuali",
      "Liberi professionisti",
      "Artigiani",
      "Commercianti",
    ],
  },

  // ==========================================
  // PAGE 3: STUDIO E FORMAZIONE
  // Merges: studente, alunno, motivi studio, tirocinio, ricercatore
  // ==========================================
  {
    id: "studio-formazione",
    slug: "studio-formazione",
    category: "permessi-di-soggiorno",
    type: "prima-richiesta",
    title: "Permesso di Soggiorno per Studio e Formazione",
    shortTitle: "Studio e Formazione",
    subtitle:
      "Università, scuola, tirocini, formazione professionale e ricerca",
    metaTitle: "Permesso Soggiorno Studio Roma | Università, Tirocini, Ricerca",
    metaDescription:
      "Permesso per studenti, tirocinanti e ricercatori. Università, corsi professionali, stage, dottorati. Assistenza completa per iscrizione e rinnovo a Roma.",
    keywords: [
      "permesso soggiorno studente",
      "permesso studio università",
      "visto studente italia",
      "permesso tirocinio",
      "permesso ricercatore",
      "permesso alunno",
      "formazione professionale stranieri",
      "stage italia stranieri",
      "dottorato permesso soggiorno",
      "rinnovo permesso studio",
    ],
    icon: "graduation-cap",
    duration: "Annuale (studenti) o durata corso/tirocinio",
    difficulty: "Bassa-Media",
    featured: true,
    priority: 3,

    variants: [
      "Studenti Universitari",
      "Alunni (Scuole superiori)",
      "Motivi di Studio (Corsi singoli, Master)",
      "Tirocinio e Formazione Professionale",
      "Tirocinanti (Stage aziendali)",
      "Ricercatori (Università e centri ricerca)",
    ],
  },

  // ==========================================
  // PAGE 4: FAMIGLIA E MINORI
  // Merges: motivi familiari, affidamento, attesa cittadinanza
  // ==========================================
  {
    id: "famiglia-minori",
    slug: "famiglia-minori",
    category: "permessi-di-soggiorno",
    type: "prima-richiesta",
    title: "Permesso di Soggiorno per Famiglia e Minori",
    shortTitle: "Famiglia e Minori",
    subtitle:
      "Ricongiungimento familiare, affidamento minori, attesa cittadinanza",
    metaTitle: "Permesso Familiare Roma | Ricongiungimento, Affidamento Minori",
    metaDescription:
      "Permesso per motivi familiari: ricongiungimento coniuge e figli, affidamento minori, attesa cittadinanza. Assistenza sensibile e professionale a Roma.",
    keywords: [
      "ricongiungimento familiare",
      "permesso motivi familiari",
      "permesso coniuge italiano",
      "affidamento minori stranieri",
      "permesso attesa cittadinanza",
      "ricongiungimento figli",
      "documenti ricongiungimento",
      "nulla osta ricongiungimento",
    ],
    icon: "users",
    duration: "2 anni rinnovabile",
    difficulty: "Media",
    featured: true,
    priority: 4,

    variants: [
      "Motivi Familiari (Ricongiungimento)",
      "Affidamento Minori",
      "Attesa Acquisto Cittadinanza",
    ],
  },

  // ==========================================
  // PAGE 5: PROTEZIONE E CASI SPECIALI
  // Merges: asilo, apolide, missione, religiosi
  // ==========================================
  {
    id: "protezione-casi-speciali",
    slug: "protezione-casi-speciali",
    category: "permessi-di-soggiorno",
    type: "prima-richiesta",
    title: "Permessi per Protezione Internazionale e Casi Speciali",
    shortTitle: "Protezione e Casi Speciali",
    subtitle:
      "Asilo politico, status apolide, motivi religiosi, missioni diplomatiche",
    metaTitle:
      "Permesso Asilo Politico Roma | Protezione Internazionale, Apolidi",
    metaDescription:
      "Assistenza per richiedenti asilo, apolidi, ministri di culto e personale diplomatico. Supporto legale specializzato per casi umanitari a Roma.",
    keywords: [
      "asilo politico italia",
      "protezione internazionale",
      "permesso apolide",
      "rifugiati italia",
      "permesso motivi religiosi",
      "ministri culto stranieri",
      "permesso missione diplomatica",
      "protezione umanitaria",
    ],
    icon: "shield",
    duration: "Variabile secondo status",
    difficulty: "Alta",
    featured: false,
    priority: 7,

    variants: [
      "Asilo Politico e Protezione Internazionale",
      "Status Apolide",
      "Motivi Religiosi (Ministri di culto)",
      "Missione (Personale diplomatico)",
    ],
  },

  // ==========================================
  // PAGE 6: RESIDENZA ELETTIVA
  // Wealthy retirees, investors - premium audience
  // ==========================================
  {
    id: "residenza-elettiva",
    slug: "residenza-elettiva",
    category: "permessi-di-soggiorno",
    type: "prima-richiesta",
    title: "Permesso di Soggiorno per Residenza Elettiva",
    shortTitle: "Residenza Elettiva",
    subtitle:
      "Per pensionati e persone con reddito autonomo che vogliono vivere in Italia",
    metaTitle: "Residenza Elettiva Italia Roma | Pensionati Esteri, Rentier",
    metaDescription:
      "Permesso residenza elettiva per pensionati stranieri e persone con reddito autonomo. Vivi in Italia senza lavorare. Consulenza per requisiti economici.",
    keywords: [
      "residenza elettiva italia",
      "pensionati stranieri italia",
      "visto pensionati",
      "vivere italia senza lavorare",
      "requisiti reddito residenza elettiva",
      "retire to italy",
      "elective residence permit",
    ],
    icon: "home",
    duration: "1-2 anni rinnovabile",
    difficulty: "Media",
    featured: true,
    priority: 5,

    variants: [
      "Pensionati stranieri",
      "Persone con reddito da investimenti",
      "Rentier",
    ],
  },

  // ==========================================
  // PAGE 7: PERMESSO UE LUNGO PERIODO
  // The "Holy Grail" - permanent residence
  // ==========================================
  {
    id: "permesso-ue-lungo-periodo",
    slug: "permesso-ue-lungo-periodo",
    category: "permessi-di-soggiorno",
    type: "altre-pratiche",
    title: "Permesso UE per Soggiornanti di Lungo Periodo",
    shortTitle: "Permesso UE Permanente",
    subtitle:
      "Il permesso permanente dopo 5 anni di residenza legale in Italia",
    metaTitle:
      "Permesso UE Lungo Periodo Roma | Permesso Permanente Dopo 5 Anni",
    metaDescription:
      "Ottieni il permesso permanente UE dopo 5 anni in Italia. Nessun rinnovo necessario, massima libertà. Assistenza completa per documenti e procedura.",
    keywords: [
      "permesso ue lungo periodo",
      "permesso permanente italia",
      "carta soggiorno permanente",
      "5 anni italia permesso",
      "permesso illimitato",
      "permesso ue soggiornanti lungo periodo",
      "requisiti permesso permanente",
    ],
    icon: "award",
    duration: "Illimitato",
    difficulty: "Media",
    featured: true,
    priority: 6,

    variants: ["Permesso UE Lungo Periodo"],
  },

  // ==========================================
  // PAGE 8: CONVERSIONE E DUPLICATI
  // Administrative procedures - utility page
  // ==========================================
  {
    id: "conversione-duplicati",
    slug: "conversione-duplicati",
    category: "permessi-di-soggiorno",
    type: "altre-pratiche",
    title: "Conversione e Duplicato Permesso di Soggiorno",
    shortTitle: "Conversione e Duplicati",
    subtitle: "Cambia tipo di permesso o richiedine un duplicato",
    metaTitle:
      "Conversione Permesso Soggiorno Roma | Duplicato per Smarrimento",
    metaDescription:
      "Conversione permesso soggiorno (da studio a lavoro, ecc.) e duplicati per smarrimento/furto. Assistenza rapida per cambio tipo permesso a Roma.",
    keywords: [
      "conversione permesso soggiorno",
      "cambio tipo permesso",
      "da studio a lavoro",
      "duplicato permesso soggiorno",
      "permesso smarrito",
      "permesso rubato",
      "rinnovo conversione",
    ],
    icon: "repeat",
    duration: "2-4 mesi (conversione) o 2-4 settimane (duplicato)",
    difficulty: "Media-Bassa",
    featured: false,
    priority: 8,

    variants: [
      "Conversione Tipo Permesso",
      "Duplicato per Smarrimento",
      "Duplicato per Furto",
      "Duplicato per Deterioramento",
    ],
  },
];

export default permessiClustered;
