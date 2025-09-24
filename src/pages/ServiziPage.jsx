// src/pages/ServiziPage.jsx

import React, { useState, useEffect } from 'react';
import { allServices, serviceCategories } from '../servicesData';

// This is our new, expandable Service Card component
const ServiceAccordionItem = ({ service, isExpanded, onToggle }) => (
  <article className={`card service-accordion ${isExpanded ? 'expanded' : ''}`} role="listitem">
    <div className="service-header" onClick={onToggle}>
      <div className="service-title">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
      <button className="toggle-btn" aria-expanded={isExpanded}>
        <svg className="toggle-icon" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </div>
    <div className="service-details">
      <div className="service-details-content">
        <strong>Pratiche specifiche che gestiamo:</strong>
        <ul>
          {service.practices.map((practice, index) => (
            <li key={index}>{practice}</li>
          ))}
        </ul>
        <a className="btn btn--primary" href="/#prenota">Richiedi Info su Questo Servizio</a>
      </div>
    </div>
  </article>
);


const ServiziPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState(allServices);
  // This state will track the ID of the currently expanded card
  const [expandedId, setExpandedId] = useState(null); 

  useEffect(() => {
    const lowercasedFilter = searchTerm.toLowerCase();
    const filtered = allServices.filter(service =>
      service.title.toLowerCase().includes(lowercasedFilter) ||
      service.description.toLowerCase().includes(lowercasedFilter) ||
      service.practices.some(p => p.toLowerCase().includes(lowercasedFilter)) // Also search in sub-services
    );
    setFilteredServices(filtered);
    setExpandedId(null); // Collapse all cards on new search
  }, [searchTerm]);

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  const generateCategoryId = (category) => `category-${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`;

  return (
    <>
      <title>Tutti i Servizi - Immigrazione e CAF a Roma | PuntoMigrare</title>
      <meta name="description" content="Scopri in dettaglio tutti i nostri servizi: pratiche di immigrazione, CAF e patronato (730, ISEE, NASpI), contratti colf e badanti, e molto altro. Trova il supporto di cui hai bisogno." />
      <link rel="canonical" href="https://www.puntomigrare.it/servizi" />

      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h1>Tutti i Nostri Servizi, in Dettaglio</h1>
            <p className="mt-2" style={{ maxWidth: '70ch', margin: '0.5rem auto 0 auto' }}>
              Trova l'informazione precisa di cui hai bisogno. Esplora le categorie o usa la ricerca per filtrare istantaneamente ogni pratica.
            </p>
          </div>

          <div className="quick-nav">
            {serviceCategories.map(category => (
              <a key={category} href={`#${generateCategoryId(category)}`} className="btn btn--outline">
                {category}
              </a>
            ))}
          </div>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Cerca una pratica (es. 'rinnovo', '730', 'successione'...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="service-list">
            {serviceCategories.map(category => {
              const servicesInCategory = filteredServices.filter(s => s.category === category);
              if (servicesInCategory.length === 0) return null;
              
              return (
                <div key={category} id={generateCategoryId(category)} className="service-category">
                  <div className="category">
                    <strong style={category === "Immigrazione" ? { color: 'var(--orange)' } : {}}>{category.toUpperCase()}</strong>
                    <span className="divider" style={{ flex: 1 }}></span>
                  </div>
                  <div className="cards mt-2" role="list">
                    {servicesInCategory.map(service => (
                      <ServiceAccordionItem 
                        key={service.id} 
                        service={service}
                        isExpanded={expandedId === service.id}
                        onToggle={() => handleToggle(service.id)}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
            
            {filteredServices.length === 0 && (
                <div className="no-results">
                    <h3>Nessuna pratica trovata</h3>
                    <p>Prova a modificare i termini della tua ricerca. Se non trovi quello che cerchi, <a href="/contatti">contattaci</a>: è molto probabile che possiamo aiutarti.</p>
                </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiziPage;