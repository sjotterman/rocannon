describe("Basic functionality", function() {
  it("Adds an item", function() {
    cy.visit("localhost:3000");
    cy.get(".App")
      .contains("Waffle House")
      .should("not.exist");
    cy.get(".App #itemInput").type("Waffle House");
    cy.get('.App input[type="submit"').click();
    cy.get(".ListItem").contains("Waffle House");
  });
});
