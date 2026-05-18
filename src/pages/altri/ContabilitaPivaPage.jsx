import React from "react";
import GenericServicePage from "../GenericServicePage";
import { contabilitaPivaData } from "../../data/rich-content/contabilita-piva";

const ContabilitaPivaPage = () => {
  return <GenericServicePage serviceData={contabilitaPivaData} />;
};

export default ContabilitaPivaPage;
