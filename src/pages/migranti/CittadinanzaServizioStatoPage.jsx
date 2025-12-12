import React from "react";
import GenericServicePage from "../GenericServicePage";
import { cittadinanzaServizioStatoData } from "../../data/rich-content/cittadinanza-servizio-stato";

const CittadinanzaServizioStatoPage = () => {
  return <GenericServicePage serviceData={cittadinanzaServizioStatoData} />;
};

export default CittadinanzaServizioStatoPage;
