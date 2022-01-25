import { cleanup } from "@testing-library/react";
import {
  navigateToLocalhost,
  addTestQuestion,
  deleteQuestion,
} from "./testUtils-E2E.js";

describe("Logged in user processes", () => {
  beforeEach(() => {
    navigateToLocalhost();
  });
  afterEach(() => {
    cleanup;
  });

  it("Following admin processes to add question", () => {
    cy.contains("Admin").click();
    cy.contains("Edit Test Quiz").click();
    cy.url().should("include", "/admin/edit");
    addTestQuestion();
    cy.get("Form")
      .contains("Fake question here")
      .should("have.value", "Fake question here");
    deleteQuestion("Fake question here");
  });

  it("Following admin processes to update", () => {
    cy.contains("Admin").click();
    cy.url().should("include", "/admin");
    cy.contains("Edit Test Quiz").click();
    addTestQuestion();
    cy.get("Form").contains("Test answer").type(" is weird");
    cy.contains("Save updates").click();
    cy.contains("Close").click();
    cy.get("Form")
      .contains("Test answer is weird")
      .should("have.value", "Test answer is weird");
    deleteQuestion("Test answer is weird");
  });
});
