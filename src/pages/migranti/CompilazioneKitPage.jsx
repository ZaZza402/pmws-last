import React from "react";
import GenericServicePage from "../GenericServicePage";
import { compilazioneKitData } from "../../data/rich-content/compilazione-kit";

const CompilazioneKitPage = () => {
  return <GenericServicePage serviceData={compilazioneKitData} />;
};

export default CompilazioneKitPage;
