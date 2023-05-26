import './api/api_consultar_pedidos';
import './metodosAuxiliares/api_atendimento';
import './metodosAuxiliares/integracao_atendimento';
import './requests';
import '@shelex/cypress-allure-plugin';
import 'cypress-plugin-api';
import './commands';
import login from '../e2e/Pages/LoginPage';

require('cypress-grep')();
require('cypress-xpath');
require('cypress-plugin-api');

Cypress.SelectorPlayground.defaults({
  selectorPriority: ['data-test', 'data-testid', 'id', 'class', 'attributes', 'tag', 'nth-child'],
});

Cypress.on('uncaught:exception', (err, runnable) => false);

beforeEach(() => {
  cy.loginSession();
});

afterEach(() => {
  cy.saveLocalStorage();
});
