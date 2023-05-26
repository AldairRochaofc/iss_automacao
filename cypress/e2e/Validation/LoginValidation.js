class LoginValidation {
  validationLoginSucess() {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.contains('Consulta');
    cy.contains('Relatórios');
    cy.contains('Dashboard');

    // LoginPage.validationLoginSuccess();
  }
}

export default new LoginValidation();
