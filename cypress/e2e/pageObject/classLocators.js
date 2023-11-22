class openCart {
  visit() {
    cy.get("/");
  }
  btnSearch() {
    return cy.get(".input-group-btn > .btn").click();
  }
  cartButton() {
    cy.get("#cart > .btn");
  }

  optionBar() {
    cy.get(".collapse").click();
  }
  // footer: "footer",
  // Product: ".img-responsive",
  // btnCart: "#button-cart",
  // Alert: ".alert",
  // successMsg: "Success: You have added iPhone to your shopping cart!×",
}
class search {
  // search: ".searchbox",
  // searchField: "#search-field",
  // resultTitlle: ".search-title",
  // grid: ".content > :nth-child(2)",
}
