import { navigateToLocalhost, addTestQuestion, deleteQuestion } from './testUtils-E2E.js';

describe('Logged out user processes', () => {
    beforeEach(() => {
        navigateToLocalhost();
        cy.contains('Learn').click()
        cy.contains('Test Quiz').click()
        cy.url().should('include', '/quiz')
    });

    it('Answer questions and return to home on completion', () => {
        cy.get('#answerOption0').click()
        cy.get('#answerOption1').click()
        cy.contains('Go back to Home').click()
        cy.url().should('include', '/')
    });
  })