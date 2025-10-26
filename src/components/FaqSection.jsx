// src/components/FaqSection.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faqQuestions } from "../faqData";
import "./FaqSection.css";

// This is a single, expandable FAQ item
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

const FaqSection = () => {
  const [expandedId, setExpandedId] = useState(null);

  // We'll only show the first 3 questions on the homepage
  const questionsForHomepage = faqQuestions.slice(0, 3);

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="faq-preview"
      className="section section-bg-orange"
      aria-labelledby="faq-title"
    >
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <h2 id="faq-title">Domande Comuni, Risposte Chiare</h2>
          <p
            className="mt-2"
            style={{ maxWidth: "65ch", margin: "0.5rem auto 0 auto" }}
          >
            Sappiamo che hai molti dubbi. Qui trovi le risposte alle domande più
            frequenti che riceviamo ogni giorno.
          </p>
        </div>

        <div className="faq-list mt-4">
          {questionsForHomepage.map((item) => (
            <FaqItem
              key={item.id}
              item={item}
              isExpanded={expandedId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link to="/faq" className="btn btn--blue">
            Vedi Tutte le Domande Frequenti
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
