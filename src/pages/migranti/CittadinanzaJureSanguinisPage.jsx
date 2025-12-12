import React from "react";
import GenericServicePage from "../GenericServicePage";
import { cittadinanzaJureSanguinisData } from "../../data/rich-content/cittadinanza-jure-sanguinis";

const CittadinanzaJureSanguinisPage = () => {
  return <GenericServicePage serviceData={cittadinanzaJureSanguinisData} />;
};

export default CittadinanzaJureSanguinisPage;
