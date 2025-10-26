// src/components/StructuredData.jsx

import React from "react";

const StructuredData = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "PuntoMigrare",
    image: "https://www.puntomigrare.it/logo.png",
    description:
      "CAF e Servizi per l'Immigrazione a Roma. Assistenza specializzata per permessi di soggiorno, cittadinanza, ricongiungimento familiare.",
    url: "https://www.puntomigrare.it",
    telephone: "+390612345678",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via del Fuoco Sacro, 97",
      addressLocality: "Roma",
      addressRegion: "RM",
      postalCode: "00133",
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "41.8856",
      longitude: "12.6110",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Thursday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Wednesday", "Friday"],
        opens: "09:00",
        closes: "13:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/puntomigrare",
      "https://www.instagram.com/puntomigrare",
    ],
    areaServed: {
      "@type": "City",
      name: "Roma",
    },
    serviceType: [
      "Servizi CAF",
      "Pratiche Immigrazione",
      "Permessi di Soggiorno",
      "Cittadinanza Italiana",
      "Ricongiungimento Familiare",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
};

export default StructuredData;
