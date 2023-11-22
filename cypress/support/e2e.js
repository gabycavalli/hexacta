/// <reference types = "Cypress"/>

import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')
import "cypress-mochawesome-reporter/register";
//import "@cypress/grep";

//import registerCypressGrep from "@cypress/grep";
//registerCypressGrep();

// Alternatively you can use CommonJS syntax:
// require('./commands')
//require("cypress-xpath");

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
