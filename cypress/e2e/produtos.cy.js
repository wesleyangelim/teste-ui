/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click();
    });

    it.only('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3;

        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click();
            cy.get('[class="variable-item button-variable-item button-variable-item-L"]')
            .click();
            cy.get('[class="variable-item button-variable-item button-variable-item-Purple"]')
            .click();
            cy.get('[class="input-text qty text"]').clear().type(quantidade)
            cy.get('.single_add_to_cart_button').click();
            
            cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade);
            cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.');
    });

});