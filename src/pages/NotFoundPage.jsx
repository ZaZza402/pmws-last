// src/pages/NotFoundPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { VscCompass } from "react-icons/vsc"; // A nice, relevant icon
import "./NotFoundPage.css";

export default function NotFoundPage() {
  return (
    <main className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <div className="not-found-icon" aria-hidden="true">
            <VscCompass size={60} />
          </div>
          <h1>Pagina non trovata</h1>
          <p>
            Sembra che tu abbia preso una strada sbagliata. La pagina che stai
            cercando non esiste o è stata spostata.
          </p>
          <Link to="/" className="btn btn--blue mt-3">
            Torna alla Home
          </Link>
        </div>
      </div>
    </main>
  );
}
