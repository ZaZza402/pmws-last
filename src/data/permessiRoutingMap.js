// src/data/permessiRoutingMap.js
// Maps individual permit slugs to their clustered page + anchor

export const permessiRoutingMap = {
  // LAVORO SUBORDINATO CLUSTER
  "lavoro-subordinato": {
    clusterPage: "lavoro-subordinato",
    anchor: "lavoro-subordinato-standard",
    label: "Lavoro Subordinato Standard",
  },
  "lavoro-stagionale": {
    clusterPage: "lavoro-subordinato",
    anchor: "lavoro-stagionale",
    label: "Lavoro Stagionale",
  },
  "attesa-occupazione": {
    clusterPage: "lavoro-subordinato",
    anchor: "attesa-occupazione",
    label: "Attesa Occupazione",
  },
  "casi-particolari-art27": {
    clusterPage: "lavoro-subordinato",
    anchor: "casi-particolari",
    label: "Casi Particolari Art. 27",
  },
  "casi-particolari": {
    clusterPage: "lavoro-subordinato",
    anchor: "casi-particolari",
    label: "Casi Particolari Art. 27",
  },

  // LAVORO AUTONOMO (standalone)
  "lavoro-autonomo": {
    clusterPage: "lavoro-autonomo",
    anchor: "lavoro-autonomo",
    label: "Lavoro Autonomo",
  },

  // STUDIO E FORMAZIONE CLUSTER
  studente: {
    clusterPage: "studio-formazione",
    anchor: "studente",
    label: "Studenti Universitari",
  },
  alunno: {
    clusterPage: "studio-formazione",
    anchor: "alunno",
    label: "Alunni (Scuole Superiori)",
  },
  "motivi-studio": {
    clusterPage: "studio-formazione",
    anchor: "motivi-studio",
    label: "Motivi di Studio",
  },
  "tirocinio-formazione": {
    clusterPage: "studio-formazione",
    anchor: "tirocinio-formazione",
    label: "Tirocinio e Formazione Professionale",
  },
  tirocinante: {
    clusterPage: "studio-formazione",
    anchor: "tirocinante",
    label: "Tirocinanti (Stage)",
  },
  ricercatore: {
    clusterPage: "studio-formazione",
    anchor: "ricercatore",
    label: "Ricercatori",
  },

  // FAMIGLIA E MINORI CLUSTER
  "motivi-familiari": {
    clusterPage: "famiglia-minori",
    anchor: "motivi-familiari",
    label: "Motivi Familiari",
  },
  affidamento: {
    clusterPage: "famiglia-minori",
    anchor: "affidamento",
    label: "Affidamento Minori",
  },
  "attesa-cittadinanza": {
    clusterPage: "famiglia-minori",
    anchor: "attesa-cittadinanza",
    label: "Attesa Cittadinanza",
  },

  // RESIDENZA ELETTIVA (standalone)
  "residenza-elettiva": {
    clusterPage: "residenza-elettiva",
    anchor: "residenza-elettiva",
    label: "Residenza Elettiva",
  },

  // PROTEZIONE E CASI SPECIALI CLUSTER
  "asilo-politico": {
    clusterPage: "protezione-casi-speciali",
    anchor: "asilo-politico",
    label: "Asilo Politico",
  },
  "status-apolide": {
    clusterPage: "protezione-casi-speciali",
    anchor: "status-apolide",
    label: "Status Apolide",
  },
  "motivi-religiosi": {
    clusterPage: "protezione-casi-speciali",
    anchor: "motivi-religiosi",
    label: "Motivi Religiosi",
  },
  missione: {
    clusterPage: "protezione-casi-speciali",
    anchor: "missione",
    label: "Missione",
  },

  // PERMESSO UE (standalone)
  "permesso-ue-lungo-periodo": {
    clusterPage: "permesso-ue-lungo-periodo",
    anchor: "permesso-ue",
    label: "Permesso UE Lungo Periodo",
  },

  // CONVERSIONE E DUPLICATI CLUSTER
  conversione: {
    clusterPage: "conversione-duplicati",
    anchor: "conversione",
    label: "Conversione Permesso",
  },
  duplicati: {
    clusterPage: "conversione-duplicati",
    anchor: "duplicati",
    label: "Duplicato Permesso",
  },
};

// Helper function to get cluster route with anchor
export const getClusterRoute = (slug) => {
  const mapping = permessiRoutingMap[slug];
  if (!mapping) return null;

  return {
    path: `/servizi/permessi-di-soggiorno/${mapping.clusterPage}`,
    fullPath: `/servizi/permessi-di-soggiorno/${mapping.clusterPage}#${mapping.anchor}`,
    anchor: mapping.anchor,
    label: mapping.label,
  };
};

export default permessiRoutingMap;
