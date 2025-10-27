import React from "react";
import PageTransition from "../components/PageTransition";

const PrivacyPolicyPage = () => (
  <PageTransition>
    <main
      className="page-header"
      style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}
    >
      <h1>Informativa sulla Privacy</h1>
      <section>
        <h2>Introduzione</h2>
        <p>
          Punto Migrare si impegna a proteggere la tua privacy. Questa
          informativa spiega come raccogliamo, utilizziamo e tuteliamo i tuoi
          dati personali quando utilizzi il nostro sito web.
        </p>
      </section>
      <section>
        <h2>Quali dati raccogliamo</h2>
        <ul>
          <li>
            <strong>Dati personali:</strong> Nome, indirizzo email, numero di
            telefono e altre informazioni che ci fornisci tramite moduli o
            prenotazioni.
          </li>
          <li>
            <strong>Dati di utilizzo:</strong> Informazioni su come utilizzi il
            sito, come le pagine visitate e le interazioni effettuate.
          </li>
          <li>
            <strong>Cookie:</strong> Utilizziamo cookie per migliorare la tua
            esperienza e analizzare l’utilizzo del sito.
          </li>
        </ul>
      </section>
      <section>
        <h2>Come utilizziamo i tuoi dati</h2>
        <ul>
          <li>Per fornire e migliorare i nostri servizi.</li>
          <li>Per rispondere alle tue richieste e domande.</li>
          <li>
            Per inviarti aggiornamenti e comunicazioni di marketing (solo con il
            tuo consenso).
          </li>
          <li>Per adempiere agli obblighi di legge.</li>
        </ul>
      </section>
      <section>
        <h2>Condivisione dei dati</h2>
        <p>
          Non vendiamo i tuoi dati personali. Possiamo condividere le
          informazioni con terze parti fidate che ci aiutano a gestire il sito o
          a fornirti servizi, sempre nel rispetto della tua privacy.
        </p>
      </section>
      <section>
        <h2>I tuoi diritti</h2>
        <ul>
          <li>Accedere, correggere o cancellare i tuoi dati personali.</li>
          <li>Revocare il consenso al trattamento dei dati.</li>
          <li>Contattarci per qualsiasi domanda relativa alla privacy.</li>
        </ul>
      </section>
      <section>
        <h2>Contatti</h2>
        <p>
          Per domande su questa informativa, puoi scriverci a{" "}
          <a href="mailto:info@puntomigrare.it">info@puntomigrare.it</a>.
        </p>
      </section>
      <section>
        <h2>Aggiornamenti</h2>
        <p>
          Questa informativa può essere aggiornata periodicamente. Le modifiche
          saranno pubblicate su questa pagina.
        </p>
      </section>
    </main>
  </PageTransition>
);

export default PrivacyPolicyPage;
