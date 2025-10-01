// src/components/DocumentChecklist.jsx
import React, { useState } from 'react';
import { immigrationProcedures, generalDocuments } from '../config/documentChecklist';
import './DocumentChecklist.css';

const DocumentChecklist = () => {
  const [selectedProcedure, setSelectedProcedure] = useState('');
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [showGeneral, setShowGeneral] = useState(false);

  const handleProcedureChange = (procedureKey) => {
    setSelectedProcedure(procedureKey);
    setCheckedItems(new Set()); // Clear checked items when procedure changes
    setShowGeneral(false);
  };

  const toggleCheck = (itemId) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(itemId)) {
      newCheckedItems.delete(itemId);
    } else {
      newCheckedItems.add(itemId);
    }
    setCheckedItems(newCheckedItems);
  };

  const getCompletionPercentage = () => {
    if (!selectedProcedure) return 0;
    
    const procedure = immigrationProcedures[selectedProcedure];
    const totalItems = procedure.documents.reduce((sum, category) => sum + category.items.length, 0);
    const checkedCount = checkedItems.size;
    
    return totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;
  };

  const printChecklist = () => {
    window.print();
  };

  return (
    <div className="document-checklist-container">
      <div className="checklist-header">
        <h2>📋 Lista Documenti per Immigrazione</h2>
        <p>Seleziona la tua pratica per vedere i documenti necessari</p>
      </div>

      {/* Procedure Selection */}
      <div className="procedure-selection">
        <label htmlFor="procedure-select">Tipo di Pratica:</label>
        <select 
          id="procedure-select"
          value={selectedProcedure} 
          onChange={(e) => handleProcedureChange(e.target.value)}
          className="procedure-select"
        >
          <option value="">-- Seleziona una pratica --</option>
          {Object.entries(immigrationProcedures).map(([key, procedure]) => (
            <option key={key} value={key}>
              {procedure.title}
            </option>
          ))}
        </select>
      </div>

      {/* Selected Procedure Details */}
      {selectedProcedure && (
        <div className="procedure-details">
          <div className="procedure-info">
            <h3>{immigrationProcedures[selectedProcedure].title}</h3>
            <p className="procedure-description">
              {immigrationProcedures[selectedProcedure].description}
            </p>
            
            {/* Progress Bar */}
            <div className="progress-section">
              <div className="progress-header">
                <span>Completamento: {getCompletionPercentage()}%</span>
                <button onClick={printChecklist} className="print-button">
                  🖨️ Stampa Lista
                </button>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${getCompletionPercentage()}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Document Categories */}
          <div className="document-categories">
            {immigrationProcedures[selectedProcedure].documents.map((category, categoryIndex) => (
              <div key={categoryIndex} className="document-category">
                <h4 className="category-title">
                  <span className="category-icon">📁</span>
                  {category.category}
                </h4>
                <div className="document-items">
                  {category.items.map((item, itemIndex) => {
                    const itemId = `${categoryIndex}-${itemIndex}`;
                    const isChecked = checkedItems.has(itemId);
                    
                    return (
                      <div key={itemIndex} className="document-item">
                        <label className={`document-label ${isChecked ? 'checked' : ''}`}>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleCheck(itemId)}
                            className="document-checkbox"
                          />
                          <span className="checkmark">✓</span>
                          <span className="document-text">{item}</span>
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* General Documents Toggle */}
          <div className="general-documents-toggle">
            <button 
              onClick={() => setShowGeneral(!showGeneral)}
              className="toggle-general-button"
            >
              {showGeneral ? '🔽' : '▶️'} {generalDocuments.title}
            </button>
          </div>

          {/* General Documents */}
          {showGeneral && (
            <div className="general-documents">
              <p className="general-description">{generalDocuments.description}</p>
              <div className="general-items">
                {generalDocuments.items.map((item, index) => (
                  <div key={index} className="general-item">
                    <span className="bullet">•</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Important Notes */}
          <div className="important-notes">
            <h4>⚠️ Note Importanti:</h4>
            <ul>
              <li>Tutti i documenti stranieri devono essere <strong>legalizzati e tradotti</strong> in italiano</li>
              <li>Le fotocopie devono essere <strong>accompagnate dai documenti originali</strong></li>
              <li>Verifica sempre i <strong>costi aggiornati</strong> sul sito ufficiale prima di effettuare i versamenti</li>
              <li>I tempi di elaborazione possono variare - contattaci per informazioni specifiche</li>
            </ul>
          </div>
        </div>
      )}

      {/* Call to Action */}
      {selectedProcedure && (
        <div className="cta-section">
          <div className="cta-content">
            <h3>🤝 Hai bisogno di assistenza?</h3>
            <p>I nostri esperti possono aiutarti con la preparazione dei documenti e la presentazione della pratica.</p>
            <div className="cta-buttons">
              <a href="#contatti" className="cta-button primary">
                📞 Contattaci
              </a>
              <a href="#mappa" className="cta-button secondary">
                📍 Come raggiungerci
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentChecklist;