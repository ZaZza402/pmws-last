// src/components/WhySection.jsx
import React from "react";
import "./WhySection.css";

const WhyStoryCard = ({ number, title, description, delay }) => (
  <div className="why-story-card" style={{ animationDelay: `${delay}ms` }}>
    <div className="why-card-number">{number}</div>
    <div className="why-card-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const WhySection = () => {
  return (
    <section id="perche" className="why-section" aria-labelledby="why-title">
      <div className="why-content">
        <div className="container">
          {/* Elegant tagline */}
          <div className="why-brand-mark">
            <div className="why-tagline">
              <span className="tagline-text">
                Unire orizzonti, avvicinare persone
              </span>
            </div>
          </div>

          {/* Main narrative */}
          <div className="why-narrative">
            <h2 id="why-title">
              La Nostra Promessa: Professionalità con il Cuore
            </h2>
            <div className="why-story">
              <p className="why-story-lead">
                In un mondo dove la burocrazia può intimidire e la distanza può
                separare, abbiamo scelto di costruire un ponte di fiducia e
                competenza.
              </p>
              <p>
                <strong>PuntoMigrare</strong> nasce dalla passione per le
                persone e dalla profonda conoscenza delle sfide che affrontano
                quotidianamente chi vive tra due mondi. Non siamo solo un CAF o
                un'agenzia: siamo il partner che avresti voluto avere quando
                tutto sembrava complicato.
              </p>
              <p>
                Ogni pratica che gestiamo porta con sé una storia, un sogno, una
                famiglia. Per questo trattiamo ogni cliente con l'attenzione e
                il rispetto che merita, parlando la sua lingua — letteralmente e
                metaforicamente.
                <span className="why-highlight">
                  {" "}
                  Italiano, English, Română
                </span>
                : la comunicazione perfetta è la base della fiducia.
              </p>
            </div>
          </div>

          {/* Story cards - elegant narrative flow */}
          <div className="why-story-grid">
            <WhyStoryCard
              number="01"
              title="Ascoltiamo la Vostra Storia"
              description="Ogni persona che varca la nostra porta porta con sé un sogno, una speranza, una storia unica. Iniziamo sempre da qui: ascoltando, comprendendo, mettendoci nei vostri panni. Non siete una pratica tra le tante."
              delay={0}
            />
            <WhyStoryCard
              number="02"
              title="Parliamo la Vostra Lingua"
              description="Italiano, English, Română — fluentemente e senza barriere. La vera comunicazione va oltre le parole: significa capirsi perfettamente, senza fraintendimenti, con la sicurezza che ogni dettaglio sia chiaro."
              delay={100}
            />
            <WhyStoryCard
              number="03"
              title="Costruiamo la Soluzione Insieme"
              description="Niente scatole preconfezionate. Ogni percorso è personalizzato sulle vostre esigenze, con trasparenza totale sui costi, sui tempi e sulle possibilità. Vi accompagniamo passo dopo passo, senza lasciarvi mai soli."
              delay={200}
            />
            <WhyStoryCard
              number="04"
              title="Lavoriamo con Precisione"
              description="Anni di esperienza in immigrazione, CAF e patronato si traducono in pratiche impeccabili. Ogni documento verificato, ogni scadenza monitorata, ogni dettaglio curato con attenzione maniacale."
              delay={300}
            />
            <WhyStoryCard
              number="05"
              title="Vi Teniamo Sempre Informati"
              description="Niente attese nel buio. Vi aggiorniamo costantemente sullo stato della vostra pratica, rispondiamo rapidamente ai vostri dubbi e interveniamo subito se c'è un imprevisto. La vostra tranquillità è la nostra priorità."
              delay={400}
            />
            <WhyStoryCard
              number="06"
              title="Celebriamo il Vostro Successo"
              description="Quando la vostra pratica si conclude, per noi non è un semplice archiviato. È il vostro sogno che si realizza, la vostra famiglia che si riunisce, il vostro futuro che prende forma. Questa è la nostra vera soddisfazione."
              delay={500}
            />
          </div>

          {/* Closing statement */}
          <div className="why-closing">
            <p className="why-closing-lead">
              Scegliere PuntoMigrare significa affidarsi a chi unisce{" "}
              <strong>competenza professionale</strong> e{" "}
              <strong>cura autentica</strong> per le persone.
            </p>
            <p className="why-closing-cta">
              Non siete un numero. Siete la ragione per cui facciamo questo
              lavoro con passione, ogni singolo giorno.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
