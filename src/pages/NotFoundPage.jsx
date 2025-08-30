// src/pages/NotFoundPage.jsx
import React from "react";
export default function NotFoundPage() {
  return (
    <main style={{ textAlign: "center", padding: "4rem" }}>
      <h1>404 - Pagina non trovata</h1>
      <p>La pagina che cerchi non esiste.</p>
      <a href="/">Torna alla Home</a>
    </main>
  );
}