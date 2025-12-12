import React from "react";
import GenericServicePage from "../GenericServicePage";
import { ricongiungimentiFamiliariData } from "../../data/rich-content/ricongiungimenti-familiari";

const RicongiungimentiFamiliariPage = () => {
  return <GenericServicePage serviceData={ricongiungimentiFamiliariData} />;
};

export default RicongiungimentiFamiliariPage;
