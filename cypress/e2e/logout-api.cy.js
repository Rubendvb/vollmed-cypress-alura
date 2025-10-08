describe('Teste de logout no frontend', () => {
  it('Deve desautenticar o usuário após o logout', () => {
    cy.login(Cypress.env('email'), Cypress.env('password'));
    // Visita a página em que está o botão de logout
    cy.visit('/dashboard');

    // Executa a ação de logout, como clicar em um botão
    cy.get('.sc-fLcnxK').click(); // Substitua com o seletor do botão de logout real

    // Verifica se o usuário foi desautenticado
    cy.window().its('localStorage.authToken').should('not.exist'); // Verifica se o token de autenticação foi removido do localStorage

    // Verifica se o usuário foi redirecionado para a página de login (opcional)
    cy.url().should('include', '/'); // Verifica se a URL contém a página de login

    // Adicione mais verificações conforme necessário, como a exibição de mensagens de sucesso, etc.
  });
});
