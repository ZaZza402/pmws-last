import React from "react";
import GenericServicePage from "../GenericServicePage";
import { consulenzaLegaleData } from "../../data/rich-content/consulenza-legale";

const ConsulenzaLegalePage = () => {
  return <GenericServicePage serviceData={consulenzaLegaleData} />;
};

export default ConsulenzaLegalePage;
