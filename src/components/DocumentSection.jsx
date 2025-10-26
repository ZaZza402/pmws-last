import React, { useEffect, useState } from "react";
import { businessHours } from "../config/businessHours";
import DocumentChecklist from "./DocumentChecklist";
import "./DocumentSection.css";

// Funzione aggiornata per verificare se l'ufficio è aperto
function isOpen(now = new Date()) {
  const day = now.getDay();
  const hour = now.getHours() + now.getMinutes() / 60;
  const schedule = businessHours[day];

  if (!schedule) return false;

  const isInMorningShift = hour >= schedule.open && hour < schedule.breakStart;
  const isInAfternoonShift = hour >= schedule.breakEnd && hour < schedule.close;

  return isInMorningShift || isInAfternoonShift;
}

function LiveClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  const open = isOpen(now);
  const timeString = now.toLocaleTimeString("it-IT", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div
      style={{
        margin: "1rem 0",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <span>Ora attuale: {timeString} — </span>
      <span
        className={`live-dot${open ? "" : " closed"}`}
        aria-label={open ? "Aperto" : "Chiuso"}
      ></span>
      <span>{open ? "Siamo aperti!" : "Siamo chiusi."}</span>
    </div>
  );
}

const DocumentSection = () => {
  return (
    <section
      id="documenti"
      className="section section-bg-neutral booking"
      aria-labelledby="documents-title"
    >
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <h2 id="documents-title">Preparati per la tua Visita</h2>
          <p
            className="mt-2"
            style={{ maxWidth: "65ch", margin: "0.5rem auto 0 auto" }}
          >
            Scopri quali documenti servono per la tua pratica di immigrazione e
            dove trovarci per ricevere assistenza specializzata.
          </p>
        </div>

        <div className="panel mt-4">
          <div className="contact-grid">
            {/* Column 1: Document Checklist - NEW FEATURE */}
            <div>
              <h3 style={{ margin: "0 0 .5rem" }}>1. Controlla i Documenti</h3>
              <p className="mt-1" style={{ minHeight: "48px" }}>
                Seleziona la tua pratica e scopri esattamente quali documenti
                preparare per velocizzare la procedura.
              </p>
              <div className="checklist-container">
                <DocumentChecklist />
              </div>
            </div>

            {/* Column 2: Address and Map - KEPT THE SAME */}
            <div id="contatti-info">
              <h3 style={{ margin: "0 0 .5rem" }} id="mappa">
                2. Vieni a Trovarci
              </h3>
              <address className="mt-1" style={{ fontStyle: "normal" }}>
                <strong>Sede:</strong>
                <br />
                Via del Fuoco Sacro, 97
                <br />
                00133 Roma RM
                <br />
                <br />
                <strong style={{ display: "block" }}>Orari di apertura:</strong>
                Lun, Mar, Gio: 09:00–13:00 / 14:30–18:00
                <br />
                Mer, Ven: 09:00–13:00
              </address>
              <LiveClock />
              <div
                id="mapLoader"
                className="mt-2"
                style={{
                  position: "relative",
                  aspectRatio: "4/3",
                  border: "1px solid var(--border)",
                  borderRadius: "18px",
                  overflow: "hidden",
                  background: "var(--card)",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.334008920117!2d12.610996876690044!3d41.88566996350734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f63f533967885%3A0x606fb3c4ab5913a!2sVia%20del%20Fuoco%20Sacro%2C%2097%2C%2000133%20Roma%20RM!5e0!3m2!1sit!2sit!4v1723900381665!5m2!1sit!2sit"
                  width="600"
                  height="450"
                  style={{
                    border: 0,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa della sede di PuntoMigrare in Via del Fuoco Sacro, 97"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentSection;
