// src/pages/NotFoundPage.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { VscCompass, VscTools } from "react-icons/vsc";
import PageTransition from "../components/PageTransition";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  const location = useLocation();
  const isMaintenancePage = location.pathname === "/servizi";

  return (
    <PageTransition>
      <main className="not-found-page">
        <div className="container">
          <div className="not-found-content">
            <div className="not-found-icon" aria-hidden="true">
              {isMaintenancePage ? (
                <VscTools size={60} />
              ) : (
                <VscCompass size={60} />
              )}
            </div>
            
            {isMaintenancePage ? (
              <>
                <h1>Pagina in Manutenzione</h1>
                <p>
                  Stiamo lavorando per migliorare questa sezione del nostro sito.
                  La pagina Servizi sarà presto disponibile con un design completamente rinnovato.
                </p>
                <p className="maintenance-note">
                  Nel frattempo, puoi contattarci direttamente per informazioni sui nostri servizi.
                </p>
                <div className="not-found-actions">
                  <Link to="/" className="btn btn--blue">
                    Torna alla Home
                  </Link>
                  <Link to="/contatti" className="btn btn--outline-blue">
                    Contattaci
                  </Link>
                </div>
              </>
            ) : (
              <>
                <h1>Pagina non trovata</h1>
                <p>
                  Sembra che tu abbia preso una strada sbagliata. La pagina che stai
                  cercando non esiste o è stata spostata.
                </p>
                <Link to="/" className="btn btn--blue mt-3">
                  Torna alla Home
                </Link>
              </>
            )}
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
