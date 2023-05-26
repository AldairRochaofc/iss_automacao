// eslint-disable-next-line import/no-extraneous-dependencies
import 'cypress-localstorage-commands';

const usermail = Cypress.env('USER_EMAIL');
const password = Cypress.env('USER_PASSWORD');
const environment = `${Cypress.env('urlPortal')}`;

Cypress.Commands.add('loginSession', (_usermail, _password) => {
  // References:
  // https://docs.cypress.io/api/commands/session
  // https://www.cypress.io/blog/2021/08/04/authenticate-faster-in-tests-cy-session-command/
  // https://talkingabouttesting.com/2021/08/07/autentique-testes-mais-rapido-com-o-comando-cy-session/

  cy.session([usermail, password], () => {
    cy.visit(environment);
    cy.get('.navbar-toggle').click();
    cy.get(':nth-child(3) > [role="menuitem"]').click();

    // eslint-disable-next-line no-empty-pattern, no-shadow
    cy.origin(`${Cypress.env('urlOrigin')}`, { args: { usermail, password } }, ({ usermail, password }) => {
      cy.get('#email').type(usermail);
      cy.get('#password').type(password, { log: false });
      cy.get('#next').contains('Entrar').click();

      // Se for PRD
      if (`${Cypress.env('urlOrigin')}`.includes('prd')) {
        console.log('DENTRO DO IF DE PRD');
        cy.get('button[id="ReadOnlyEmail_ver_but_send"]').click();
      } else {
        console.log('Não faz nada, segue a vida');
      }
    });



    cy.contains('span', 'Consulta').should('be.visible');
  });
  cy.visit(environment);
  cy.saveLocalStorage();
  Cypress.session.getCurrentSessionData();
  cy.getAllLocalStorage();
});

const LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add('saveLocalStorage', () => {
  Object.keys(localStorage).forEach((key) => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add('restoreLocalStorage', () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});
