// src/config/documentChecklist.js
export const immigrationProcedures = {
  "permesso-soggiorno-rinnovo": {
    title: "Rinnovo Permesso di Soggiorno",
    description: "Documenti necessari per rinnovare il permesso di soggiorno",
    documents: [
      {
        category: "Documenti di Identità",
        items: [
          "Passaporto originale in corso di validità",
          "Fotocopia integrale del passaporto (tutte le pagine)",
          "Permesso di soggiorno originale in scadenza",
          "Fotocopia fronte/retro del permesso di soggiorno"
        ]
      },
      {
        category: "Documenti Amministrativi", 
        items: [
          "Ricevuta versamento di €100,46 (bollettino postale c/c 4028)",
          "Ricevuta versamento di €30,46 (bollettino postale c/c 4027)",
          "Marca da bollo da €16,00",
          "4 foto formato tessera identiche e recenti"
        ]
      },
      {
        category: "Documenti Specifici",
        items: [
          "Certificato di iscrizione anagrafica (residenza)",
          "Contratto di lavoro o lettera del datore di lavoro",
          "Ultima busta paga o CUD",
          "Certificato penale del paese di origine (se richiesto)"
        ]
      }
    ]
  },
  
  "ricongiungimento-familiare": {
    title: "Ricongiungimento Familiare",
    description: "Documenti per il visto di ricongiungimento familiare",
    documents: [
      {
        category: "Documenti del Richiedente in Italia",
        items: [
          "Permesso di soggiorno UE per lungo soggiornanti o di durata almeno 1 anno",
          "Passaporto in corso di validità",
          "Certificato di iscrizione anagrafica",
          "Dichiarazione dei redditi (730 o Unico) dell'ultimo anno",
          "Certificazione dell'alloggio (contratto di locazione o atto di proprietà)"
        ]
      },
      {
        category: "Documenti del Familiare all'Estero",
        items: [
          "Passaporto in corso di validità",
          "Certificato di nascita legalizzato e tradotto",
          "Certificato di matrimonio legalizzato e tradotto (se coniuge)",
          "Certificato penale del paese di origine legalizzato e tradotto",
          "Certificato medico rilasciato dalle autorità sanitarie del paese"
        ]
      },
      {
        category: "Documenti Amministrativi",
        items: [
          "Modulo di domanda compilato e firmato",
          "Ricevuta versamento di €116,00",
          "Foto formato tessera del familiare",
          "Assicurazione sanitaria valida in Italia"
        ]
      }
    ]
  },

  "cittadinanza-italiana": {
    title: "Cittadinanza Italiana",
    description: "Documenti per la richiesta di cittadinanza italiana",
    documents: [
      {
        category: "Documenti di Identità e Soggiorno",
        items: [
          "Passaporto originale in corso di validità",
          "Permesso di soggiorno UE per lungo soggiornanti",
          "Certificato di iscrizione anagrafica continuativa degli ultimi 10 anni",
          "Fotocopia di tutti i permessi di soggiorno avuti in Italia"
        ]
      },
      {
        category: "Documenti Reddituali",
        items: [
          "Dichiarazioni dei redditi degli ultimi 3 anni (730 o Unico)",
          "CUD degli ultimi 3 anni",
          "Estratto conto contributivo INPS",
          "Contratto di lavoro attuale"
        ]
      },
      {
        category: "Certificazioni",
        items: [
          "Certificato penale del paese di origine legalizzato",
          "Certificato di conoscenza della lingua italiana (livello B1)",
          "Atto di nascita legalizzato e tradotto",
          "Certificato di matrimonio legalizzato (se applicabile)",
          "Marca da bollo da €16,00"
        ]
      }
    ]
  },

  "permesso-lavoro": {
    title: "Permesso di Soggiorno per Lavoro",
    description: "Prima richiesta di permesso di soggiorno per motivi di lavoro",
    documents: [
      {
        category: "Documenti di Base",
        items: [
          "Passaporto con visto per lavoro",
          "Fotocopia integrale del passaporto",
          "4 foto formato tessera identiche",
          "Codice fiscale"
        ]
      },
      {
        category: "Documenti di Lavoro",
        items: [
          "Contratto di lavoro originale",
          "Nulla osta al lavoro rilasciato dalla Prefettura",
          "Comunicazione di assunzione (Unilav)",
          "Dichiarazione di ospitalità o contratto di locazione"
        ]
      },
      {
        category: "Pagamenti",
        items: [
          "Ricevuta versamento di €100,46 (c/c 4028)",
          "Ricevuta versamento di €30,46 (c/c 4027)", 
          "Marca da bollo da €16,00",
          "Assicurazione sanitaria o iscrizione SSN"
        ]
      }
    ]
  },

  "carta-soggiorno": {
    title: "Carta di Soggiorno UE",
    description: "Richiesta per la carta di soggiorno UE per lungo soggiornanti",
    documents: [
      {
        category: "Documenti Personali",
        items: [
          "Passaporto in corso di validità",
          "Permesso di soggiorno degli ultimi 5 anni continuativi",
          "Certificato di iscrizione anagrafica degli ultimi 5 anni",
          "4 foto formato tessera recenti"
        ]
      },
      {
        category: "Documenti Reddituali",
        items: [
          "Dichiarazione dei redditi degli ultimi 5 anni",
          "Certificazione redditi non inferiore all'importo annuo dell'assegno sociale",
          "Estratto contributivo INPS degli ultimi 5 anni",
          "Contratto di lavoro o altra fonte di reddito"
        ]
      },
      {
        category: "Test e Certificazioni",
        items: [
          "Test di conoscenza della lingua italiana (livello A2)",
          "Test di conoscenza della cultura civica e della vita civile",
          "Certificato penale del paese di origine",
          "Certificato di soggiorno continuativo in Italia"
        ]
      }
    ]
  }
};

export const generalDocuments = {
  title: "Documenti Sempre Utili",
  description: "Documenti che sono spesso richiesti per qualsiasi pratica",
  items: [
    "Documento di identità valido (passaporto o carta d'identità)",
    "Codice fiscale italiano",
    "Certificato di iscrizione anagrafica (certificato di residenza)",
    "Foto formato tessera recenti (sempre avere alcune di scorta)",
    "Marca da bollo da €16,00",
    "Fotocopia di tutti i documenti originali"
  ]
};