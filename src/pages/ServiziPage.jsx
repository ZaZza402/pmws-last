import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { 
  FaWhatsapp, 
  FaChevronRight, 
  FaSearch,
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
  FaLandmark
} from "react-icons/fa";
import PageTransition from "../components/PageTransition";
import { allServices, serviceCategories } from "../servicesData";
import "./ServiziPage.css";

// Icon mapping helper
const getIconComponent = (iconName) => {
  const icons = {
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
  
  const IconComponent = icons[iconName] || FaPassport;
  return <IconComponent />;
};

const SubServiceCard = ({ subservice, parentTitle }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="subservice-card">
      <div 
        className="subservice-header" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="subservice-number">
          {subservice.id.split('-')[1]}
        </div>
        <div className="subservice-title-area">
          <h4>{subservice.title}</h4>
          <p className="subservice-desc">{subservice.description}</p>
        </div>
        <button 
          className={`subservice-toggle ${isExpanded ? 'expanded' : ''}`}
          aria-label={isExpanded ? "Chiudi dettagli" : "Mostra dettagli"}
        >
          <FaChevronRight />
        </button>
      </div>
      
      {isExpanded && (
        <div className="subservice-details">
          <strong className="practices-label">Pratiche specifiche:</strong>
          <ul className="practices-list">
            {subservice.practices.map((practice, idx) => (
              <li key={idx}>{practice}</li>
            ))}
          </ul>
          <a
            className="btn btn--primary btn--small"
            href={`https://wa.me/390612345678?text=Buongiorno%2C%20vorrei%20informazioni%20su%3A%20${encodeURIComponent(
              parentTitle + " - " + subservice.title
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            Chiedi Info
          </a>
        </div>
      )}
    </div>
  );
};

const ServiceCard = ({ service, isExpanded, onToggle }) => {
  const hasSubservices = service.subservices && service.subservices.length > 0;

  return (
    <article 
      id={service.id} 
      className={`service-card ${isExpanded ? 'expanded' : ''} ${service.featured ? 'featured' : ''}`}
    >
      <div className="service-card-header" onClick={onToggle}>
        <div className="service-icon-badge">
          <span className="service-icon">{getIconComponent(service.icon)}</span>
        </div>
        <div className="service-main-content">
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>
          {hasSubservices && (
            <span className="subservices-count">
              {service.subservices.length} sotto-servizi disponibili
            </span>
          )}
        </div>
        <button 
          className={`service-expand-btn ${isExpanded ? 'expanded' : ''}`}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? "Chiudi" : "Espandi"}
        >
          <FaChevronRight />
        </button>
      </div>

      {isExpanded && (
        <div className="service-card-body">
          {hasSubservices ? (
            <div className="subservices-container">
              <div className="subservices-header">
                <h4>Seleziona il servizio specifico:</h4>
              </div>
              <div className="subservices-grid">
                {service.subservices.map((sub) => (
                  <SubServiceCard 
                    key={sub.id} 
                    subservice={sub} 
                    parentTitle={service.title}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="simple-service-details">
              <strong className="practices-label">Pratiche che gestiamo:</strong>
              <ul className="practices-list">
                {service.practices.map((practice, idx) => (
                  <li key={idx}>{practice}</li>
                ))}
              </ul>
              <a
                className="btn btn--primary"
                href={`https://wa.me/390612345678?text=Buongiorno%2C%20vorrei%20informazioni%20su%3A%20${encodeURIComponent(
                  service.title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
                Richiedi Informazioni
              </a>
            </div>
          )}
        </div>
      )}
    </article>
  );
};

const ServiziPage = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredServices, setFilteredServices] = useState(allServices);
  const [expandedId, setExpandedId] = useState(null);

  // Handle direct linking
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          setExpandedId(hash);
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    }
  }, [location]);

  // Filter services
  useEffect(() => {
    let filtered = allServices;

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(s => s.category === selectedCategory);
    }

    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(service => {
        const matchesMain = 
          service.title.toLowerCase().includes(term) ||
          service.description.toLowerCase().includes(term) ||
          service.practices?.some(p => p.toLowerCase().includes(term));
        
        const matchesSub = service.subservices?.some(sub =>
          sub.title.toLowerCase().includes(term) ||
          sub.description.toLowerCase().includes(term) ||
          sub.practices?.some(p => p.toLowerCase().includes(term))
        );

        return matchesMain || matchesSub;
      });
    }

    setFilteredServices(filtered);
  }, [searchTerm, selectedCategory]);

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getCategoryCount = (category) => {
    return allServices.filter(s => s.category === category).length;
  };

  return (
    <PageTransition>
      <title>Tutti i Servizi - Immigrazione e CAF a Roma | PuntoMigrare</title>
      <meta
        name="description"
        content="Scopri in dettaglio tutti i nostri servizi: pratiche di immigrazione, CAF e patronato, contratti domestici e molto altro. Servizi completi con sotto-categorie specializzate."
      />

      <section className="services-page">
        <div className="services-hero">
          <div className="container">
            <h1>I Nostri Servizi Completi</h1>
            <p className="hero-subtitle">
              Esplora tutti i servizi nel dettaglio. Clicca su ogni servizio per scoprire le sotto-categorie e le pratiche specifiche che possiamo gestire per te.
            </p>

            {/* Search Bar */}
            <div className="search-wrapper">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Cerca per nome o tipo di pratica (es. 'rinnovo', '730', 'successione'...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              {searchTerm && (
                <button 
                  className="search-clear"
                  onClick={() => setSearchTerm("")}
                  aria-label="Cancella ricerca"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="services-content">
          <div className="container-wide">
            <div className="services-layout">
              {/* Sidebar Navigation */}
              <aside className="services-sidebar">
                <div className="sidebar-sticky">
                  <h3 className="sidebar-title">Categorie</h3>
                  <nav className="category-nav">
                    <button
                      className={`category-btn ${selectedCategory === "all" ? "active" : ""}`}
                      onClick={() => setSelectedCategory("all")}
                    >
                      <span>Tutti i Servizi</span>
                      <span className="category-count">{allServices.length}</span>
                    </button>
                    {serviceCategories.map((cat) => (
                      <button
                        key={cat}
                        className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
                        onClick={() => setSelectedCategory(cat)}
                      >
                        <span>{cat}</span>
                        <span className="category-count">{getCategoryCount(cat)}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Services Grid */}
              <main className="services-main">
                {filteredServices.length > 0 ? (
                  <div className="services-grid">
                    {filteredServices.map((service) => (
                      <ServiceCard
                        key={service.id}
                        service={service}
                        isExpanded={expandedId === service.id}
                        onToggle={() => handleToggle(service.id)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="no-results">
                    <div className="no-results-icon">🔍</div>
                    <h3>Nessun servizio trovato</h3>
                    <p>
                      Prova a modificare i termini di ricerca o la categoria selezionata.
                      <br />
                      Non trovi quello che cerchi? <a href="/contatti">Contattaci</a> direttamente.
                    </p>
                    <button 
                      className="btn btn--outline"
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory("all");
                      }}
                    >
                      Mostra tutti i servizi
                    </button>
                  </div>
                )}
              </main>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ServiziPage;
