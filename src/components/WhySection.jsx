import React from 'react';
import { FaRegClock, FaLanguage } from 'react-icons/fa';
import { MdOutlineGppGood } from 'react-icons/md';

const WhyItem = ({ title, description, icon }) => (
    <div className="why__item" role="listitem">
        <span className="why__icon" aria-hidden="true">{icon}</span>
        <div>
            <strong>{title}</strong>
            <p className="mt-1" style={{margin:0}}>{description}</p>
        </div>
    </div>
);

const WhySection = () => {
  return (
    <section id="perche" className="section why" aria-labelledby="why-title">
      <div className="container why__grid">
        <div>
          <h2 id="why-title">Perché sceglierci?</h2>
          <p className="mt-2">Sappiamo che la burocrazia può essere un labirinto. Il nostro metodo è semplice: parole chiare, passaggi definiti e un accompagnamento costante. Mettiamo al centro le persone, non le pratiche.</p>
          
          <div className="why__list mt-3" role="list">
            <WhyItem 
              title="Il Tuo Tempo è Prezioso"
              description="Niente attese infinite. Ti diamo appuntamenti rapidi e seguiamo la tua pratica con la massima priorità, tenendoti sempre aggiornato."
              icon={<FaRegClock size={28} color="#0A2E4E" />}
            />
            <WhyItem 
              title="Nessuna Sorpresa, Solo Chiarezza"
              description="Ti spieghiamo ogni costo in modo semplice e trasparente prima di iniziare. Il nostro obiettivo è la tua tranquillità."
              icon={<MdOutlineGppGood size={28} color="#E87722" />}
            />
            <WhyItem 
              title="Parliamo la Tua Lingua"
              description="La comunicazione è fondamentale. Oltre all'italiano, parliamo inglese, rumeno e arabo per assicurarci che ogni dettaglio sia perfettamente compreso."
              icon={<FaLanguage size={28} color="#0A2E4E" />}
            />
          </div>
        </div>
        <figure className="panel" aria-hidden="true">
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop" alt="Ufficio accogliente e luminoso di PuntoMigrare" loading="lazy" style={{borderRadius:'16px'}}/>
        </figure>
      </div>
    </section>
  );
};

export default WhySection;