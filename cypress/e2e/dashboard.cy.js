describe('Usuário logado na página de dashboard', () => {
  beforeEach(() => {
    cy.login(Cypress.env('email'), Cypress.env('senha'));
  });

  it('Verifica página de redirecionamento no login com sucesso', () => {
    cy.visit('/dashboard');
    cy.url().should('eq', 'http://localhost:3000/dashboard');
  });

  it('Verifica página de redirecionamento no login com sucesso', () => {
    cy.visit('/dashboard');
    cy.url().should('eq', 'http://localhost:3000/dashboard');
  });
});
