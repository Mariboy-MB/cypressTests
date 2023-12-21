/// <reference types="cypress" />

const victorImage = () => cy.get('.card-img-top');
const backendButton = () => cy.get('#backend');
const frontendButton = () => cy.get('#frontend');
const cvButon = () => cy.get('.btn');
const backgroundImage = () => cy.get('.fundo');
const backgroundImageBackend = () => cy.get('#fundobackend');
const backgroundImageFrontend = () => cy.get('#fundofrontend');
const projectsPhpButton = () => cy.get('[href="https://calculatorvic.000webhostapp.com/"]');

Cypress.Commands.add('navigateToSite', () => {
    cy.visit('https://victorsantosjobs.netlify.app/');
});

Cypress.Commands.add('verifyHomePage', () => {
    victorImage().should('be.visible');
    backgroundImage().should('be.visible');
    backendButton().should('be.visible');
    frontendButton().should('be.visible');
    cvButon().should('be.visible');
});


Cypress.Commands.add('testBackendButton', () => {
    backgroundImage().should('exist');
    backendButton().trigger('mouseover');
    //backgroundImage().should('not.be.visible');
    backgroundImageBackend().should('be.visible');
    backendButton().click();
    cy.url().should('eq', 'https://victorsantosjobs.netlify.app/backend/backend');
});

Cypress.Commands.add('testFrontendButton', () => {
    backgroundImage().should('exist');
    frontendButton().trigger('mouseover');
    //frontendButton().should('not.be.visible');
    backgroundImageFrontend().should('be.visible');
    frontendButton().click();
    cy.url().should('eq', 'https://victorsantosjobs.netlify.app/frontend/frontend');
});

Cypress.Commands.add('testCvButton', () => {
    cvButon().click();
    cy.url().should('eq', 'https://victorsantosjobs.netlify.app/index2');
});

Cypress.Commands.add('navigateTobackendPage', () => {
    cy.visit('https://victorsantosjobs.netlify.app/backend/backend');
});

Cypress.Commands.add('verifyBeckendPage', () => {
    cy.contains('PHP').next()
        .should('have.text', 'Venho utilizando essa tecnologia com frequincia des de o ano de 2022.');
    
    cy.contains('Node.js').next()
        .should('have.text', 'Venho utilizando essa tecnologia com frequincia des de o ano de 2022.');

    cy.contains('Python').next()
        .should('have.text', 'Venho utilizando essa tecnologia com frequincia des de o ano de 2022.');
    
    //projectsPhpButton().click();
});