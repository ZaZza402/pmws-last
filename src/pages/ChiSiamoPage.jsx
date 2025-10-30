// src/pages/ChiSiamoPage.jsx

import React from "react";
import AnimateOnScroll from "../components/AnimateOnScroll";
import Breadcrumb from "../components/Breadcrumb";
import "./ChiSiamoPage.css";

const ChiSiamoPage = () => {
  return (
    <div className="chi-siamo-page">
      <title>
        Chi Siamo - Due Professioniste per la Tua Immigrazione | PuntoMigrare
      </title>
      <meta
        name="description"
        content="Scopri chi c'è dietro PuntoMigrare. Due professioniste con una missione: offrire un servizio umano, chiaro e competente per immigrazione e pratiche CAF a Roma."
      />
      <link rel="canonical" href="https://www.puntomigrare.it/chi-siamo" />

      <section className="section page-header">
        <div className="container">
          {/* Breadcrumb */}
          <Breadcrumb items={[{ label: "Chi Siamo" }]} />

          <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "#2b286f" }}>
              Due Professioniste, Una Sola Missione
            </h1>
            <p
              className="font-accent mt-2"
              style={{
                maxWidth: "70ch",
                margin: "0.75rem auto 0 auto",
                fontSize: "1.1rem",
                color: "#475569",
              }}
            >
              Crediamo in un approccio basato sull'ascolto, sulla chiarezza e su
              un rapporto di fiducia. Il nostro obiettivo non è solo completare
              una pratica, ma accompagnarti verso la tua tranquillità.
            </p>
          </div>

          <AnimateOnScroll>
            <div className="about-grid">
              {/* Profile Card 1 */}
              <div className="profile-card">
                {/* 
                  HERE IS THE IMAGE FOR THE FIRST PROFESSIONAL.
                  1. Add your image to the `src/assets` folder.
                  2. Import it at the top of this file (e.g., `import photo1 from '../assets/photo1.jpg';`).
                  3. Replace the placeholder URL below with the imported variable (e.g., `src={photo1}`).
                */}
                <img
                  src="https://via.placeholder.com/600x400" // <-- REPLACE THIS URL
                  alt="Ritratto di Nome Professionista 1" // <-- UPDATE THIS ALT TEXT
                  className="profile-image"
                />
                <div className="profile-content">
                  <h3>Nome Professionista 1</h3>
                  <p className="profile-title">
                    Specialista in Pratiche di Immigrazione
                  </p>
                  <p>
                    Qui andrà una breve biografia che descrive il percorso,
                    l'esperienza e la passione della prima professionista.
                    Racconterà perché ha scelto questo lavoro e cosa la motiva
                    ad aiutare le persone ogni giorno.
                  </p>
                </div>
              </div>

              {/* Profile Card 2 */}
              <div className="profile-card">
                {/* 
                  HERE IS THE IMAGE FOR THE SECOND PROFESSIONAL.
                  Follow the same steps as above.
                */}
                <img
                  src="https://via.placeholder.com/600x400" // <-- REPLACE THIS URL
                  alt="Ritratto di Nome Professionista 2" // <-- UPDATE THIS ALT TEXT
                  className="profile-image"
                />
                <div className="profile-content">
                  <h3>Nome Professionista 2</h3>
                  <p className="profile-title">
                    Esperta in Servizi Fiscali e Patronato
                  </p>
                  <p>
                    Qui andrà una breve biografia che descrive le competenze in
                    ambito CAF e Patronato della seconda professionista. Metterà
                    in luce la sua precisione, la sua capacità di risolvere
                    problemi complessi e il suo approccio al cliente.
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
};

export default ChiSiamoPage;
