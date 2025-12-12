// src/pages/migranti/ClusteredPermessoPage.jsx
// Displays clustered permit information with anchor sections

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FileText, CheckCircle, Clock, Euro, AlertCircle } from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import WhatsAppPopup from "../../components/WhatsAppPopup";
import { permessiClustered } from "../../data/permessiClustered";
import enhancedPermessiServices from "../../data/rich-content";
import SimpleMarkdown from "../../components/SimpleMarkdown";
import "./ClusteredPermessoPage.css";

// Helper function to render variant-specific sections
const renderVariantSections = (service, cluster) => {
  // Different content based on cluster type
  const variantSections = {
    "lavoro-subordinato": [
      {
        id: "lavoro-subordinato-standard",
        title: "Lavoro Subordinato Standard",
        description:
          "Per chi ha un contratto di lavoro dipendente a tempo determinato o indeterminato.",
        specifics: [
          "Contratto di lavoro firmato",
          "Nulla osta al lavoro (se richiesto)",
          "Busta paga o dichiarazione del datore",
        ],
      },
      {
        id: "lavoro-stagionale",
        title: "Lavoro Stagionale",
        description:
          "Per lavori agricoli o turistici con durata massima di 9 mesi.",
        specifics: [
          "Contratto stagionale specifico",
          "Dichiarazione del datore di lavoro",
          "Validità massima 9 mesi",
        ],
      },
      {
        id: "attesa-occupazione",
        title: "Attesa Occupazione",
        description:
          "Per chi cerca lavoro dopo la scadenza di un precedente permesso.",
        specifics: [
          "Precedente permesso scaduto",
          "Iscrizione centro per l'impiego",
          "Durata minima 12 mesi (Art. 22 TUI)",
        ],
      },
      {
        id: "casi-particolari",
        title: "Casi Particolari Art. 27",
        description:
          "Per lavoratori altamente qualificati fuori quota: dirigenti, traduttori, infermieri, professori, marittimi, trasferimenti intra-aziendali.",
        specifics: [
          "Contratto di lavoro qualificato",
          "Documentazione competenze professionali",
          "Fuori dai limiti delle quote annuali",
          "Valutazione caso per caso dalla Questura",
        ],
      },
    ],
    "studio-formazione": [
      {
        id: "studente",
        title: "Studenti Universitari",
        description:
          "Per chi frequenta università, accademie o istituti superiori.",
        specifics: [
          "Lettera di accettazione università",
          "Ricevuta pagamento tasse",
          "Prova mezzi economici (~€7.000/anno - Assegno Sociale 2025)",
          "Lavoro part-time fino a 20h/settimana",
        ],
      },
      {
        id: "alunno",
        title: "Alunni (Scuole Superiori)",
        description: "Per minori che frequentano scuole secondarie.",
        specifics: [
          "Iscrizione scuola superiore",
          "Tutore legale in Italia",
          "Autorizzazione genitori",
        ],
      },
      {
        id: "tirocinante",
        title: "Tirocinanti e Stage",
        description: "Per tirocini formativi presso aziende italiane.",
        specifics: [
          "Convenzione tirocinio",
          "Progetto formativo",
          "Assicurazione INAIL",
          "Durata massima 12 mesi",
        ],
      },
      {
        id: "ricercatore",
        title: "Ricercatori",
        description:
          "Per attività di ricerca presso università o enti certificati.",
        specifics: [
          "Accordo di accoglienza",
          "Ente di ricerca certificato",
          "Progetto di ricerca approvato",
        ],
      },
    ],
    "famiglia-minori": [
      {
        id: "motivi-familiari",
        title: "Ricongiungimento Familiare",
        description:
          "Per ricongiungersi con familiare cittadino italiano o straniero regolare.",
        specifics: [
          "Nulla osta ricongiungimento",
          "Certificato di stato civile",
          "Prova alloggio idoneo",
          "Reddito minimo richiesto",
        ],
      },
      {
        id: "affidamento",
        title: "Affidamento Minori",
        description: "Per minori stranieri affidati a cittadini italiani.",
        specifics: [
          "Decreto del tribunale",
          "Documentazione affidamento",
          "Tutore con requisiti",
        ],
      },
      {
        id: "attesa-cittadinanza",
        title: "Attesa Cittadinanza",
        description:
          "Per chi ha già presentato domanda di cittadinanza italiana.",
        specifics: [
          "Ricevuta domanda cittadinanza",
          "Permesso precedente",
          "Valido fino a decisione",
        ],
      },
    ],
    "lavoro-autonomo": [
      {
        id: "lavoro-autonomo-imprenditore",
        title: "Lavoro Autonomo - Imprenditore",
        description:
          "Per chi intende avviare un'attività imprenditoriale in Italia.",
        specifics: [
          "Nulla osta per lavoro autonomo",
          "Business plan dettagliato",
          "Prova disponibilità finanziaria",
          "Iscrizione CCIAA se richiesta",
          "Polizza assicurativa",
        ],
      },
      {
        id: "professionista",
        title: "Professionista Autonomo",
        description:
          "Per liberi professionisti con partita IVA (consulenti, architetti, ingegneri).",
        specifics: [
          "Apertura Partita IVA",
          "Iscrizione ordine professionale (se applicabile)",
          "Contratti o lettere di incarico",
          "Prova competenze professionali",
        ],
      },
      {
        id: "artigiano",
        title: "Artigiano",
        description: "Per chi svolge attività artigianale iscritta all'albo.",
        specifics: [
          "Iscrizione albo artigiani",
          "Prova competenze tecniche",
          "Laboratorio/sede operativa",
          "Attrezzature necessarie",
        ],
      },
    ],
    "residenza-elettiva": [
      {
        id: "pensionato",
        title: "Residenza Elettiva - Pensionati",
        description:
          "Per pensionati stranieri che vogliono risiedere in Italia senza lavorare.",
        specifics: [
          "Reddito da pensione: minimo €31.000/anno",
          "Certificato pensione paese di origine",
          "Alloggio idoneo in proprietà o locazione",
          "Assicurazione sanitaria completa",
          "Divieto di svolgere attività lavorativa",
        ],
      },
      {
        id: "rentier",
        title: "Residenza Elettiva - Rentier",
        description: "Per chi dispone di redditi da investimenti o patrimonio.",
        specifics: [
          "Reddito da investimenti/patrimonio: €31.000/anno minimo",
          "Certificati bancari e patrimoniali",
          "Alloggio idoneo",
          "Assicurazione sanitaria",
          "Nessuna attività lavorativa consentita",
        ],
      },
    ],
    "protezione-casi-speciali": [
      {
        id: "asilo",
        title: "Protezione Internazionale - Asilo",
        description:
          "Per chi fugge da persecuzioni e chiede protezione in Italia.",
        specifics: [
          "Domanda di asilo alla Questura",
          "Audizione presso Commissione Territoriale",
          "Documentazione persecuzione (se disponibile)",
          "Colloquio personale",
          "Durata permesso: fino a decisione finale",
        ],
      },
      {
        id: "apolide",
        title: "Permesso per Apolidia",
        description:
          "Per persone senza cittadinanza riconosciuta da alcuno Stato.",
        specifics: [
          "Dichiarazione di apolidia",
          "Prova assenza cittadinanza",
          "Documentazione storia personale",
          "Riconoscimento status apolide",
          "Permesso valido 5 anni una volta riconosciuto",
        ],
      },
      {
        id: "religioso",
        title: "Motivi Religiosi",
        description: "Per ministri di culto e membri di ordini religiosi.",
        specifics: [
          "Lettera ente religioso riconosciuto",
          "Prova attività religiosa",
          "Sostentamento garantito dall'ente",
          "Alloggio presso comunità",
        ],
      },
      {
        id: "missione",
        title: "Missione",
        description:
          "Per chi svolge missioni religiose, umanitarie o diplomatiche.",
        specifics: [
          "Lettera organizzazione inviante",
          "Progetto missione",
          "Copertura economica",
          "Durata legata alla missione",
        ],
      },
    ],
    "permesso-ue-lungo-periodo": [
      {
        id: "ue-lungo-periodo",
        title: "Permesso UE per Soggiornanti di Lungo Periodo",
        description:
          "Il permesso permanente dopo 5 anni di residenza legale continuativa in Italia.",
        specifics: [
          "Residenza legale continuativa: 5 anni",
          "Reddito minimo: Pari all'Assegno Sociale (~€7.000/anno + 50% per familiari)",
          "Alloggio idoneo",
          "Test di conoscenza lingua italiana (livello A2)",
          "Assenza condanne penali",
          "Assenza pericolosità sociale",
          "Validità: permanente (rinnovo carta ogni 10 anni)",
        ],
      },
      {
        id: "benefici-ue-lungo",
        title: "Benefici e Diritti",
        description:
          "I vantaggi del permesso di lungo periodo rispetto ad altri permessi.",
        specifics: [
          "Permesso permanente (no rinnovi annuali)",
          "Libera circolazione in UE (max 3 mesi)",
          "Accesso a tutti i servizi pubblici",
          "Diritto ricongiungimento familiare semplificato",
          "Possibilità di lavorare senza autorizzazione",
          "Mantiene validità anche con assenze fino a 6 anni (12 mesi consecutivi)",
        ],
      },
    ],
    "conversione-duplicati": [
      {
        id: "conversione",
        title: "Conversione Permesso di Soggiorno",
        description:
          "Passaggio da un tipo di permesso a un altro (es. studio → lavoro).",
        specifics: [
          "Conversione studio → lavoro: contratto e nulla osta",
          "Conversione famiglia → lavoro: contratto valido",
          "Conversione turismo → studio: iscrizione università",
          "Rispetto requisiti nuovo permesso",
          "Domanda prima della scadenza permesso attuale",
        ],
      },
      {
        id: "duplicato",
        title: "Duplicato Permesso di Soggiorno",
        description: "Per sostituire permesso smarrito, rubato o deteriorato.",
        specifics: [
          "Denuncia di smarrimento/furto (se applicabile)",
          "Foto formato tessera",
          "Marca da bollo €16",
          "Copia permesso precedente (se disponibile)",
          "Pagamento contributo: €30,46",
        ],
      },
    ],
  };

  const sections = variantSections[cluster] || [];

  return sections.map((section, index) => (
    <AnimateOnScroll
      key={section.id}
      animation="fade-up"
      delay={150 + index * 50}
    >
      <section className="variant-section" id={section.id}>
        <div className="variant-header">
          <h2 className="variant-title">{section.title}</h2>
          <p className="variant-description">{section.description}</p>
        </div>
        <div className="variant-specifics">
          <h3>Documenti Specifici</h3>
          <ul>
            {section.specifics.map((spec, i) => (
              <li key={i}>
                <CheckCircle size={16} />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </AnimateOnScroll>
  ));
};

const ClusteredPermessoPage = ({ cluster }) => {
  const location = useLocation();
  const service = permessiClustered.find((s) => s.slug === cluster);
  const enhancedService = enhancedPermessiServices.find(
    (s) => s.slug === cluster
  );

  useEffect(() => {
    // Handle anchor scrolling and highlighting
    if (location.hash) {
      const anchor = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          element.classList.add("highlight-section");
          setTimeout(() => {
            element.classList.remove("highlight-section");
          }, 3000);
        }
      }, 100);
    }
  }, [location]);

  if (!service) {
    return <div>Servizio non trovato</div>;
  }

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Servizi", path: "/servizi" },
    { label: "Permessi di Soggiorno", path: "/servizi/permessi-di-soggiorno" },
    { label: service.title },
  ];

  return (
    <div className="clustered-page">
      {/* Dynamic SEO Meta Tags */}
      <Helmet>
        <title>
          {enhancedService?.metaTitle || `${service.title} | PuntoMigrare Roma`}
        </title>
        <meta
          name="description"
          content={
            enhancedService?.metaDescription ||
            `Guida completa per ${service.title.toLowerCase()}. Requisiti, costi e documenti per ${service.variants.join(
              ", "
            )}. Assistenza professionale a Roma.`
          }
        />
        <link
          rel="canonical"
          href={`https://puntomigrare.it/servizi/permessi-di-soggiorno/${cluster}`}
        />

        {/* Schema.org Structured Data for Google Rich Snippets */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            url: `https://puntomigrare.it/servizi/permessi-di-soggiorno/${cluster}`,
            provider: {
              "@type": "LocalBusiness",
              name: "PuntoMigrare",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Via del Fuoco Sacro, 97",
                addressLocality: "Roma",
                postalCode: "00133",
                addressCountry: "IT",
              },
              telephone: "+39-345-683-9875",
            },
            description: service.subtitle,
            areaServed: "Roma",
            serviceType: "Immigration Consulting",
          })}
        </script>
      </Helmet>

      <Breadcrumb items={breadcrumbItems} />

      <div className="clustered-container">
        {/* Hero Header */}
        <AnimateOnScroll animation="fade-up">
          <header className="clustered-hero">
            <div className="clustered-hero__badge">
              <FileText size={20} />
              <span>Guida Completa</span>
            </div>
            <h1 className="clustered-hero__title">{service.title}</h1>
            <p className="clustered-hero__subtitle">{service.subtitle}</p>
            <div className="clustered-hero__meta">
              <div className="meta-item">
                <Clock size={16} />
                <span>{service.duration}</span>
              </div>
              <div className="meta-item">
                <AlertCircle size={16} />
                <span>Difficoltà: {service.difficulty}</span>
              </div>
            </div>
          </header>
        </AnimateOnScroll>

        {/* Main Content */}
        <div className="clustered-content">
          <AnimateOnScroll animation="fade-up" delay={100}>
            <section className="content-section">
              <h2 className="section-title">Cosa Copre Questa Guida</h2>
              <p className="section-intro">
                Questa pagina raccoglie tutte le informazioni su{" "}
                <strong>{service.variants.length} tipologie correlate</strong>{" "}
                di permesso. Non dovrai più navigare tra pagine simili: qui
                trovi tutto.
              </p>
              <div className="variants-grid">
                {service.variants.map((variant, index) => (
                  <div key={index} className="variant-card">
                    <CheckCircle size={20} className="variant-icon" />
                    <span>{variant}</span>
                  </div>
                ))}
              </div>
            </section>
          </AnimateOnScroll>

          {/* Individual Variant Sections */}
          {renderVariantSections(service, cluster)}

          {/* Enhanced Content (Rich Text) */}
          {enhancedService && enhancedService.longDescription && (
            <section
              className="content-section enhanced-content"
              id="approfondimento"
            >
              <SimpleMarkdown content={enhancedService.longDescription} />
            </section>
          )}

          {/* Common Requirements */}
          <AnimateOnScroll animation="fade-up">
            <section className="content-section" id="requisiti-comuni">
              <h2 className="section-title">Requisiti Comuni</h2>
              <div className="requirements-list">
                <div className="requirement-item">
                  <CheckCircle size={20} />
                  <div>
                    <strong>Passaporto Valido</strong>
                    <p>Con validità residua minima di 3 mesi</p>
                  </div>
                </div>
                <div className="requirement-item">
                  <CheckCircle size={20} />
                  <div>
                    <strong>Visto d'Ingresso</strong>
                    <p>Se richiesto per il tuo paese d'origine</p>
                  </div>
                </div>
                <div className="requirement-item">
                  <CheckCircle size={20} />
                  <div>
                    <strong>Codice Fiscale</strong>
                    <p>Rilasciato dall'Agenzia delle Entrate</p>
                  </div>
                </div>
                <div className="requirement-item">
                  <CheckCircle size={20} />
                  <div>
                    <strong>Alloggio</strong>
                    <p>
                      Contratto di affitto registrato o dichiarazione ospitalità
                    </p>
                  </div>
                </div>
                <div className="requirement-item">
                  <CheckCircle size={20} />
                  <div>
                    <strong>Certificato Penale</strong>
                    <p>Del paese d'origine, tradotto e legalizzato</p>
                  </div>
                </div>
              </div>
            </section>
          </AnimateOnScroll>

          {/* Procedure */}
          <AnimateOnScroll animation="fade-up">
            <section className="content-section" id="procedura">
              <h2 className="section-title">Come Ti Assistiamo</h2>
              <div className="procedure-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3>Consulenza Iniziale</h3>
                    <p>
                      Analizziamo la tua situazione e verifichiamo i requisiti.
                      Ti forniamo la lista documenti personalizzata.
                    </p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3>Preparazione Documenti</h3>
                    <p>
                      Ti aiutiamo a raccogliere tutti i certificati necessari.
                      Gestiamo traduzioni e legalizzazioni.
                    </p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h3>Compilazione Kit Postale</h3>
                    <p>
                      Compiliamo insieme tutti i moduli. Ti accompagniamo
                      all'ufficio postale per le impronte.
                    </p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h3>Appuntamento Questura</h3>
                    <p>
                      Ti prepariamo per l'appuntamento. Possiamo accompagnarti
                      se necessario.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </AnimateOnScroll>

          {/* Costs */}
          <AnimateOnScroll animation="fade-up">
            <section className="content-section" id="costi">
              <h2 className="section-title">Costi da Considerare</h2>
              <div className="costs-grid">
                <div className="cost-card">
                  <Euro size={24} />
                  <h3>Costi Governativi</h3>
                  <ul>
                    <li>Marca da bollo: €16</li>
                    <li>Contributo ministeriale: €40-50</li>
                    <li>Kit postale: €30-40</li>
                  </ul>
                </div>
                <div className="cost-card">
                  <Euro size={24} />
                  <h3>Documenti</h3>
                  <ul>
                    <li>Certificati paese origine: variabile</li>
                    <li>Traduzioni asseverate: €20-40/doc</li>
                    <li>Legalizzazioni: €30-50/doc</li>
                  </ul>
                </div>
                <div className="cost-card cost-card--highlight">
                  <Euro size={24} />
                  <h3>Nostra Assistenza</h3>
                  <p>
                    Contattaci per un preventivo personalizzato. Massima
                    trasparenza, nessun costo nascosto.
                  </p>
                </div>
              </div>
            </section>
          </AnimateOnScroll>

          {/* CTA */}
          <AnimateOnScroll animation="fade-up">
            <section className="cta-section">
              <h2>Hai Bisogno di Aiuto?</h2>
              <p>
                Contattaci su WhatsApp per una consulenza gratuita. Ti
                spieghiamo tutto e ti guidiamo passo dopo passo.
              </p>
              <WhatsAppPopup
                message={`Buongiorno, vorrei informazioni su: ${service.title}`}
                position="top"
                triggerElement={
                  <button className="cta-button">
                    Consulenza Gratuita WhatsApp
                  </button>
                }
              />
            </section>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
};

export default ClusteredPermessoPage;
