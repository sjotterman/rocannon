describe("Basic functionality", function () {
  it("Can't click done if there are no items", function () {
    cy.visit("/");
    cy.get(".App")
      .contains("The Gastronomical Decision Engine");
    cy.get("#doneButton").click();
    cy.get(".App")
      .contains("The Gastronomical Decision Engine");
  });

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
    cy.get(".App #itemInput").type("McDonald's");
    cy.get('.App input[type="submit"').click();
    cy.get(".App #itemInput").type("Taco Bell");
    cy.get('.App input[type="submit"').click();
    cy.get(".listItem").contains("Waffle House");
    cy.get(".listItem").contains("Burger King");
    cy.get(".listItem").contains("On Tap");
    cy.get(".listItem").contains("McDonald's");
    cy.get(".listItem").contains("Taco Bell");
    cy.get("#item_1 .closeItem").click();
    cy.get(".App")
      .contains("Burger King")
      .should("not.exist");
    cy.get("#doneButton").click();
    // cy.get(".App").contains("Ranker");
    cy.get(".listItem#item_0").contains("Waffle House");
    cy.get(".listItem#item_1").contains("On Tap");
    cy.get(".listItem#item_2").contains("McDonald's");
    cy.get(".listItem#item_3").contains("Taco Bell");
    cy.get("#item_1 .voteItemUp").click();
    cy.get(".listItem#item_0").contains("On Tap");
    cy.get(".listItem#item_1").contains("Waffle House");
    cy.get(".listItem#item_2").contains("McDonald's");
    cy.get(".listItem#item_3").contains("Taco Bell");
    cy.get("#item_2 .voteItemDown").click();
    cy.get(".listItem#item_0").contains("On Tap");
    cy.get(".listItem#item_1").contains("Waffle House");
    cy.get(".listItem#item_2").contains("Taco Bell");
    cy.get(".listItem#item_3").contains("McDonald's");
    cy.get("#item_0 .voteItemUp").click();
    cy.get(".listItem#item_0").contains("On Tap");
    cy.get(".listItem#item_1").contains("Waffle House");
    cy.get(".listItem#item_2").contains("Taco Bell");
    cy.get(".listItem#item_3").contains("McDonald's");
    cy.get("#item_3 .voteItemDown").click();
    cy.get(".listItem#item_0").contains("On Tap");
    cy.get(".listItem#item_1").contains("Waffle House");
    cy.get(".listItem#item_2").contains("Taco Bell");
    cy.get(".listItem#item_3").contains("McDonald's");
  });
});
