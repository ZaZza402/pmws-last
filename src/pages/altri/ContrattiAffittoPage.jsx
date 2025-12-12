import React from "react";
import GenericServicePage from "../GenericServicePage";
import { contrattiAffittoData } from "../../data/rich-content/contratti-affitto";

const ContrattiAffittoPage = () => {
  return <GenericServicePage serviceData={contrattiAffittoData} />;
};

export default ContrattiAffittoPage;
