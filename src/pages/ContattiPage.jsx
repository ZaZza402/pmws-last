import React from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import PageTransition from "../components/PageTransition";
import Breadcrumb from "../components/Breadcrumb";
import { LiveClock } from "../components/DocumentSection";
import "./ContattiPage.css";

const contactOptions = [
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    description:
      "Perfetto per una domanda veloce o per inviarci una foto di un documento.",
    action: (
      <a
        href="https://wa.me/393459256257?text=Buongiorno"
        target="_blank"
        rel="noopener noreferrer"
      >
        Invia un Messaggio
      </a>
    ),
  },
  {
    icon: <FaPhoneAlt />,
    title: "Telefono",
    description:
      "Se preferisci parlare direttamente con noi per spiegarci la tua situazione.",
    action: <a href="tel:+393459256257">Chiama Ora</a>,
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description:
      "Ideale per richieste più dettagliate o se hai bisogno di allegare più file.",
    action: <a href="mailto:info@puntomigrare.it">Scrivi un'Email</a>,
  },
];

const ContattiPage = () => {
  return (
    <PageTransition>
      <title>
        Contattaci - Sede a Roma, Via del Fuoco Sacro 97 | PuntoMigrare
      </title>
      <meta
        name="description"
        content="Contattaci su WhatsApp, telefono o email. Ufficio a Roma, Via del Fuoco Sacro 97. Orari: Lun-Mar-Gio 9-18, Mer-Ven 9-13. Parliamo italiano, English, Română."
      />
      <link rel="canonical" href="https://www.puntomigrare.it/contatti" />

      <section className="section page-header">
        <div className="container">
          {/* Breadcrumb */}
          <Breadcrumb items={[{ label: "Contatti" }]} />

          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h1 style={{ color: "#2b286f" }}>Siamo qui per ascoltarti</h1>
            <p
              style={{
                maxWidth: "70ch",
                margin: "0.75rem auto 0 auto",
                fontSize: "1.1rem",
                color: "#475569",
              }}
            >
              Hai un dubbio o vuoi semplicemente capire come possiamo aiutarti?
              Non esitare a contattarci. Una chiacchierata non costa nulla e può
              risolvere molti problemi.
            </p>
          </div>

          <div className="panel mt-4">
            <div className="contact-grid">
              <div>
                <h2
                  style={{
                    margin: "0 0 1rem",
                    color: "#2b286f",
                    fontSize: "1.6rem",
                  }}
                >
                  Contattaci Come Preferisci
                </h2>
                <div className="contact-timeline mt-2">
                  {contactOptions.map((option, idx) => (
                    <div className="contact-step" key={option.title}>
                      <span className="contact-step-icon" aria-hidden="true">
                        {option.icon}
                      </span>
                      <div className="contact-step-content">
                        <strong>{option.title}</strong>
                        <p>{option.description}</p>
                        {option.action}
                      </div>
                    </div>
                  ))}
                </div>

                <h3
                  className="mt-6"
                  style={{ color: "#2b286f", fontSize: "1.4rem" }}
                >
                  Orari di Apertura
                </h3>
                <LiveClock />
                <address
                  className="mt-2"
                  style={{
                    fontStyle: "normal",
                    color: "#475569",
                    lineHeight: "1.8",
                  }}
                >
                  <strong>Lun - Mar - Gio:</strong> 09:00 – 18:00
                  <br />
                  <strong>Mer - Ven:</strong> 09:00 – 13:00
                  <br />
                  <strong>Sab - Dom:</strong> Chiuso
                </address>
              </div>

              <div>
                <h2
                  style={{
                    margin: "0 0 1rem",
                    color: "#2b286f",
                    fontSize: "1.6rem",
                  }}
                >
                  Vieni a Trovarci
                </h2>
                <address
                  className="mt-2"
                  style={{
                    fontStyle: "normal",
                    color: "#475569",
                    lineHeight: "1.8",
                    fontSize: "1.05rem",
                  }}
                >
                  <strong style={{ color: "#2b286f", fontSize: "1.1rem" }}>
                    PuntoMigrare
                  </strong>
                  <br />
                  Via del Fuoco Sacro, 97
                  <br />
                  00133 Roma RM
                </address>
                <div
                  id="mapLoader"
                  className="mt-2"
                  style={{
                    position: "relative",
                    aspectRatio: "16/9",
                    border: "1px solid var(--border)",
                    borderRadius: "18px",
                    overflow: "hidden",
                    background: "var(--card)",
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.333333333333!2d12.6133!3d41.8833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f63f5a2a1b94b%3A0x19a0a4e7a2a1b94b!2sVia%20del%20Fuoco%20Sacro%2C%2097%2C%2000133%20Roma%20RM!5e0!3m2!1sen!2sit!4v1662556942001!5m2!1sen!2sit"
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
                    title="Mappa della sede di PuntoMigrare"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ContattiPage;
