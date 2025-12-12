// src/data/rich-content/index.js
// Aggregates all rich content services

import { lavoroSubordinato } from "./lavoro-subordinato";

// Add other services here as they are created
// import { famigliaMinori } from "./famiglia-minori";
// import { studioFormazione } from "./studio-formazione";

export const enhancedPermessiServices = [
  lavoroSubordinato,
  // famigliaMinori,
  // studioFormazione,
];

export default enhancedPermessiServices;
