// src/components/WhySection.jsx
import React, { useState } from "react";
import { FaRegClock, FaLanguage } from "react-icons/fa";
import { MdOutlineGppGood } from "react-icons/md";
import WhyTrustIllustration from "./WhyTrustIllustration";
import WhyTeamIllustration from "./WhyTeamIllustration";
import WhyStatsIllustration from "./WhyStatsIllustration";
import ScrollingIconsBackground from "./ScrollingIconsBackground";
import "./WhyIllustrations.css";
import "./WhySection.css";

const WhyItem = ({ title, description, icon }) => (
  <div className="why__item" role="listitem">
    <span className="why__icon" aria-hidden="true">
      {icon}
    </span>
    <div>
      <strong>{title}</strong>
      <p className="mt-1" style={{ margin: 0 }}>
        {description}
      </p>
    </div>
  </div>
);

const WhySection = () => {
  const [visualOption, setVisualOption] = useState("trust"); // Options: 'trust', 'team', 'stats'

  const renderVisual = () => {
    switch (visualOption) {
      case "trust":
        return <WhyTrustIllustration />;
      case "team":
        return <WhyTeamIllustration />;
      case "stats":
        return <WhyStatsIllustration />;
      default:
        return <WhyTrustIllustration />; // Default to trust illustration
    }
  };

  return (
    <section
      id="perche"
      className="section section-bg-white why"
      aria-labelledby="why-title"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Animated background icons */}
      <ScrollingIconsBackground />

      <div
        className="container why__grid"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div>
          <h2 id="why-title">Perché sceglierci?</h2>
          <p className="mt-2">
            Sappiamo che la burocrazia può essere un labirinto. Il nostro metodo
            è semplice: parole chiare, passaggi definiti e un accompagnamento
            costante. Mettiamo al centro le persone, non le pratiche.
          </p>

          <div className="why__list mt-3" role="list">
            <WhyItem
              title="Il Tuo Tempo è Prezioso"
              description="Niente attese infinite. Ti diamo appuntamenti rapidi e seguiamo la tua pratica con la massima priorità, tenendoti sempre aggiornato."
              icon={<FaRegClock size={28} color="#2b286f" />}
            />
            <WhyItem
              title="Nessuna Sorpresa, Solo Chiarezza"
              description="Ti spieghiamo ogni costo in modo semplice e trasparente prima di iniziare. Il nostro obiettivo è la tua tranquillità."
              icon={<MdOutlineGppGood size={28} color="#F78D23" />}
            />
            <WhyItem
              title="Parliamo la Tua Lingua"
              description="La comunicazione è fondamentale. Oltre all'italiano, parliamo inglese e rumeno per assicurarci che ogni dettaglio sia perfettamente compreso."
              icon={<FaLanguage size={28} color="#2b286f" />}
            />
          </div>
        </div>

        {/* Visual content with switcher for client testing */}
        <div className="why__visual-section">
          {/* Visual option switcher */}
          <div className="why-visual-switcher">
            <button
              onClick={() => setVisualOption("trust")}
              className={visualOption === "trust" ? "active" : ""}
            >
              Fiducia & Sicurezza
            </button>
            <button
              onClick={() => setVisualOption("team")}
              className={visualOption === "team" ? "active" : ""}
            >
              Team Professionale
            </button>
            <button
              onClick={() => setVisualOption("stats")}
              className={visualOption === "stats" ? "active" : ""}
            >
              Risultati & Dati
            </button>
          </div>

          <figure className="panel why__image-container" aria-hidden="true">
            {renderVisual()}
          </figure>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
