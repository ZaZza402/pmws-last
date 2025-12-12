import React from "react";
import GenericServicePage from "../GenericServicePage";
import { disbrigoPraticheData } from "../../data/rich-content/disbrigo-pratiche";

const DisbrigoPratichePage = () => {
  return <GenericServicePage serviceData={disbrigoPraticheData} />;
};

export default DisbrigoPratichePage;
