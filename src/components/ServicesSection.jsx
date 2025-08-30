import React from 'react';
import { Link } from 'react-router-dom';
import { FaPassport } from 'react-icons/fa';
import { MdFamilyRestroom } from 'react-icons/md';

const ServiceCard = ({ title, description, icon }) => (
  <article className="card" role="listitem">
    <div className="card__icon" aria-hidden="true">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="actions">
      <a className="btn btn--primary" href="/#prenota">Inizia da qui</a>
    </div>
  </article>
);

const ServicesSection = () => {
  const immigrationServices = [
    { 
      title: 'Permesso di Soggiorno', 
      description: 'Che sia la prima richiesta o un rinnovo, ti guidiamo passo dopo passo, senza stress e con la certezza di presentare tutto correttamente.',
      icon: <FaPassport size={32} color="#0A2E4E" />
    },
    { 
      title: 'Cittadinanza Italiana', 
      description: 'Realizzare il sogno di diventare cittadino italiano è un percorso importante. Noi siamo al tuo fianco per renderlo chiaro e lineare.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24">
          <rect x="2" y="6" width="20" height="12" rx="2" fill="#fff" stroke="#0A2E4E" strokeWidth="1"/>
          <rect x="2" y="6" width="6.66" height="12" rx="2" fill="#008C45"/>
          <rect x="15.33" y="6" width="6.66" height="12" rx="2" fill="#CD212A"/>
        </svg>
      )
    },
    { 
      title: 'Ricongiungimento Familiare', 
      description: 'Riunire la tua famiglia è la nostra priorità. Gestiamo tutta la documentazione per portare i tuoi cari al tuo fianco, il prima possibile.',
      icon: <MdFamilyRestroom size={32} color="#0A2E4E" />
    },
  ];

  return (
    <section id="servizi" className="section" aria-labelledby="servizi-title">
      <div className="container">
        <div className="section-title">
          <div>
            <h2 id="servizi-title">La Nostra Specializzazione: Immigrazione</h2>
            <p style={{marginTop: '0.5rem', maxWidth: '65ch'}}>Ci dedichiamo con passione ad aiutare le persone a costruire il loro futuro in Italia. Questi sono i nostri servizi principali.</p>
          </div>
        </div>

        <div className="cards mt-2" role="list">
          {immigrationServices.map(service => (
            <ServiceCard 
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        
        <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <Link className="btn btn--outline" to="/servizi">Scopri Tutti i Servizi (CAF e Altro)</Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;