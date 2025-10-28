// src/servicesData.js

export const serviceCategories = [
  "Migranti",
  "Viaggiatori",
  "Famiglie",
  "Altri Servizi",
];

export const allServices = [
  // MIGRANTI
  {
    id: "s1",
    category: "Migranti",
    title: "Permessi di Soggiorno, Art. 31",
    shortTitle: "Permessi di soggiorno, art. 31",
    description:
      "Gestiamo ogni tipo di permesso di soggiorno secondo l'art. 31, dalla prima richiesta ai rinnovi e conversioni.",
    icon: "passport",
    featured: true,
    subservices: [
      {
        id: "s1-1",
        title: "Primo Rilascio",
        description: "Prima richiesta del permesso di soggiorno per lavoro, famiglia, studio o altri motivi.",
        practices: [
          "Permesso per lavoro subordinato",
          "Permesso per lavoro autonomo",
          "Permesso per motivi familiari",
          "Permesso per studio",
          "Permesso per attesa occupazione",
        ]
      },
      {
        id: "s1-2",
        title: "Rinnovo Permesso",
        description: "Rinnovo del permesso di soggiorno prima della scadenza.",
        practices: [
          "Rinnovo lavoro subordinato",
          "Rinnovo motivi familiari",
          "Rinnovo studio",
          "Verifica requisiti di reddito",
          "Gestione documentazione completa",
        ]
      },
      {
        id: "s1-3",
        title: "Conversione Permesso",
        description: "Cambio tipologia del permesso di soggiorno esistente.",
        practices: [
          "Da studio a lavoro",
          "Da lavoro subordinato ad autonomo",
          "Da motivi familiari a lavoro",
          "Cambio datore di lavoro",
        ]
      },
      {
        id: "s1-4",
        title: "Permesso UE Lungo Periodo",
        description: "Permesso permanente per chi risiede da almeno 5 anni in Italia.",
        practices: [
          "Verifica requisiti di residenza",
          "Controllo reddito minimo",
          "Test di lingua italiana A2",
          "Pratica completa con documentazione",
        ]
      },
      {
        id: "s1-5",
        title: "Aggiornamenti e Duplicati",
        description: "Modifiche al permesso esistente e duplicati per smarrimento.",
        practices: [
          "Inserimento figli minori",
          "Cambio indirizzo o dati anagrafici",
          "Duplicato per smarrimento o furto",
          "Aggiornamento dati passaporto",
        ]
      },
    ],
  },
  {
    id: "s2",
    category: "Migranti",
    title: "Ricongiungimenti Familiari",
    shortTitle: "Ricongiungimenti",
    description:
      "Riunire la tua famiglia in Italia. Curiamo l'intera procedura del Nulla Osta, verifiche requisiti e gestione pratica completa.",
    icon: "family",
    featured: true,
    practices: [
      "Richiesta Nulla Osta per ricongiungimento",
      "Verifica requisiti di reddito e alloggio",
      "Coesione familiare per familiari già in Italia",
      "Permesso di soggiorno per motivi familiari",
      "Assistenza documenti dall'estero",
    ],
  },
  {
    id: "s3",
    category: "Migranti",
    title: "Cittadinanza Italiana",
    shortTitle: "Cittadinanza italiana",
    description:
      "Il traguardo più importante. Ti accompagniamo dall'analisi requisiti all'invio telematico, monitorando ogni fase.",
    icon: "flag",
    featured: true,
    subservices: [
      {
        id: "s3-1",
        title: "Cittadinanza per Residenza (Art. 9)",
        description: "Dopo 10 anni di residenza legale in Italia (5 per rifugiati/apolidi).",
        practices: [
          "Verifica requisiti di residenza",
          "Controllo carichi pendenti",
          "Certificato penale",
          "Reddito minimo richiesto",
          "Documentazione completa",
        ]
      },
      {
        id: "s3-2",
        title: "Cittadinanza per Matrimonio (Art. 5)",
        description: "Per coniugi di cittadini italiani dopo 2 anni di matrimonio (1 anno se figli).",
        practices: [
          "Verifica requisiti matrimoniali",
          "Certificato di matrimonio",
          "Test di lingua italiana B1",
          "Documentazione coniuge italiano",
        ]
      },
      {
        id: "s3-3",
        title: "Gestione Pratica Online",
        description: "Invio telematico e monitoraggio completo della domanda.",
        practices: [
          "Compilazione e invio telematico",
          "Monitoraggio stato pratica",
          "Solleciti e comunicazioni",
          "Assistenza fino al giuramento",
        ]
      },
    ],
  },
  {
    id: "s4",
    category: "Migranti",
    title: "Riconoscimento Titoli di Studio",
    shortTitle: "Riconoscimento titoli studio",
    description:
      "Valorizza la tua formazione estera in Italia. Gestiamo il riconoscimento e l'equipollenza dei tuoi titoli di studio.",
    icon: "education",
    practices: [
      "Dichiarazione di valore titoli esteri",
      "Equipollenza diplomi e lauree",
      "Traduzioni giurate certificati",
      "Legalizzazione e apostille",
      "Iscrizione albi professionali",
    ],
  },
  {
    id: "s5",
    category: "Migranti",
    title: "Traduzioni Atti",
    shortTitle: "Traduzioni atti",
    description:
      "Traduzioni certificate e asseverate di documenti in qualsiasi lingua, con valore legale per tutti gli enti italiani.",
    icon: "translate",
    practices: [
      "Traduzioni giurate e asseverate",
      "Certificati di nascita e matrimonio",
      "Diplomi e certificati accademici",
      "Contratti e documenti legali",
      "Legalizzazione presso consolati",
    ],
  },
  // VIAGGIATORI
  {
    id: "v1",
    category: "Viaggiatori",
    title: "Visti per l'Italia",
    shortTitle: "Visti",
    description:
      "Assistenza completa per l'ottenimento di visti per turismo, lavoro, studio o famiglia. Prepariamo la documentazione.",
    icon: "visa",
    practices: [
      "Visto turistico Schengen",
      "Visto per lavoro subordinato",
      "Visto per studio e ricerca",
      "Visto per ricongiungimento familiare",
      "Preparazione documentazione completa",
      "Prenotazione appuntamenti consolari",
    ],
  },
  {
    id: "v2",
    category: "Viaggiatori",
    title: "Mediazione con Ambasciate",
    shortTitle: "Mediazione con ambasciate",
    description:
      "Facciamo da ponte tra te e le ambasciate, gestendo comunicazioni, solleciti e verifiche per accelerare le pratiche.",
    icon: "embassy",
    practices: [
      "Comunicazioni con uffici consolari",
      "Solleciti pratiche in sospeso",
      "Verifica stato domande",
      "Assistenza appuntamenti",
      "Supporto documentazione consolare",
    ],
  },
  // FAMIGLIE
  {
    id: "f1",
    category: "Famiglie",
    title: "Gestione Contratti Lavoro Domestico",
    shortTitle:
      "Gestione contratti lavoro domestico (assunzione, buste paga, CUD e TFR)",
    description:
      "Tutto per il tuo personale domestico: assunzioni regolari, buste paga mensili, CUD, calcolo TFR e gestione completa.",
    icon: "home",
    practices: [
      "Assunzione colf, badanti e baby-sitter",
      "Elaborazione buste paga mensili",
      "Gestione contributi INPS",
      "CUD annuale e certificazioni",
      "Calcolo e liquidazione TFR",
      "Cessazione rapporto di lavoro",
    ],
  },
  // ALTRI SERVIZI
  {
    id: "a1",
    category: "Altri Servizi",
    title: "CAF e Patronato",
    shortTitle: "CAF e patronato",
    description:
      "Dichiarazioni dei redditi, ISEE, bonus, pensioni e tutti i servizi fiscali e previdenziali per tutelare i tuoi diritti.",
    icon: "calculator",
    practices: [
      "Modello 730 e Redditi PF",
      "Calcolo ISEE e DSU",
      "Assegno Unico Universale",
      "Domanda disoccupazione NASpI",
      "Pensioni di vecchiaia e reversibilità",
      "Invalidità civile e Legge 104",
    ],
  },
  {
    id: "a2",
    category: "Altri Servizi",
    title: "Successioni",
    shortTitle: "Successioni",
    description:
      "Assistenza completa nelle pratiche successorie, dalla dichiarazione alla divisione ereditaria, con massima sensibilità.",
    icon: "inheritance",
    practices: [
      "Dichiarazione di successione",
      "Divisione ereditaria",
      "Volture catastali",
      "Testamenti e disposizioni",
      "Rinunce all'eredità",
    ],
  },
  {
    id: "a3",
    category: "Altri Servizi",
    title: "Contratti di Affitto",
    shortTitle: "Contratti affitto",
    description:
      "Redazione e registrazione contratti di locazione conformi alla legge, con tutela per proprietari e inquilini.",
    icon: "contract",
    practices: [
      "Contratti a canone libero (4+4)",
      "Contratti a canone concordato (3+2)",
      "Contratti transitori",
      "Registrazione telematica",
      "Cessioni e subentri",
      "Disdette e risoluzioni",
    ],
  },
  {
    id: "a4",
    category: "Altri Servizi",
    title: "Consulenza Legale",
    shortTitle: "Consulenza legale",
    description:
      "Orientamento legale per questioni di immigrazione, lavoro e diritto civile. Ti indirizziamo verso le soluzioni più efficaci.",
    icon: "legal",
    practices: [
      "Consulenza diritto dell'immigrazione",
      "Consulenza diritto del lavoro",
      "Orientamento legale civile",
      "Ricorsi amministrativi",
      "Mediazione controversie",
    ],
  },
  {
    id: "a5",
    category: "Altri Servizi",
    title: "Disbrigo Pratiche presso Enti Locali",
    shortTitle: "Disbrigo pratiche presso gli enti locali",
    description:
      "Ti rappresentiamo presso Comune, INPS, Agenzia delle Entrate e altri enti, risparmiandoti code e perdite di tempo.",
    icon: "government",
    practices: [
      "Iscrizione anagrafica e residenza",
      "Certificati anagrafici",
      "Pratiche INPS e INAIL",
      "Agenzia delle Entrate",
      "Questura e Prefettura",
      "Sportello Unico Immigrazione",
    ],
  },
];

export const homePageServices = [
  {
    title: "Permessi di Soggiorno",
    description:
      "Primo rilascio, rinnovi, conversioni. Gestiamo ogni tipo di permesso secondo l'art. 31.",
    icon: "passport",
    link: "/servizi#migranti",
  },
  {
    title: "Ricongiungimenti",
    description:
      "Riunisci la tua famiglia in Italia. Curiamo l'intera procedura del Nulla Osta.",
    icon: "family",
    link: "/servizi#migranti",
  },
  {
    title: "Cittadinanza Italiana",
    description:
      "Il grande traguardo. Ti accompagniamo dall'analisi requisiti all'ottenimento.",
    icon: "flag",
    link: "/servizi#migranti",
  },
  {
    title: "Riconoscimento Titoli di Studio",
    description:
      "Valorizza la tua formazione estera. Gestiamo equipollenze e dichiarazioni di valore.",
    icon: "education",
    link: "/servizi#migranti",
  },
  {
    title: "Traduzioni Atti",
    description:
      "Traduzioni certificate e asseverate con valore legale per tutti gli enti italiani.",
    icon: "translate",
    link: "/servizi#migranti",
  },
  {
    title: "Visti",
    description:
      "Assistenza per visti turistici, di lavoro, studio o famiglia con preparazione documentazione.",
    icon: "visa",
    link: "/servizi#viaggiatori",
  },
  {
    title: "Mediazione con Ambasciate",
    description:
      "Facciamo da ponte con le ambasciate per accelerare le tue pratiche consolari.",
    icon: "embassy",
    link: "/servizi#viaggiatori",
  },
  {
    title: "Gestione Lavoro Domestico",
    description:
      "Assunzioni, buste paga, CUD e TFR per colf, badanti e baby-sitter. Tutto in regola.",
    icon: "home",
    link: "/servizi#famiglie",
  },
  {
    title: "CAF e Patronato",
    description:
      "730, ISEE, bonus, pensioni e tutti i servizi fiscali e previdenziali.",
    icon: "calculator",
    link: "/servizi#altri-servizi",
  },
  {
    title: "Successioni",
    description:
      "Assistenza completa nelle pratiche successorie con massima sensibilità.",
    icon: "inheritance",
    link: "/servizi#altri-servizi",
  },
  {
    title: "Contratti di Affitto",
    description: "Redazione e registrazione contratti di locazione conformi.",
    icon: "contract",
    link: "/servizi#altri-servizi",
  },
  {
    title: "Consulenza Legale",
    description:
      "Orientamento legale per immigrazione, lavoro e diritto civile.",
    icon: "legal",
    link: "/servizi#altri-servizi",
  },
  {
    title: "Pratiche presso Enti Locali",
    description:
      "Ti rappresentiamo presso Comune, INPS, Agenzia Entrate e altri enti.",
    icon: "government",
    link: "/servizi#altri-servizi",
  },
];
