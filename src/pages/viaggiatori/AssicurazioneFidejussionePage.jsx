import React from "react";
import GenericServicePage from "../GenericServicePage";
import { assicurazioneFidejussioneData } from "../../data/rich-content/assicurazione-fidejussione";

const AssicurazioneFidejussionePage = () => {
  return <GenericServicePage serviceData={assicurazioneFidejussioneData} />;
};

export default AssicurazioneFidejussionePage;
