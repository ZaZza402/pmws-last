import React from "react";
import GenericServicePage from "../GenericServicePage";
import { cittadinanzaNascitaData } from "../../data/rich-content/cittadinanza-nascita";

const CittadinanzaNascitaPage = () => {
  return <GenericServicePage serviceData={cittadinanzaNascitaData} />;
};

export default CittadinanzaNascitaPage;
