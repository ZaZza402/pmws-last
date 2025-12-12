import React from "react";
import GenericServicePage from "../GenericServicePage";
import { riconoscimentoTitoliData } from "../../data/rich-content/riconoscimento-titoli";

const RiconoscimentoTitoliPage = () => {
  return <GenericServicePage serviceData={riconoscimentoTitoliData} />;
};

export default RiconoscimentoTitoliPage;
