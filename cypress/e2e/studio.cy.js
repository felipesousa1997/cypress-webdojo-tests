describe('Studio', () => {
  it('Exemplo do Cypress Studio', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Deve Logar com Sucesso', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:3000');
    cy.get('#email').type('papito@webdojo.com');
    cy.get('#password').type('katana123');
    cy.get('.bg-\\[\\#8257E5\\]').click();
    
    cy.get('[data-cy="user-name"]')
        .should('have.text', 'Fernando Papito');
    /* ==== End Cypress Studio ==== */
  });
})