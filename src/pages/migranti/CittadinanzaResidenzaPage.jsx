import React from "react";
import GenericServicePage from "../GenericServicePage";
import { cittadinanzaResidenzaData } from "../../data/rich-content/cittadinanza-residenza";

const CittadinanzaResidenzaPage = () => {
  return <GenericServicePage serviceData={cittadinanzaResidenzaData} />;
};

export default CittadinanzaResidenzaPage;
