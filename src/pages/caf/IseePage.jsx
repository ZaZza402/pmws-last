// src/pages/caf/IseePage.jsx
import React from "react";
import CafServiceDetailPage from "./CafServiceDetailPage";
import { cafIsee } from "../../data/rich-content/caf-isee";

const IseePage = () => {
  return <CafServiceDetailPage serviceData={cafIsee} />;
};

export default IseePage;
