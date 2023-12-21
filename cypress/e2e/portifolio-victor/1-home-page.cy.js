/// <reference types="cypress" />

describe('Testing home page', () => {

    beforeEach(()=>{
        cy.navigateToSite();
    });

    it('Verify home page', () => {
        cy.verifyHomePage();
    });

    it('Testing backend button', () => {
        cy.testBackendButton();
    });

    it('Testing frontend button', () => {
        cy.testFrontendButton();
    });

    /* it('Testing cv button', () => {
        cy.testCvButton();
    }); */
});
