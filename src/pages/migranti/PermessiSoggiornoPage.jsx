// src/pages/migranti/PermessiSoggiornoPage.jsx

import React from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  Users,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Home,
  Shield,
  RefreshCw,
} from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import WhatsAppPopup from "../../components/WhatsAppPopup";
import SEO from "../../components/SEO";
import "./PermessiSoggiornoPage.css";

/**
 * Permessi di Soggiorno Category Page
 * Editorial layout showing all permit types
 */
const PermessiSoggiornoPage = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Servizi", path: "/servizi" },
    { label: "Permessi di Soggiorno" },
  ];

  return (
    <div className="servizi-hub">
      <SEO
        title="Permessi di Soggiorno: Guida Completa"
        description="Assistenza per tutte le tipologie di Permesso di Soggiorno: Lavoro, Studio, Famiglia, Attesa Occupazione. Prima richiesta e rinnovi."
        canonical="/servizi/permessi-di-soggiorno"
      />
      <div className="container">
        <Breadcrumb items={breadcrumbItems} />

        {/* Editorial Header */}
        <AnimateOnScroll animation="fade-up" delay={100}>
          <header className="editorial-header">
            <p className="editorial-kicker">Permessi di Soggiorno</p>
            <h1 className="editorial-headline">
              Tutti i Tipi di Permesso <br />
              che Gestiamo per Te
            </h1>
            <p className="editorial-deck">
              Dalla prima richiesta agli aggiornamenti, ti assistiamo con ogni
              tipologia di permesso di soggiorno. Scegli il servizio di cui hai
              bisogno.
            </p>
          </header>
        </AnimateOnScroll>

        {/* Featured Permit Categories */}
        <AnimateOnScroll animation="fade-up" delay={150}>
          <section className="permit-featured">
            <h2 className="permit-featured__title">Categorie Principali</h2>
            <div className="permit-featured__grid">
              <Link
                to="/servizi/permessi-di-soggiorno/lavoro-subordinato"
                className="permit-card"
              >
                <div className="permit-card__header">
                  <div className="permit-card__icon">
                    <Briefcase size={24} strokeWidth={1.5} />
                  </div>
                  <div className="permit-card__content">
                    <h3 className="permit-card__title">Lavoro Subordinato</h3>
                    <span className="permit-card__count">4 tipi</span>
                  </div>
                </div>
                <p className="permit-card__description">
                  Per dipendenti e lavoratori stagionali
                </p>
              </Link>

              <Link
                to="/servizi/permessi-di-soggiorno/lavoro-autonomo"
                className="permit-card"
              >
                <div className="permit-card__header">
                  <div className="permit-card__icon">
                    <Briefcase size={24} strokeWidth={1.5} />
                  </div>
                  <div className="permit-card__content">
                    <h3 className="permit-card__title">Lavoro Autonomo</h3>
                    <span className="permit-card__count">3 tipi</span>
                  </div>
                </div>
                <p className="permit-card__description">
                  Per imprenditori e liberi professionisti
                </p>
              </Link>

              <Link
                to="/servizi/permessi-di-soggiorno/studio-formazione"
                className="permit-card"
              >
                <div className="permit-card__header">
                  <div className="permit-card__icon">
                    <GraduationCap size={24} strokeWidth={1.5} />
                  </div>
                  <div className="permit-card__content">
                    <h3 className="permit-card__title">Studio e Formazione</h3>
                    <span className="permit-card__count">4 tipi</span>
                  </div>
                </div>
                <p className="permit-card__description">
                  Per studenti, ricercatori e tirocinanti
                </p>
              </Link>

              <Link
                to="/servizi/permessi-di-soggiorno/famiglia-minori"
                className="permit-card"
              >
                <div className="permit-card__header">
                  <div className="permit-card__icon">
                    <Users size={24} strokeWidth={1.5} />
                  </div>
                  <div className="permit-card__content">
                    <h3 className="permit-card__title">Famiglia e Minori</h3>
                    <span className="permit-card__count">3 tipi</span>
                  </div>
                </div>
                <p className="permit-card__description">
                  Ricongiungimento e motivi familiari
                </p>
              </Link>

              <Link
                to="/servizi/permessi-di-soggiorno/residenza-elettiva"
                className="permit-card"
              >
                <div className="permit-card__header">
                  <div className="permit-card__icon">
                    <Home size={24} strokeWidth={1.5} />
                  </div>
                  <div className="permit-card__content">
                    <h3 className="permit-card__title">Residenza Elettiva</h3>
                    <span className="permit-card__count">2 tipi</span>
                  </div>
                </div>
                <p className="permit-card__description">
                  Per pensionati e benestanti
                </p>
              </Link>

              <Link
                to="/servizi/permessi-di-soggiorno/protezione-casi-speciali"
                className="permit-card"
              >
                <div className="permit-card__header">
                  <div className="permit-card__icon">
                    <Shield size={24} strokeWidth={1.5} />
                  </div>
                  <div className="permit-card__content">
                    <h3 className="permit-card__title">
                      Protezione e Casi Speciali
                    </h3>
                    <span className="permit-card__count">4 tipi</span>
                  </div>
                </div>
                <p className="permit-card__description">
                  Asilo, apolidia e motivi religiosi
                </p>
              </Link>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Main Editorial Content */}
        <div className="editorial-content">
          {/* Quick Links by Category */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <section className="editorial-section">
              <header className="section-header">
                <div className="section-header__icon">
                  <FileText size={28} strokeWidth={1.5} />
                </div>
                <div className="section-header__content">
                  <h2 className="section-title">
                    Tutte le Tipologie per Categoria
                  </h2>
                  <p className="section-intro">
                    Esplora l'elenco completo dei permessi organizzati per
                    categoria. Clicca per vedere i dettagli.
                  </p>
                </div>
              </header>

              <div className="section-content">
                {/* Lavoro */}
                <div className="category-group">
                  <div className="category-group__header">
                    <Briefcase size={24} className="category-group__icon" />
                    <h3 className="category-group__title">Lavoro</h3>
                  </div>
                  <nav className="category-group__links">
                    <Link
                      to="/servizi/permessi-di-soggiorno/lavoro-subordinato"
                      className="category-group__link"
                    >
                      <span>Lavoro Subordinato</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      to="/servizi/permessi-di-soggiorno/lavoro-subordinato#lavoro-stagionale"
                      className="category-group__link category-group__link--sub"
                    >
                      <span>Lavoro Stagionale</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      to="/servizi/permessi-di-soggiorno/lavoro-subordinato#attesa-occupazione"
                      className="category-group__link category-group__link--sub"
                    >
                      <span>Attesa Occupazione</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      to="/servizi/permessi-di-soggiorno/lavoro-subordinato#casi-particolari"
                      className="category-group__link category-group__link--sub"
                    >
                      <span>Casi Particolari (Art. 27)</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      to="/servizi/permessi-di-soggiorno/lavoro-autonomo"
                      className="category-group__link"
                    >
                      <span>Lavoro Autonomo</span>
                      <ArrowRight size={16} />
                    </Link>
                  </nav>
                </div>

                {/* Studio e Formazione */}
                <div className="category-group">
                  <div className="category-group__header">
                    <GraduationCap size={24} className="category-group__icon" />
                    <h3 className="category-group__title">
                      Studio e Formazione
                    </h3>
                  </div>
                  <nav className="category-group__links">
                    <Link
                      to="/servizi/permessi-di-soggiorno/studio-formazione#studente"
                      className="category-group__link"
                    >
                      <span>Studente Universitario</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      to="/servizi/permessi-di-soggiorno/studio-formazione#alunno"
                      className="category-group__link"
                    >
                      <span>Alunno (Scuole Superiori)</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      to="/servizi/permessi-di-soggiorno/studio-formazione#ricercatore"
                      className="category-group__link"
                    >
                      <span>Ricercatore</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      to="/servizi/permessi-di-soggiorno/studio-formazione#tirocinante"
                      className="category-group__link"
                    >
                      <span>Tirocinante / Stage</span>
                      <ArrowRight size={16} />
                    </Link>
                  </nav>
                </div>

                {/* Famiglia e Minori */}
                <div className="category-group">
                  <div className="category-group__header">
                    <Users size={24} className="category-group__icon" />
                    <h3 className="category-group__title">Famiglia e Minori</h3>
                  </div>
                  <nav className="category-group__links">
                    <Link
                      to="/servizi/permessi-di-soggiorno/famiglia-minori#motivi-familiari"
                      className="category-group__link"
                    >
                      <span>Ricongiungimento Familiare</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      to="/servizi/permessi-di-soggiorno/famiglia-minori#affidamento"
                      className="category-group__link"
                    >
                      <span>Affidamento Minori</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      to="/servizi/permessi-di-soggiorno/famiglia-minori#attesa-cittadinanza"
                      className="category-group__link"
                    >
                      <span>Attesa Cittadinanza</span>
                      <ArrowRight size={16} />
                    </Link>
                  </nav>
                </div>

                {/* Residenza e Protezione */}
                <div className="category-group">
                  <div className="category-group__header">
                    <Home size={24} className="category-group__icon" />
                    <h3 className="category-group__title">
                      Residenza e Protezione
                    </h3>
                  </div>
                  <nav className="category-group__links">
                    <Link
                      to="/servizi/permessi-di-soggiorno/residenza-elettiva"
                      className="category-group__link"
                    >
                      <span>Residenza Elettiva</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      to="/servizi/permessi-di-soggiorno/protezione-casi-speciali#asilo"
                      className="category-group__link"
                    >
                      <span>Asilo Politico</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      to="/servizi/permessi-di-soggiorno/protezione-casi-speciali#apolide"
                      className="category-group__link"
                    >
                      <span>Status Apolide</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      to="/servizi/permessi-di-soggiorno/protezione-casi-speciali#religioso"
                      className="category-group__link"
                    >
                      <span>Motivi Religiosi</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      to="/servizi/permessi-di-soggiorno/protezione-casi-speciali#missione"
                      className="category-group__link"
                    >
                      <span>Missione</span>
                      <ArrowRight size={16} />
                    </Link>
                  </nav>
                </div>

                {/* Altre Pratiche */}
                <div className="category-group">
                  <div className="category-group__header">
                    <RefreshCw size={24} className="category-group__icon" />
                    <h3 className="category-group__title">
                      Rinnovi, Conversioni e Altro
                    </h3>
                  </div>
                  <nav className="category-group__links">
                    <Link
                      to="/servizi/permessi-di-soggiorno/conversione-duplicati#conversione"
                      className="category-group__link"
                    >
                      <span>Conversione Permesso</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      to="/servizi/permessi-di-soggiorno/permesso-ue-lungo-periodo"
                      className="category-group__link"
                    >
                      <span>Permesso UE Lungo Periodo</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      to="/servizi/permessi-di-soggiorno/conversione-duplicati#duplicato"
                      className="category-group__link"
                    >
                      <span>Duplicato Permesso</span>
                      <ArrowRight size={16} />
                    </Link>
                  </nav>
                </div>
              </div>
            </section>
          </AnimateOnScroll>

          {/* CTA Footer */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <aside className="editorial-cta">
              <h3>Hai Bisogno di Aiuto?</h3>
              <p>
                Contattaci per una consulenza personalizzata. Ti aiuteremo a
                scegliere il servizio giusto e a preparare tutta la
                documentazione necessaria.
              </p>
              <div className="editorial-cta__actions">
                <Link to="/contatti" className="btn btn--primary">
                  Contattaci
                </Link>
                <WhatsAppPopup
                  message="Vorrei informazioni sui vostri servizi."
                  position="bottom"
                  triggerElement={
                    <button className="btn btn--secondary">WhatsApp</button>
                  }
                />
              </div>
            </aside>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
};

export default PermessiSoggiornoPage;
