import React from "react";

const services = [
  "Permesso di soggiorno",
  "Ricongiungimento familiare",
  "Cittadinanza italiana",
  "Iscrizione anagrafica",
  "Conversione titoli di studio",
  "Supporto CAF e Patronato",
  "Prenotazione appuntamenti Questura",
  "Traduzioni giurate",
  "Assistenza legale",
  "Residenza e domicilio",
];

const ScrollingServices = () => (
  <div
    className="scrolling-services"
    style={{
      overflow: "hidden",
      whiteSpace: "nowrap",
      width: "100%",
      borderRadius: "12px",
      background: "#f7f7f7",
      margin: "2rem 0",
      border: "1px solid #eee",
      padding: "0.5rem 0",
      position: "relative",
    }}
    aria-label="Servizi di immigrazione"
  >
    <div
      style={{
        display: "inline-block",
        animation: "scroll-left 30s linear infinite",
        minWidth: "100%",
      }}
    >
      {services.map((service, idx) => (
        <span
          key={idx}
          style={{
            display: "inline-block",
            margin: "0 2.5rem",
            fontWeight: "500",
            fontSize: "1.1rem",
            color: "#0A2E4E",
          }}
        >
          {service}
        </span>
      ))}
      {services.map((service, idx) => (
        <span
          key={`repeat-${idx}`}
          style={{
            display: "inline-block",
            margin: "0 2.5rem",
            fontWeight: "500",
            fontSize: "1.1rem",
            color: "#0A2E4E",
          }}
        >
          {service}
        </span>
      ))}
    </div>
  </div>
);

export default ScrollingServices;