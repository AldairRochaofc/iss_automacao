class LoginPage {
  elements = {
    menuHamburger: () => cy.get('.navbar-toggle'),
    menuItemEntrar: () => cy.get(':nth-child(3) > [role="menuitem"]'),
    inputFieldEmail: () => cy.get('#email'),
    inputFieldPassword: () => cy.get('input[id="password"]'),
    buttonNextEntrar: () => cy.get('#next'),
    labelConsulta: () => cy.get('div[id="consulta"]'),
    labelRelatorio: () => cy.get('div[id="relatorio"]'),
    labelDashboard: () => cy.get('div[id="dashboard"]'),
    buttonEnviarCodVerificacao: () => cy.get('button[id="ReadOnlyEmail_ver_but_send"]'),
    buttonVerificarCod: () => cy.get('button[id="ReadOnlyEmail_ver_but_verify"]'),
  };

  sendCodVerification() {
    this.elements.buttonEnviarCodVerificacao().click();
  }

  goToScreenLogin() {
    this.elements.menuHamburger().click();
    this.elements.menuItemEntrar().click();
  }

  typeEmailLogin(email) {
    if (!email) {
      throw new Error('Email não preenchido ou indefinido');
    }

    const emailInput = this.elements.inputFieldEmail();
    if (emailInput) {
      emailInput.type(email);
    }
  }

  typePasswordLogin(pass) {
    if (!pass) {
      throw new Error('Senha não preenchida ou indefinida');
    }

    const passInput = this.elements.inputFieldPassword();
    if (passInput) {
      passInput.type(pass);
    }
  }

  clickButtonLogin() {
    this.elements.buttonNextEntrar().click();
  }

  validationLoginSuccess() {
    this.elements.labelConsulta().should('have.text', 'Consulta');
    this.elements.labelRelatorio().should('have.text', 'Relatórios');
    this.elements.labelDashboard().should('have.text', 'Dashboard');
  }

  efetuarLogin() {
    // cy.session(['isaias.santos@via.com.br', 'Isa@pp2023'], () => {
    cy.visit(`${Cypress.env('urlportal')}`);
    cy.get('.navbar-toggle').click();
    cy.get(':nth-child(3) > [role="menuitem"]').click();

    cy.origin('https://vvb2bhlg.b2clogin.com', { args: {} }, ({ }) => {
      cy.get('#email').type(Cypress.env('USER_EMAIL'));
      cy.get('#password').type(Cypress.env('USER_PASSWORD'), { log: false });
      cy.get('#next').contains('Entrar').click();
    });

    // });
  }
}

export default new LoginPage();
