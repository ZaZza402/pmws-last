// src/pages/caf/Modello730Page.jsx
import React from "react";
import CafServiceDetailPage from "./CafServiceDetailPage";
import { caf730 } from "../../data/rich-content/caf-730";

const Modello730Page = () => {
  return <CafServiceDetailPage serviceData={caf730} />;
};

export default Modello730Page;
