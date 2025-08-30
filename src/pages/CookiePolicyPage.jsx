import React from "react";

const CookiePolicyPage = () => (
  <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
    <h1>Informativa sui Cookie</h1>
    <section>
      <h2>Cosa sono i cookie?</h2>
      <p>
        I cookie sono piccoli file di testo che vengono salvati sul tuo dispositivo quando visiti un sito web. Servono per migliorare la tua esperienza di navigazione, memorizzare preferenze e raccogliere informazioni statistiche.
      </p>
    </section>
    <section>
      <h2>Tipi di cookie utilizzati</h2>
      <ul>
        <li>
          <strong>Cookie tecnici:</strong> Necessari per il funzionamento del sito e per consentire la navigazione.
        </li>
        <li>
          <strong>Cookie di analisi:</strong> Utilizzati per raccogliere dati anonimi sull’uso del sito e migliorare i servizi offerti.
        </li>
        <li>
          <strong>Cookie di terze parti:</strong> Possono essere installati da servizi esterni (es. Google Analytics) per analisi o funzionalità aggiuntive.
        </li>
      </ul>
    </section>
    <section>
      <h2>Gestione dei cookie</h2>
      <p>
        Puoi gestire o disabilitare i cookie tramite le impostazioni del tuo browser. La disattivazione dei cookie tecnici potrebbe influire sul funzionamento del sito.
      </p>
    </section>
    <section>
      <h2>Consenso all’uso dei cookie</h2>
      <p>
        Continuando a navigare su questo sito, acconsenti all’utilizzo dei cookie secondo questa informativa.
      </p>
    </section>
    <section>
      <h2>Modifiche all’informativa</h2>
      <p>
        Questa informativa può essere aggiornata. Eventuali modifiche saranno pubblicate su questa pagina.
      </p>
    </section>
    <section>
      <h2>Contatti</h2>
      <p>
        Per domande sull’uso dei cookie, scrivici a <a href="mailto:info@puntomigrare.it">info@puntomigrare.it</a>.
      </p>
    </section>
  </main>
);

export default CookiePolicyPage;