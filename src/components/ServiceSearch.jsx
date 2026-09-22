import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";
import { allServices } from "../servicesData";
import "./ServiceSearch.css";

const ServiceSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isStuck, setIsStuck] = useState(false);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  // Flatten and index services for search
  const searchIndex = useMemo(() => {
    const index = [];

    allServices.forEach((service) => {
      // Add main service
      index.push({
        id: service.id,
        title: service.title,
        shortTitle: service.shortTitle,
        path: service.path,
        category: service.category,
        description: service.description,
        keywords: [
          service.title,
          service.shortTitle,
          service.description,
          ...(service.practices || []),
        ]
          .join(" ")
          .toLowerCase(),
        type: "service",
      });

      // Add subservices if any
      if (service.subservices) {
        service.subservices.forEach((sub) => {
          index.push({
            id: sub.id,
            title: sub.title,
            path: sub.path || service.path, // Link to specific subservice page if available
            category: service.category,
            description: sub.description,
            parentTitle: service.title,
            keywords: [sub.title, sub.description, ...(sub.practices || [])]
              .join(" ")
              .toLowerCase(),
            type: "subservice",
          });
        });
      }
    });
    return index;
  }, []);

  // Filter results based on search term
  const results = useMemo(() => {
    if (!searchTerm.trim()) return [];

    const term = searchTerm.toLowerCase();
    return searchIndex
      .filter((item) => item.keywords.includes(term))
      .slice(0, 8); // Limit results
  }, [searchTerm, searchIndex]);

  // Handle sticky state
  useEffect(() => {
    const handleScroll = () => {
      setIsStuck(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const handleResultClick = () => {
    setIsOpen(false);
    setSearchTerm("");
    // Navigate is handled by Link, but we clear state
  };

  return (
    <div
      ref={containerRef}
      className={`service-search-container ${isStuck ? "is-stuck" : ""}`}
    >
      <div className="container">
        <div className="service-search-wrapper">
          <div className="service-search-input-group">
            <Search className="service-search-icon" size={20} />
            <input
              ref={inputRef}
              type="text"
              className="service-search-input"
              placeholder="Cerca un servizio (es. Cittadinanza, Visto, SPID...)"
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={() => setIsOpen(true)}
            />
            {searchTerm && (
              <button className="service-search-clear" onClick={clearSearch}>
                <X size={16} />
              </button>
            )}
          </div>

          {isOpen && searchTerm && (
            <div className="service-search-results">
              {results.length > 0 ? (
                results.map((result) => (
                  <Link
                    key={result.id}
                    to={result.path}
                    className="service-search-item"
                    onClick={() => handleResultClick(result.path)}
                  >
                    <div className="service-search-item-header">
                      <span className="service-search-item-title">
                        {result.type === "subservice"
                          ? `${result.parentTitle} > ${result.title}`
                          : result.title}
                      </span>
                      <span className="service-search-item-category">
                        {result.category}
                      </span>
                    </div>
                    <p className="service-search-item-desc">
                      {result.description}
                    </p>
                  </Link>
                ))
              ) : (
                <div className="service-search-empty">
                  Nessun servizio trovato per "{searchTerm}"
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceSearch;
