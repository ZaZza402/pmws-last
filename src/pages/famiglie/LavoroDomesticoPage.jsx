import React from "react";
import GenericServicePage from "../GenericServicePage";
import { lavoroDomesticoData } from "../../data/rich-content/lavoro-domestico";

const LavoroDomesticoPage = () => {
  return <GenericServicePage serviceData={lavoroDomesticoData} />;
};

export default LavoroDomesticoPage;
