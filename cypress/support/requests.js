/// <reference types="cypress" />

const apiPath = Cypress.env('baseApi');

Cypress.Commands.add('requestGet', (route, queryParams) => {
  const options = {
    method: 'GET',
    url: `${apiPath}${route}${queryParams}`,
    failOnStatusCode: false,
  };

  cy.api(options).then(($response) => $response);
});

Cypress.Commands.add('requestGetCodeError', (route, queryParams) => {
  const options = {
    method: 'GET',
    url: `${apiPath}${route}${queryParams}`,
    failOnStatusCode: false,
  };

  cy.api(options).then(($response) => $response);
});

Cypress.Commands.add('requestPost', (route, body) => {
  const options = {
    method: 'POST',
    url: `${apiPath}${route}`,
    body,
  };

  cy.api(options).then(($response) => $response);
});

Cypress.Commands.add('requestPostCodeError', (route, body) => {
  const options = {
    method: 'POST',
    url: `${apiPath}${route}`,
    failOnStatusCode: false,
    body,
  };

  cy.api(options).then(($response) => $response);
});
