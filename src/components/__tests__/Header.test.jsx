/* eslint-env vitest */
import { render } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

test("visualizza il titolo del sito", () => {
  const { container } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const brandText = container.querySelector(".brand__text");
  expect(brandText).toBeTruthy();
  // Normalizza gli spazi e verifica che ci siano sia "Punto" che "Migrare"
  const normalizedText = brandText.textContent.replace(/\s+/g, " ").trim();
  expect(normalizedText).toContain("Punto");
  expect(normalizedText).toContain("Migrare");
});