/// <reference types="cypress" />

context('Funcionalidade: Login', () => {

    it('Deve fazer login com sucesso' , () => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
        cy.get('#username').type('user1@ebac.com')
        cy.get('#password').type('usuario@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, user1')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido' , () => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
        cy.get('#username').type('sasasasa@teste.com')
        cy.get('#password').type('sasa@teste.com')
        cy.get('.woocommerce-form > .button').click()
    })

        it('Deve exibir uma mensagem de erro ao inserir senha inválida' , () => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
        cy.get('#username').type('usuario@teste.com')
        cy.get('#password').type('sasa@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail usuario@teste.com está incorreta. Perdeu a senha?')
    })
})