/// <reference types = "Cypress"/>

import { openCart } from "../e2e/locators/allLocators";

describe("Challenge", function () {
  beforeEach(function () {
    cy.visit("/");
  });
  it.skip("tests the", function () {
    cy.get(openCart.searchBar).should("be.visible");
    cy.get(openCart.searchBar).type("iphone");
    cy.get(openCart.btnSearch).click();
    cy.scrollTo("bottom");
    cy.get(openCart.Product).click();
    cy.get(openCart.btnCart).click();
    cy.get(openCart.Alert).should("be.visible");
    cy.get(openCart.Alert).should("have.text", openCart.successMsg);
  });
});
