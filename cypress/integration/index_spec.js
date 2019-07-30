describe("Basic functionality", function() {
  it("Adds an item", function() {
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
    cy.get(".ListItem").contains("Waffle House");
    cy.get(".ListItem").contains("Burger King");
    cy.get(".ListItem").contains("On Tap");
    cy.get("#item_1 .CloseItem").click();
    cy.get(".App")
      .contains("Burger King")
      .should("not.exist");
  });
});
