import React from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const SEO = ({ title, description, canonical, type = "website", image }) => {
  const siteName = "PuntoMigrare";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const siteUrl = "https://www.puntomigrare.it";
  const fullCanonical = canonical
    ? `${siteUrl}${canonical}`
    : typeof window !== "undefined"
    ? window.location.href
    : "";

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content={siteName} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  canonical: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
};

export default SEO;
