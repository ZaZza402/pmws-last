// src/pages/FaqPage.jsx

// THIS IS THE CORRECTED IMPORT LINE
import React, { useState, useEffect } from "react";
import PageTransition from "../components/PageTransition";
import { faqQuestions } from "../faqData";
import "./FaqPage.css";

// Reusable Accordion Item Component
const FaqItem = ({ item, isExpanded, onToggle }) => (
  <div className={`faq-item ${isExpanded ? "expanded" : ""}`}>
    <button
      className="faq-question"
      onClick={onToggle}
      aria-expanded={isExpanded}
    >
      <span>{item.question}</span>
      <svg
        className="faq-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M6 9l6 6 6-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
    <div className="faq-answer">
      <div className="faq-answer-content">
        <p>{item.answer}</p>
      </div>
    </div>
  </div>
);

const FaqPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Immigrazione");
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  const categories = ["Immigrazione", "CAF & Patronato", "Altri Servizi"];

  useEffect(() => {
    let questions = [];
    if (searchTerm) {
      // Search mode: filter all questions
      const lowercasedFilter = searchTerm.toLowerCase();
      questions = faqQuestions.filter(
        (q) =>
          q.question.toLowerCase().includes(lowercasedFilter) ||
          q.answer.toLowerCase().includes(lowercasedFilter)
      );
    } else {
      // Browse mode: filter by active category
      questions = faqQuestions.filter((q) => q.category === activeCategory);
    }
    setFilteredQuestions(questions);
    setExpandedId(null); // Collapse all on filter change
  }, [searchTerm, activeCategory]);

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <PageTransition>
      <title>Domande Frequenti (FAQ) - Immigrazione e CAF | PuntoMigrare</title>
      <meta
        name="description"
        content="Risposte dettagliate alle domande complesse su permesso di soggiorno, cittadinanza, 730, ISEE e altro. La nostra esperienza al tuo servizio."
      />
      <link rel="canonical" href="https://www.puntomigrare.it/faq" />

      <section className="section page-header">
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <h1>Domande Frequenti (FAQ)</h1>
            <p
              className="mt-2"
              style={{ maxWidth: "70ch", margin: "0.5rem auto 0 auto" }}
            >
              Risposte chiare e complete alle domande più importanti su immigrazione, 
              CAF, pensioni e servizi. Organizzate per aiutarti a trovare subito quello che cerchi.
            </p>
          </div>

          <div className="faq-controls">
            <div className="faq-search-bar">
              <input
                type="text"
                placeholder="Cerca tra tutte le domande..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {!searchTerm && (
              <div className="faq-tabs">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`faq-tab-btn ${
                      activeCategory === category ? "active" : ""
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
            {(searchTerm || filteredQuestions.length > 0) && (
              <div className="faq-results-count">
                {searchTerm
                  ? `Trovate ${filteredQuestions.length} domande che corrispondono alla tua ricerca`
                  : `${filteredQuestions.length} domande nella categoria "${activeCategory}"`}
              </div>
            )}
          </div>

          <div className="faq-list mt-4">
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((item) => (
                <FaqItem
                  key={item.id}
                  item={item}
                  isExpanded={expandedId === item.id}
                  onToggle={() => handleToggle(item.id)}
                />
              ))
            ) : (
              <div className="no-results">
                <h3>Nessuna domanda trovata</h3>
                <p>
                  La tua domanda non è in elenco?{" "}
                  <a href="/contatti">Contattaci direttamente</a>, saremo felici
                  di risponderti.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default FaqPage;
