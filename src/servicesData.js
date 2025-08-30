// src/servicesData.js

export const serviceCategories = ["Immigrazione", "CAF & Patronato", "Altri Servizi"];

export const allServices = [
  // --- IMMIGRAZIONE ---
  {
    id: 's1',
    category: "Immigrazione",
    title: "Permesso di Soggiorno",
    description: "Gestiamo con precisione ogni tipo di permesso, assicurando che la tua documentazione sia sempre perfetta e presentata in tempo.",
    practices: [
      "Primo rilascio per lavoro, famiglia o studio",
      "Rinnovo del permesso di soggiorno",
      "Conversione del permesso (es. da studio a lavoro)",
      "Aggiornamento con inserimento figli",
      "Permesso di soggiorno UE per soggiornanti di lungo periodo (Ex Carta di Soggiorno)",
      "Duplicato per smarrimento o furto",
    ]
  },
  {
    id: 's2',
    category: "Immigrazione",
    title: "Cittadinanza Italiana",
    description: "Diventare cittadino è un traguardo di vita. Ti accompagniamo in ogni fase, dal controllo dei requisiti all'invio telematico della domanda.",
    practices: [
      "Domanda di cittadinanza per residenza (Art. 9)",
      "Domanda di cittadinanza per matrimonio (Art. 5)",
      "Controllo e verifica della documentazione necessaria",
      "Invio telematico e gestione della pratica online",
      "Solleciti e monitoraggio dello stato della domanda",
    ]
  },
  {
    id: 's3',
    category: "Immigrazione",
    title: "Ricongiungimento Familiare",
    description: "Riunire la tua famiglia è la nostra priorità. Curiamo l'intera procedura per il Nulla Osta, per farti riabbracciare i tuoi cari senza stress.",
    practices: [
      "Richiesta Nulla Osta per lavoro subordinato o autonomo",
      "Verifica dei requisiti di reddito e alloggio",
      "Coesione familiare per familiari già in Italia",
      "Permesso di soggiorno per motivi familiari",
    ]
  },
  // --- CAF & PATRONATO ---
  {
    id: 's6',
    category: "CAF & Patronato",
    title: "Dichiarazione dei Redditi",
    description: "Ottimizziamo la tua situazione fiscale, assicurandoti ogni detrazione e rimborso a cui hai diritto. Penseremo noi a tutto.",
    practices: [
      "Modello 730 (dipendenti e pensionati)",
      "Modello Redditi Persone Fisiche (Ex Unico)",
      "Calcolo IMU e TASI",
      "Gestione di colf, badanti e baby-sitter",
    ]
  },
  {
    id: 's7',
    category: "CAF & Patronato",
    title: "Modello ISEE",
    description: "Calcoliamo il tuo ISEE in modo rapido e preciso, un documento chiave per accedere a bonus, agevolazioni e prestazioni sociali.",
    practices: [
      "ISEE ordinario, universitario e socio-sanitario",
      "ISEE corrente (in caso di variazioni di reddito)",
      "Consulenza sulle prestazioni collegate all'ISEE",
    ]
  },
  {
    id: 's8',
    category: "CAF & Patronato",
    title: "Sostegni e Indennità",
    description: "Ti aiutiamo a ottenere i sostegni economici a cui hai diritto nei momenti di necessità, come la perdita del lavoro o la maternità.",
    practices: [
      "Domanda di disoccupazione (NASpI)",
      "Assegno Unico e Universale per i figli",
      "Bonus sociali (luce, gas, acqua)",
      "Indennità di maternità e congedo parentale",
    ]
  },
  {
    id: 's9',
    category: "CAF & Patronato",
    title: "Pensioni e Invalidità",
    description: "Pianifichiamo insieme il tuo futuro e tuteliamo i tuoi diritti, gestendo le pratiche per la pensione e il riconoscimento dell'invalidità.",
    practices: [
      "Domanda di pensione di vecchiaia o anticipata",
      "Pensione di reversibilità",
      "Domanda di invalidità civile e accompagnamento",
      "Legge 104/92 per l'assistenza ai familiari",
    ]
  },
  // --- ALTRI SERVIZI ---
  {
    id: 's11',
    category: "Altri Servizi",
    title: "Lavoro Domestico",
    description: "Garantiamo la massima tranquillità a te e a chi ti aiuta in casa, gestendo ogni aspetto del rapporto di lavoro domestico.",
    practices: [
      "Contratto di assunzione per colf, badanti, baby-sitter",
      "Elaborazione buste paga mensili",
      "Calcolo e versamento dei contributi INPS",
      "Gestione del TFR (Trattamento di Fine Rapporto)",
    ]
  },
  {
    id: 's12',
    category: "Altri Servizi",
    title: "Pratiche di Successione",
    description: "Ti offriamo un supporto completo e discreto in un momento delicato, occupandoci di tutte le complesse pratiche burocratiche.",
    practices: [
      "Dichiarazione di successione",
      "Volture catastali degli immobili",
      "Consulenza sulla gestione del patrimonio ereditario",
    ]
  },
  {
    id: 's13',
    category: "Altri Servizi",
    title: "Documenti e Certificati",
    description: "Evita lo stress e le lunghe code agli sportelli pubblici. Richiediamo per te tutti i documenti di cui hai bisogno.",
    practices: [
      "Visure catastali e camerali",
      "Certificati anagrafici (residenza, stato di famiglia)",
      "Contratti di locazione (registrazione e adempimenti)",
    ]
  },
];