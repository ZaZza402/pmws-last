const fs = require("fs");
const path = require("path");

const baseUrl = "https://www.puntomigrare.it";

const routes = [
  // Main Pages
  "/",
  "/servizi",
  "/faq",
  "/contatti",
  "/privacy-policy",
  "/cookie-policy",

  // Category Pages
  "/servizi/permessi-di-soggiorno",
  "/servizi/cittadinanza-italiana",
  "/servizi/caf-patronato",

  // CAF Sub-pages
  "/servizi/caf-patronato/730",
  "/servizi/caf-patronato/isee",

  // Clustered Permessi Pages
  "/servizi/permessi-di-soggiorno/lavoro-subordinato",
  "/servizi/permessi-di-soggiorno/lavoro-autonomo",
  "/servizi/permessi-di-soggiorno/studio-formazione",
  "/servizi/permessi-di-soggiorno/famiglia-minori",
  "/servizi/permessi-di-soggiorno/residenza-elettiva",
  "/servizi/permessi-di-soggiorno/protezione-casi-speciali",
  "/servizi/permessi-di-soggiorno/permesso-ue-lungo-periodo",
  "/servizi/permessi-di-soggiorno/conversione-duplicati",

  // Cittadinanza Pages
  "/servizi/cittadinanza/residenza",
  "/servizi/cittadinanza/matrimonio",
  "/servizi/cittadinanza/iure-sanguinis",
  "/servizi/cittadinanza/nascita-italia",
  "/servizi/cittadinanza/matrimonio-estero",
  "/servizi/cittadinanza/servizio-stato",

  // Generic Service Pages
  "/servizi/migranti/ricongiungimenti-familiari",
  "/servizi/migranti/riconoscimento-titoli-di-studio",
  "/servizi/migranti/traduzioni-atti",
  "/servizi/viaggiatori/visti-italia",
  "/servizi/viaggiatori/mediazione-ambasciate",
  "/servizi/famiglie/gestione-lavoro-domestico",
  "/servizi/altri/successioni",
  "/servizi/altri/contratti-affitto",
  "/servizi/altri/consulenza-legale",
  "/servizi/altri/disbrigo-pratiche",
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    return `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), sitemap);
  console.log("Sitemap generated successfully!");
};

generateSitemap();
