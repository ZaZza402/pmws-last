import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaChevronRight, FaSearch } from "react-icons/fa";
import {
  FaPassport,
  FaUsers,
  FaFlag,
  FaGraduationCap,
  FaLanguage,
  FaPlane,
  FaBuilding,
  FaHome,
  FaCalculator,
  FaBalanceScale,
  FaFileContract,
  FaGavel,
  FaLandmark,
} from "react-icons/fa";
import { allServices, serviceCategories } from "../servicesData";
import "./ServiziPage.css";

// Icon mapping
const iconMap = {
  passport: FaPassport,
  family: FaUsers,
  flag: FaFlag,
  education: FaGraduationCap,
  translate: FaLanguage,
  visa: FaPlane,
  embassy: FaBuilding,
  home: FaHome,
  calculator: FaCalculator,
  inheritance: FaBalanceScale,
  contract: FaFileContract,
  legal: FaGavel,
  government: FaLandmark,
};

const ServiziPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedServiceIds, setExpandedServiceIds] = useState([]); // Changed to array for multiple open cards
  const [expandedSubIds, setExpandedSubIds] = useState([]);

  // Filter services based on category and search
  const filteredServices = allServices.filter((service) => {
    const matchesCategory =
      selectedCategory === "all" || service.category === selectedCategory;

    if (!searchTerm) return matchesCategory;

    const term = searchTerm.toLowerCase();
    const matchesTitle = service.title.toLowerCase().includes(term);
    const matchesDesc = service.description.toLowerCase().includes(term);
    const matchesPractices = service.practices?.some((p) =>
      p.toLowerCase().includes(term)
    );
    const matchesSub = service.subservices?.some(
      (sub) =>
        sub.title.toLowerCase().includes(term) ||
        sub.description.toLowerCase().includes(term) ||
        sub.practices?.some((p) => p.toLowerCase().includes(term))
    );

    return (
      matchesCategory &&
      (matchesTitle || matchesDesc || matchesPractices || matchesSub)
    );
  });

  const toggleService = (id, event) => {
    // Get the clicked element's position relative to viewport
    const clickedElement = event?.currentTarget;
    if (!clickedElement) return;
    
    const rect = clickedElement.getBoundingClientRect();
    const offsetFromTop = rect.top;
    
    // Toggle this service in the array (allow multiple open)
    setExpandedServiceIds((prev) =>
      prev.includes(id) ? prev.filter((serviceId) => serviceId !== id) : [...prev, id]
    );
    
    // After state update, maintain the clicked element's position
    requestAnimationFrame(() => {
      if (clickedElement) {
        const newRect = clickedElement.getBoundingClientRect();
        const newOffsetFromTop = newRect.top;
        const scrollAdjustment = newOffsetFromTop - offsetFromTop;
        
        // Only adjust if there was a significant change
        if (Math.abs(scrollAdjustment) > 1) {
          window.scrollBy(0, scrollAdjustment);
        }
      }
    });
  };

  const toggleSub = (subId, event) => {
    // Get the clicked element's position relative to viewport
    const clickedElement = event?.currentTarget;
    if (!clickedElement) return;
    
    const rect = clickedElement.getBoundingClientRect();
    const offsetFromTop = rect.top;
    
    setExpandedSubIds((prev) =>
      prev.includes(subId)
        ? prev.filter((id) => id !== subId)
        : [...prev, subId]
    );
    
    // After state update, maintain the clicked element's position
    requestAnimationFrame(() => {
      if (clickedElement) {
        const newRect = clickedElement.getBoundingClientRect();
        const newOffsetFromTop = newRect.top;
        const scrollAdjustment = newOffsetFromTop - offsetFromTop;
        
        // Only adjust if there was a significant change
        if (Math.abs(scrollAdjustment) > 1) {
          window.scrollBy(0, scrollAdjustment);
        }
      }
    });
  };

  const getCategoryCount = (cat) => {
    return allServices.filter((s) => s.category === cat).length;
  };

  const getIcon = (iconName) => {
    const Icon = iconMap[iconName] || FaPassport;
    return <Icon />;
  };

  return (
    <div className="servizi-page">
      {/* Hero */}
      <section className="servizi-hero">
        <div className="container">
          <h1>I Nostri Servizi</h1>
          <p className="hero-subtitle">
            Esplora tutti i nostri servizi. Clicca per vedere i dettagli.
          </p>

          {/* Search */}
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Cerca servizio o pratica..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button
                className="search-clear"
                onClick={() => setSearchTerm("")}
                aria-label="Cancella"
              >
                ×
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="servizi-content">
        <div className="container-wide">
          <div className="servizi-layout">
            {/* Sidebar */}
            <aside className="servizi-sidebar">
              <h3>Categorie</h3>
              <div className="category-filters">
                <button
                  className={`cat-btn ${
                    selectedCategory === "all" ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory("all")}
                >
                  <span>Tutti</span>
                  <span className="count">{allServices.length}</span>
                </button>
                {serviceCategories.map((cat) => (
                  <button
                    key={cat}
                    className={`cat-btn ${
                      selectedCategory === cat ? "active" : ""
                    }`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    <span>{cat}</span>
                    <span className="count">{getCategoryCount(cat)}</span>
                  </button>
                ))}
              </div>
            </aside>

            {/* Services List */}
            <main className="servizi-main">
              {filteredServices.length === 0 ? (
                <div className="no-results">
                  <p>Nessun servizio trovato</p>
                  <button
                    className="btn btn--outline"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                    }}
                  >
                    Mostra tutti
                  </button>
                </div>
              ) : (
                <div className="services-list">
                  {filteredServices.map((service) => {
                    const isExpanded = expandedServiceIds.includes(service.id);
                    const hasSubservices =
                      service.subservices && service.subservices.length > 0;

                    return (
                      <div key={service.id} className="service-item">
                        {/* Service Header */}
                        <div
                          className="service-header"
                          onClick={(e) => toggleService(service.id, e)}
                        >
                          <div className="service-icon-box">
                            {getIcon(service.icon)}
                          </div>
                          <div className="service-info">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            {hasSubservices && (
                              <span className="sub-count">
                                {service.subservices.length} sotto-servizi
                              </span>
                            )}
                          </div>
                          <button
                            className={`expand-btn ${isExpanded ? "open" : ""}`}
                            aria-label={isExpanded ? "Chiudi" : "Apri"}
                          >
                            <FaChevronRight />
                          </button>
                        </div>

                        {/* Service Body (when expanded) */}
                        {isExpanded && (
                          <div className="service-body">
                            {hasSubservices ? (
                              <div className="subservices">
                                <h4>Seleziona il servizio specifico:</h4>
                                {service.subservices.map((sub) => {
                                  const isSubExpanded = expandedSubIds.includes(
                                    sub.id
                                  );
                                  return (
                                    <div key={sub.id} className="sub-item">
                                      <div
                                        className="sub-header"
                                        onClick={(e) => toggleSub(sub.id, e)}
                                      >
                                        <span className="sub-number">
                                          {sub.id.split("-")[1]}
                                        </span>
                                        <div className="sub-info">
                                          <h5>{sub.title}</h5>
                                          <p>{sub.description}</p>
                                        </div>
                                        <button
                                          className={`sub-expand ${
                                            isSubExpanded ? "open" : ""
                                          }`}
                                          aria-label={
                                            isSubExpanded ? "Chiudi" : "Apri"
                                          }
                                        >
                                          <FaChevronRight />
                                        </button>
                                      </div>

                                      {isSubExpanded && (
                                        <div className="sub-body">
                                          <strong>Pratiche specifiche:</strong>
                                          <ul>
                                            {sub.practices.map(
                                              (practice, idx) => (
                                                <li key={idx}>{practice}</li>
                                              )
                                            )}
                                          </ul>
                                          <a
                                            href={`https://wa.me/390612345678?text=Info: ${service.title} - ${sub.title}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn--primary btn--small"
                                          >
                                            <FaWhatsapp /> Chiedi Info
                                          </a>
                                        </div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            ) : (
                              <div className="simple-service">
                                <strong>Pratiche che gestiamo:</strong>
                                <ul>
                                  {service.practices.map((practice, idx) => (
                                    <li key={idx}>{practice}</li>
                                  ))}
                                </ul>
                                <a
                                  href={`https://wa.me/390612345678?text=Info: ${service.title}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn btn--primary"
                                >
                                  <FaWhatsapp /> Richiedi Informazioni
                                </a>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiziPage;
