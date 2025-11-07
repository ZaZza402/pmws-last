import React, { useEffect, useState } from "react";
import { businessHours } from "../config/businessHours";
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

export function LiveClock() {
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
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        flexWrap: "wrap",
      }}
    >
      <span style={{ fontWeight: "500", color: "#64748b" }}>
        Ora attuale: {timeString}
      </span>
      <span className={`live-status${open ? "" : " closed"}`}>
        <span
          className={`live-dot${open ? "" : " closed"}`}
          aria-label={open ? "Aperto" : "Chiuso"}
        ></span>
        <span>{open ? "Aperto ora" : "Chiuso"}</span>
      </span>
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
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 id="documents-title">Vieni a Trovarci</h2>
          <p
            className="mt-2"
            style={{ maxWidth: "65ch", margin: "0.5rem auto 0 auto" }}
          >
            Siamo qui per aiutarti con le tue pratiche di immigrazione. 
            Trova la nostra sede e scopri i nostri orari di apertura.
          </p>
        </div>

        <div className="map-section-wrapper">
          <div className="map-info-container">
            <div className="map-info">
              <h3 style={{ margin: "0 0 1rem", color: "var(--blue)", fontSize: "1.5rem" }}>
                La Nostra Sede
              </h3>
              <address style={{ fontStyle: "normal", lineHeight: "1.8", fontSize: "1.1rem" }}>
                <strong style={{ display: "block", marginBottom: "0.5rem", color: "var(--blue)" }}>
                  Indirizzo:
                </strong>
                Via del Fuoco Sacro, 97
                <br />
                00133 Roma RM
                <br />
                <br />
                <strong style={{ display: "block", marginBottom: "0.5rem", color: "var(--blue)" }}>
                  Orari di Apertura:
                </strong>
                <span style={{ display: "block", marginBottom: "0.25rem" }}>
                  <strong>Lun, Mar, Gio:</strong> 09:00–13:00 / 14:30–18:00
                </span>
                <span style={{ display: "block" }}>
                  <strong>Mer, Ven:</strong> 09:00–13:00
                </span>
              </address>
              <div style={{ marginTop: "1.5rem" }}>
                <LiveClock />
              </div>
            </div>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.334008920117!2d12.610996876690044!3d41.88566996350734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f63f533967885%3A0x606fb3c4ab5913a!2sVia%20del%20Fuoco%20Sacro%2C%2097%2C%2000133%20Roma%20RM!5e0!3m2!1sit!2sit!4v1723900381665!5m2!1sit!2sit"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa della sede di PuntoMigrare in Via del Fuoco Sacro, 97"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentSection;
