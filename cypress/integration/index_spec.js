describe("Initial page load", function() {
  it('finds the content "type"', function() {
    cy.visit("localhost:3000");
    cy.contains("Edit src/App.js and save to reload.");
  });
});
