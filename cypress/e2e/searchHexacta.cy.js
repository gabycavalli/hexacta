// Steps:
//     1. https://www.hexacta.com/
//     2. Click en el menú superior derecho "Search". Un campo de búsqueda se mostrará en pantalla.
//     3. Tipear el texto "Outsource". Un conjunto de resultados de búsqueda se mostrarán en pantalla.
//     4. Ver que en alguno de los resultados se encuentre el texto "What not to do when working with an outsourced software team"

/// <reference types = "Cypress"/>

import { hexacta } from "../e2e/locators/allLocators";
describe("Test", function () {
  it("Busqueda", function () {
    cy.visit("https://www.google.com/");
  });
});
