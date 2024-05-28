/// <reference types="cypress" />
describe("page", () => {
  it("works", () => {
    cy.visit("./index.html");
    cy.get("#clicked-01").should("have.text", "0");
    cy.get("#submitted-01").should("have.text", "0");
    cy.get("#btn-click").click();
    cy.get("#clicked-01").should("have.text", "1");
    cy.get("#submitted-01").should("have.text", "0");
    cy.get("#submit-click").click();
    cy.get("#clicked-01").should("have.text", "1");
    cy.get("#submitted-01").should("have.text", "1");
    cy.get("#btn-click").focus().type("{enter}");
    cy.get("#clicked-01").should("have.text", "2");
    cy.get("#submitted-01").should("have.text", "1"); // ENTER ON BUTTON SHOULD NOT SUBMIT FORM
  });
});
