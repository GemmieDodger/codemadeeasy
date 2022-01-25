export const addTestQuestion = () => {
        cy.get('#addQuestion').type('Fake question here').should('have.value','Fake question here')
        cy.get('#addQuestionCode').type("const num = 0 ").should('have.value',"const num = 0 ")
        cy.get('#addQuestionAnswer1').type('Test answer').should('have.value','Test answer')
        cy.get('#addQuestionAnswer2').type('Test answer').should('have.value','Test answer')
        cy.get('#addQuestionAnswer3').type('Test answer').should('have.value','Test answer')
        cy.get('#addQuestionBoolean').select('true').should('have.value','true')
        cy.contains('Add Question').click()
}

export const navigateToLocalhost = () => {
    cy.visit('http://localhost:3000/')
}

export const deleteQuestion = (question) => {
    cy.get('Form').contains(question)
    cy.contains('Delete').click() 
    cy.contains('Close').click() 
}
