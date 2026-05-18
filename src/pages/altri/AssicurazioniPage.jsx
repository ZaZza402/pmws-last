import React from "react";
import GenericServicePage from "../GenericServicePage";
import { assicurazioniData } from "../../data/rich-content/assicurazioni";

const AssicurazioniPage = () => {
  return <GenericServicePage serviceData={assicurazioniData} />;
};

export default AssicurazioniPage;
