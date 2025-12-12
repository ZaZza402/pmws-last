import React from "react";
import GenericServicePage from "../GenericServicePage";
import { traduzioniAttiData } from "../../data/rich-content/traduzioni-atti";

const TraduzioniAttiPage = () => {
  return <GenericServicePage serviceData={traduzioniAttiData} />;
};

export default TraduzioniAttiPage;
