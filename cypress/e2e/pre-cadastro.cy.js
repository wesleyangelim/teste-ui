/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    it('Deve completar o pré cadastro com sucesso', () => {
        let firstNameFaker = faker.person.firstName()
        let lastNameFaker = faker.person.lastName()
        let emailFaker = faker.internet.email(firstNameFaker)

        cy.get('[name="email"]').type(emailFaker)
        cy.get('.register > :nth-child(2) > [name="password"]').type('teste@1234')
        cy.get('[name="register"]').click()
        
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('[name="account_first_name"]').type(firstNameFaker)
        cy.get('[name="account_last_name"]').type(lastNameFaker)
        cy.get('[name="save_account_details"]').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')  
    });




});