// src/components/PermessoRedirect.jsx
// Handles redirects from individual permit slugs to clustered pages with anchors

import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getClusterRoute } from "../data/permessiRoutingMap";

const PermessoRedirect = () => {
  const { slug } = useParams();
  const clusterRoute = getClusterRoute(slug);

  useEffect(() => {
    if (clusterRoute && clusterRoute.anchor) {
      // Wait for navigation to complete, then scroll to anchor
      setTimeout(() => {
        const element = document.getElementById(clusterRoute.anchor);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          // Add highlight effect
          element.classList.add("highlight-section");
          setTimeout(() => {
            element.classList.remove("highlight-section");
          }, 3000);
        }
      }, 100);
    }
  }, [clusterRoute]);

  // If no mapping found, go to 404
  if (!clusterRoute) {
    return <Navigate to="/404" replace />;
  }

  // Redirect to cluster page (anchor will be handled by useEffect above)
  return <Navigate to={clusterRoute.path} replace />;
};

export default PermessoRedirect;
