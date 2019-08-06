describe("Basic functionality", function () {
  it("Adds an item", function () {
    cy.visit("/");
    cy.get(".App")
      .contains("Waffle House")
      .should("not.exist");
    cy.get(".App #itemInput").type("Waffle House");
    cy.get('.App input[type="submit"').click();
    cy.get(".App #itemInput").type("Burger King");
    cy.get('.App input[type="submit"').click();
    cy.get(".App #itemInput").type("On Tap");
    cy.get('.App input[type="submit"').click();
    cy.get(".listItem").contains("Waffle House");
    cy.get(".listItem").contains("Burger King");
    cy.get(".listItem").contains("On Tap");
    cy.get("#item_1 .closeItem").click();
    cy.get(".App")
      .contains("Burger King")
      .should("not.exist");
  });
});
