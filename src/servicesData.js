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
    title: "Permessi di Soggiorno",
    shortTitle: "Permessi di soggiorno",
    path: "/servizi/permessi-di-soggiorno",
    description:
      "Gestiamo ogni tipo di permesso di soggiorno, dalla prima richiesta ai rinnovi e conversioni. Supporto completo per 25 tipologie: 22 tipi di prima richiesta, rinnovi, conversioni e aggiornamenti.",
    icon: "passport",
    featured: true,
    subservices: [
      // PRIMA RICHIESTA - 22 TIPOLOGIE
      {
        id: "s1-1",
        title: "Prima Richiesta - Lavoro Subordinato",
        path: "/servizi/permessi-di-soggiorno/lavoro-subordinato",
        description:
          "Prima richiesta del permesso di soggiorno per lavoro subordinato. Per cittadini extracomunitari con contratto di lavoro dipendente in Italia.",
        practices: [
          "Verifica contratto di lavoro",
          "Controllo Nulla Osta al Lavoro",
          "Compilazione kit postale",
          "Gestione appuntamento Questura",
          "Assistenza fino al rilascio della card",
        ],
      },
      {
        id: "s1-2",
        title: "Prima Richiesta - Lavoro Autonomo",
        path: "/servizi/permessi-di-soggiorno/lavoro-autonomo",
        description:
          "Prima richiesta per lavoro autonomo (liberi professionisti, artigiani, commercianti). Necessaria partita IVA e attività avviata.",
        practices: [
          "Verifica requisiti per lavoro autonomo",
          "Controllo partita IVA e iscrizione INPS",
          "Documentazione economica richiesta",
          "Compilazione e invio kit",
          "Monitoraggio pratica in Questura",
        ],
      },
      {
        id: "s1-3",
        title: "Prima Richiesta - Motivi Familiari",
        path: "/servizi/permessi-di-soggiorno/famiglia-minori",
        description:
          "Permesso per ricongiungimento familiare o coesione familiare. Per familiari di cittadini italiani o stranieri regolari.",
        practices: [
          "Verifica requisiti familiari",
          "Controllo documenti parentela",
          "Assistenza Nulla Osta (se dall'estero)",
          "Compilazione pratica completa",
          "Gestione documentazione",
        ],
      },
      {
        id: "s1-4",
        title: "Prima Richiesta - Studente",
        path: "/servizi/permessi-di-soggiorno/studio-formazione",
        description:
          "Per studenti stranieri iscritti a università italiane. Necessaria prova di iscrizione universitaria e mezzi economici sufficienti.",
        practices: [
          "Verifica iscrizione università",
          "Controllo mezzi economici sufficienti",
          "Documentazione alloggio",
          "Compilazione kit postale",
          "Assistenza fino al rilascio",
        ],
      },
      {
        id: "s1-4b",
        title: "Prima Richiesta - Alunno",
        description:
          "Per studenti stranieri iscritti a scuole superiori o istituti di formazione. Per minori o maggiorenni in percorsi scolastici.",
        practices: [
          "Verifica iscrizione scuola/istituto",
          "Controllo mezzi economici o tutore",
          "Documentazione alloggio e tutela minori",
          "Compilazione kit postale",
          "Assistenza fino al rilascio",
        ],
      },
      {
        id: "s1-4c",
        title: "Prima Richiesta - Motivi di Studio",
        description:
          "Per altri percorsi formativi, corsi professionali e programmi di studio non universitari o scolastici.",
        practices: [
          "Verifica iscrizione corso formativo",
          "Controllo mezzi economici",
          "Documentazione alloggio",
          "Compilazione kit postale",
          "Assistenza fino al rilascio",
        ],
      },
      {
        id: "s1-5",
        title: "Prima Richiesta - Attesa Occupazione",
        path: "/servizi/permessi-di-soggiorno/lavoro-subordinato",
        description:
          "Per chi ha perso il lavoro e cerca nuova occupazione. Durata massima 12 mesi, richiesti requisiti specifici di residenza.",
        practices: [
          "Verifica requisiti per attesa occupazione",
          "Controllo anni di lavoro precedenti",
          "Documentazione disoccupazione",
          "Iscrizione Centro per l'Impiego",
          "Gestione pratica completa",
        ],
      },
      {
        id: "s1-6",
        title: "Prima Richiesta - Attesa Acquisto Cittadinanza",
        path: "/servizi/permessi-di-soggiorno/protezione-casi-speciali",
        description:
          "Per chi ha presentato domanda di cittadinanza e attende risposta. Permette permanenza durante iter cittadinanza.",
        practices: [
          "Verifica presentazione domanda cittadinanza",
          "Controllo tempistiche domanda",
          "Documentazione iter cittadinanza",
          "Compilazione kit",
          "Monitoraggio stato pratica",
        ],
      },
      {
        id: "s1-7",
        title: "Prima Richiesta - Residenza Elettiva",
        path: "/servizi/permessi-di-soggiorno/residenza-elettiva",
        description:
          "Per stranieri con elevate disponibilità economiche che vogliono risiedere in Italia senza lavorare. Per pensionati o rentier.",
        practices: [
          "Verifica requisiti economici elevati",
          "Documentazione redditi da estero",
          "Prova alloggio adeguato",
          "Assicurazione sanitaria",
          "Gestione pratica completa",
        ],
      },
      {
        id: "s1-8",
        title: "Prima Richiesta - Asilo Politico",
        path: "/servizi/permessi-di-soggiorno/protezione-casi-speciali",
        description:
          "Permesso per richiedenti asilo e titolari di protezione internazionale. Include status di rifugiato e protezione sussidiaria.",
        practices: [
          "Supporto richiesta asilo",
          "Assistenza audizione commissione territoriale",
          "Documentazione paese d'origine",
          "Ricorsi in caso di diniego",
          "Gestione accoglienza",
        ],
      },
      {
        id: "s1-9",
        title: "Prima Richiesta - Status Apolide",
        path: "/servizi/permessi-di-soggiorno/protezione-casi-speciali",
        description:
          "Per persone riconosciute apolidi (senza cittadinanza). Richiede riconoscimento formale dello status.",
        practices: [
          "Procedura riconoscimento apolidia",
          "Documentazione assenza cittadinanza",
          "Assistenza Commissione Territoriale",
          "Gestione pratica permesso",
          "Supporto integrazione",
        ],
      },
      {
        id: "s1-10",
        title: "Prima Richiesta - Per Affidamento",
        path: "/servizi/permessi-di-soggiorno/famiglia-minori",
        description:
          "Per minori stranieri non accompagnati affidati a famiglie o comunità italiane fino al compimento della maggiore età.",
        practices: [
          "Verifica provvedimento affidamento",
          "Documentazione tutore/affidatario",
          "Assistenza minori stranieri",
          "Coordinamento con servizi sociali",
          "Conversione al compimento 18 anni",
        ],
      },
      {
        id: "s1-11",
        title: "Prima Richiesta - Motivi Religiosi",
        path: "/servizi/permessi-di-soggiorno/protezione-casi-speciali",
        description:
          "Per ministri di culto e religiosi. Necessaria attestazione dell'ente religioso riconosciuto in Italia.",
        practices: [
          "Verifica attestazione ente religioso",
          "Controllo riconoscimento confessione",
          "Documentazione attività religiosa",
          "Compilazione kit speciale",
          "Gestione con Questura",
        ],
      },
      {
        id: "s1-12",
        title: "Prima Richiesta - Missione",
        path: "/servizi/permessi-di-soggiorno/protezione-casi-speciali",
        description:
          "Per personale in missione per enti, organizzazioni internazionali o ambasciate. Include cooperanti e diplomatici.",
        practices: [
          "Verifica missione ufficiale",
          "Documentazione ente mittente",
          "Note verbali (se diplomatici)",
          "Assistenza procedura speciale",
          "Coordinamento con Ministero",
        ],
      },
      {
        id: "s1-13",
        title: "Prima Richiesta - Lavoro Stagionale",
        path: "/servizi/permessi-di-soggiorno/lavoro-subordinato",
        description:
          "Per lavoro stagionale (agricoltura, turismo). Durata massima 9 mesi, settori specifici previsti da decreto flussi.",
        practices: [
          "Verifica settore stagionale ammesso",
          "Controllo contratto stagionale",
          "Gestione quote decreto flussi",
          "Compilazione kit postale",
          "Assistenza rientro o conversione",
        ],
      },
      {
        id: "s1-14",
        title: "Prima Richiesta - Casi Particolari Art. 27 TUI",
        path: "/servizi/permessi-di-soggiorno/protezione-casi-speciali",
        description:
          "Permesso per casi speciali previsti dall'art. 27: vittime di violenza, sfruttamento, particolare sfruttamento lavorativo.",
        practices: [
          "Valutazione caso particolare",
          "Documentazione situazione personale",
          "Coordinamento con servizi sociali",
          "Assistenza programmi protezione",
          "Gestione pratica sensibile",
        ],
      },
      {
        id: "s1-15",
        title: "Prima Richiesta - Ricercatore / Lavoro Altamente Qualificato",
        path: "/servizi/permessi-di-soggiorno/lavoro-subordinato",
        description:
          "Per ricercatori universitari e lavoratori altamente qualificati (carta blu UE). Requisiti di titolo di studio e reddito elevati.",
        practices: [
          "Verifica qualifiche elevate",
          "Controllo contratto ricerca/altamente qualificato",
          "Documentazione titoli accademici",
          "Assistenza Carta Blu UE",
          "Gestione pratica speciale",
        ],
      },
      {
        id: "s1-16",
        title: "Prima Richiesta - Tirocinante",
        path: "/servizi/permessi-di-soggiorno/studio-formazione",
        description:
          "Per tirocinanti e stagisti presso aziende italiane. Durata limitata, non può essere convertito in lavoro subordinato.",
        practices: [
          "Verifica convenzione tirocinio",
          "Controllo ente formativo",
          "Documentazione progetto formativo",
          "Assistenza pratica temporanea",
          "Informazioni conversione futura",
        ],
      },
      {
        id: "s1-16b",
        title: "Prima Richiesta - Tirocinio Formazione Professionale",
        path: "/servizi/permessi-di-soggiorno/studio-formazione",
        description:
          "Per tirocini formativi professionali con obiettivi formativi specifici. Percorsi strutturati con enti accreditati.",
        practices: [
          "Verifica programma formativo",
          "Controllo ente accreditato",
          "Documentazione obiettivi formativi",
          "Gestione pratica",
          "Monitoraggio percorso",
        ],
      },
      // Separazione tra tipologie di prima richiesta e procedure
      {
        id: "s1-17",
        title: "Rinnovo Permesso di Soggiorno",
        path: "/servizi/permessi-di-soggiorno/conversione-duplicati",
        description:
          "Rinnovo del permesso prima della scadenza per tutte le tipologie: lavoro, famiglia, studio, attesa occupazione e altri motivi.",
        practices: [
          "Verifica requisiti per rinnovo",
          "Controllo reddito minimo richiesto",
          "Aggiornamento documentazione",
          "Compilazione kit rinnovo",
          "Gestione appuntamento Questura",
          "Assistenza fino al rilascio card rinnovata",
        ],
      },
      {
        id: "s1-18",
        title: "Conversione Permesso di Soggiorno",
        path: "/servizi/permessi-di-soggiorno/conversione-duplicati",
        description:
          "Cambio tipologia del permesso esistente: da studio a lavoro, da subordinato ad autonomo, tra diverse tipologie di lavoro.",
        practices: [
          "Valutazione possibilità conversione",
          "Verifica nuovi requisiti",
          "Documentazione per nuova tipologia",
          "Gestione iter conversione",
          "Assistenza con Questura",
        ],
      },
      {
        id: "s1-19",
        title: "Permesso UE per Lungo Periodo",
        path: "/servizi/permessi-di-soggiorno/permesso-ue-lungo-periodo",
        description:
          "Permesso permanente per chi risiede legalmente da almeno 5 anni in Italia. Maggiore stabilità e diritti.",
        practices: [
          "Verifica 5 anni di residenza legale",
          "Controllo reddito minimo richiesto",
          "Test di lingua italiana livello A2",
          "Certificato penale e carichi pendenti",
          "Pratica completa con documentazione",
          "Assistenza fino al rilascio card permanente",
        ],
      },
      {
        id: "s1-20",
        title: "Aggiornamenti Permesso di Soggiorno",
        path: "/servizi/permessi-di-soggiorno/conversione-duplicati",
        description:
          "Aggiornamenti al permesso esistente: cambio residenza, inserimento figli, aggiornamento dati anagrafici o passaporto.",
        practices: [
          "Inserimento figli minori nel permesso",
          "Cambio indirizzo di residenza",
          "Aggiornamento dati anagrafici",
          "Aggiornamento dati passaporto",
          "Gestione pratica in Questura",
        ],
      },
      {
        id: "s1-21",
        title: "Duplicati Permesso di Soggiorno",
        path: "/servizi/permessi-di-soggiorno/conversione-duplicati",
        description:
          "Richiesta duplicato del permesso in caso di smarrimento, furto o deterioramento della card.",
        practices: [
          "Denuncia smarrimento/furto",
          "Richiesta duplicato in Questura",
          "Documentazione per duplicato",
          "Gestione pratica urgente",
          "Rilascio nuova card",
        ],
      },
      {
        id: "s1-22",
        title: "Conversione da Carta Blu UE di altro Paese",
        description:
          "Conversione in permesso italiano per chi ha Carta Blu rilasciata da altro paese UE e vuole trasferirsi in Italia.",
        practices: [
          "Verifica validità Carta Blu estera",
          "Controllo requisiti per Italia",
          "Documentazione contratto italiano",
          "Gestione conversione cross-border",
          "Assistenza con autorità italiane",
        ],
      },
    ],
  },
  {
    id: "s2",
    category: "Migranti",
    title: "Ricongiungimenti Familiari",
    shortTitle: "Ricongiungimenti",
    path: "/servizi/migranti/ricongiungimenti-familiari",
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
    path: "/servizi/cittadinanza-italiana",
    description:
      "Il traguardo più importante. Ti accompagniamo dall'analisi requisiti all'invio telematico, monitorando ogni fase.",
    icon: "flag",
    featured: true,
    subservices: [
      {
        id: "s3-1",
        title: "Cittadinanza per Residenza (Art. 9)",
        path: "/servizi/cittadinanza/residenza",
        description:
          "Dopo 10 anni di residenza legale in Italia (5 per rifugiati/apolidi).",
        practices: [
          "Verifica requisiti di residenza",
          "Controllo carichi pendenti",
          "Certificato penale",
          "Reddito minimo richiesto",
          "Documentazione completa",
        ],
      },
      {
        id: "s3-2",
        title: "Cittadinanza per Matrimonio (Art. 5)",
        path: "/servizi/cittadinanza/matrimonio",
        description:
          "Per coniugi di cittadini italiani dopo 2 anni di matrimonio (1 anno se figli).",
        practices: [
          "Verifica requisiti matrimoniali",
          "Certificato di matrimonio",
          "Test di lingua italiana B1",
          "Documentazione coniuge italiano",
        ],
      },
      {
        id: "s3-3",
        title: "Gestione Pratica Online",
        path: "/servizi/cittadinanza-italiana",
        description: "Invio telematico e monitoraggio completo della domanda.",
        practices: [
          "Compilazione e invio telematico",
          "Monitoraggio stato pratica",
          "Solleciti e comunicazioni",
          "Assistenza fino al giuramento",
        ],
      },
    ],
  },
  {
    id: "s4",
    category: "Migranti",
    title: "Riconoscimento Titoli di Studio",
    shortTitle: "Riconoscimento titoli studio",
    path: "/servizi/migranti/riconoscimento-titoli-di-studio",
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
    path: "/servizi/migranti/traduzioni-atti",
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
    path: "/servizi/viaggiatori/visti-italia",
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
    path: "/servizi/viaggiatori/mediazione-ambasciate",
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
    path: "/servizi/famiglie/gestione-lavoro-domestico",
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
    path: "/servizi/caf-patronato",
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
    subservices: [
      {
        id: "a1-1",
        title: "Modello 730 e Dichiarazione Redditi",
        path: "/servizi/caf-patronato/730",
        description:
          "Assistenza completa per la tua dichiarazione dei redditi.",
        practices: ["Modello 730", "Redditi PF", "Detrazioni e deduzioni"],
      },
      {
        id: "a1-2",
        title: "Calcolo ISEE",
        path: "/servizi/caf-patronato/isee",
        description:
          "Calcolo dell'Indicatore della Situazione Economica Equivalente.",
        practices: ["DSU", "ISEE Corrente", "ISEE Universitario"],
      },
    ],
  },
  {
    path: "/servizi/altri/successioni",
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
    path: "/servizi/altri/contratti-affitto",
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
    path: "/servizi/altri/consulenza-legale",
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
    path: "/servizi/altri/disbrigo-pratiche",
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
    link: "/servizi/permessi-di-soggiorno",
  },
  {
    title: "Ricongiungimenti",
    description:
      "Riunisci la tua famiglia in Italia. Curiamo l'intera procedura del Nulla Osta.",
    icon: "family",
    link: "/servizi/migranti/ricongiungimenti-familiari",
  },
  {
    title: "Cittadinanza Italiana",
    description:
      "Il grande traguardo. Ti accompagniamo dall'analisi requisiti all'ottenimento.",
    icon: "flag",
    link: "/servizi/cittadinanza-italiana",
  },
  {
    title: "Riconoscimento Titoli di Studio",
    description:
      "Valorizza la tua formazione estera. Gestiamo equipollenze e dichiarazioni di valore.",
    icon: "education",
    link: "/servizi/migranti/riconoscimento-titoli-di-studio",
  },
  {
    title: "Traduzioni Atti",
    description:
      "Traduzioni certificate e asseverate con valore legale per tutti gli enti italiani.",
    icon: "translate",
    link: "/servizi/migranti/traduzioni-atti",
  },
  {
    title: "Visti",
    description:
      "Assistenza per visti turistici, di lavoro, studio o famiglia con preparazione documentazione.",
    icon: "visa",
    link: "/servizi/viaggiatori/visti-italia",
  },
  {
    title: "Mediazione con Ambasciate",
    description:
      "Facciamo da ponte con le ambasciate per accelerare le tue pratiche consolari.",
    icon: "embassy",
    link: "/servizi/viaggiatori/mediazione-ambasciate",
  },
  {
    title: "Gestione Lavoro Domestico",
    description:
      "Assunzioni, buste paga, CUD e TFR per colf, badanti e baby-sitter. Tutto in regola.",
    icon: "home",
    link: "/servizi/famiglie/gestione-lavoro-domestico",
  },
  {
    title: "CAF e Patronato",
    description:
      "730, ISEE, bonus, pensioni e tutti i servizi fiscali e previdenziali.",
    icon: "calculator",
    link: "/servizi/caf-patronato",
  },
  {
    title: "Successioni",
    description:
      "Assistenza completa nelle pratiche successorie con massima sensibilità.",
    icon: "inheritance",
    link: "/servizi/altri/successioni",
  },
  {
    title: "Contratti di Affitto",
    description: "Redazione e registrazione contratti di locazione conformi.",
    icon: "contract",
    link: "/servizi/altri/contratti-affitto",
  },
  {
    title: "Consulenza Legale",
    description:
      "Orientamento legale per immigrazione, lavoro e diritto civile.",
    icon: "legal",
    link: "/servizi/altri/consulenza-legale",
  },
  {
    title: "Pratiche presso Enti Locali",
    description:
      "Ti rappresentiamo presso Comune, INPS, Agenzia Entrate e altri enti.",
    icon: "government",
    link: "/servizi/altri/disbrigo-pratiche",
  },
];
