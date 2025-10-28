import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaHome } from "react-icons/fa";
import "./Breadcrumb.css";

/**
 * Breadcrumb component with schema markup for SEO
 * @param {Array} items - Array of breadcrumb items { label, path }
 * Example: [{ label: "Home", path: "/" }, { label: "Servizi", path: "/servizi" }]
 */
const Breadcrumb = ({ items = [] }) => {
  // Always include Home as first item if not already there
  const breadcrumbItems = items[0]?.path === "/" ? items : [{ label: "Home", path: "/" }, ...items];

  // Generate schema.org BreadcrumbList markup
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.path ? `https://www.puntomigrare.it${item.path}` : undefined,
    })),
  };

  return (
    <>
      {/* Schema markup for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* Visual breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol className="breadcrumb-list">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            const isFirst = index === 0;

            return (
              <li key={index} className="breadcrumb-item">
                {!isLast ? (
                  <>
                    <Link to={item.path} className="breadcrumb-link">
                      {isFirst && <FaHome className="breadcrumb-home-icon" />}
                      <span>{item.label}</span>
                    </Link>
                    <FaChevronRight className="breadcrumb-separator" />
                  </>
                ) : (
                  <span className="breadcrumb-current" aria-current="page">
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
