import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the login page", () => {
  cy.visit("/login");
});

When("I fill in the username and password", () => {
  cy.get("#username").type("admin");
  cy.get("#password").type("1234");
  cy.get("button[type=submit]").click();
});

Then("I should see the dashboard", () => {
  cy.url().should("include", "/dashboard");
});
