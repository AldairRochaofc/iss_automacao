/// <reference types="Cypress" />

const integracao = Cypress.config('integracao');

Cypress.Commands.add('obterIncidentesI', (token, page, perpage) => {
  cy.api({
    method: 'GET',
    url: `${integracao}/atendimentos/incidentes?pagina=${page}&itensPorPagina=${perpage}&consulta=1`,
    headers: {
      Authorization: token,
    },
    failOnStatusCode: false,
  });
});

Cypress.Commands.add('obterIncidenteI', (token, incidenteID) => {
  cy.api({
    method: 'GET',
    url: `${integracao}/atendimentos/incidentes/${incidenteID}`,
    headers: {
      Authorization: token,
    },
    failOnStatusCode: false,
  });
});

Cypress.Commands.add('obterComentariosI', (token, incidenteID) => {
  cy.api({
    method: 'GET',
    url: `${integracao}/atendimentos/incidentes/${incidenteID}/comentarios`,
    headers: {
      Authorization: token,
    },
    failOnStatusCode: false,
  });
});

Cypress.Commands.add('obterAnexosI', (token, incidenteID) => {
  cy.api({
    method: 'GET',
    url: `${integracao}/atendimentos/incidentes/${incidenteID}/anexos`,
    headers: {
      Authorization: token,
    },
    failOnStatusCode: false,
  });
});

Cypress.Commands.add('downloadAnexoI', (token, incidenteID, anexoID) => {
  cy.api({
    method: 'GET',
    url: `${integracao}/atendimentos/incidentes/${incidenteID}/anexos/${anexoID}`,
    headers: {
      Authorization: token,
    },
    failOnStatusCode: false,
  });
});

Cypress.Commands.add('obterMotivosI', (token) => {
  cy.api({
    method: 'GET',
    url: `${integracao}/atendimentos/motivos`,
    headers: {
      Authorization: token,
    },
    failOnStatusCode: false,
  });
});

Cypress.Commands.add('obterHistIncidenteI', (token, incidenteID) => {
  cy.api({
    method: 'GET',
    url: `${integracao}/atendimentos/incidentes/${incidenteID}/historicos?ordenar=0`,
    headers: {
      Authorization: token,
    },
    failOnStatusCode: false,
  });
});

Cypress.Commands.add('criarIncidenteIntI', (token, requisicao) => {
  cy.api({
    method: 'POST',
    url: `${integracao}/atendimentos/incidentes`,
    headers: {
      Authorization: token,
    },
    failOnStatusCode: false,
    body: requisicao,
  });
});

Cypress.Commands.add('adicionarComentarioI', (token, requisicao, incidenteID) => {
  cy.api({
    method: 'POST',
    url: `${integracao}/atendimentos/incidentes/${incidenteID}/comentarios`,
    headers: {
      Authorization: token,
    },
    failOnStatusCode: false,
    body: requisicao,
  });
});

Cypress.Commands.add('adicionarComentarioAnexoI', (token, requisicao, incidenteID) => {
  cy.api({
    method: 'POST',
    url: `${integracao}/atendimentos/incidentes/${incidenteID}/comentarios/anexos`,
    headers: {
      Authorization: token,
    },
    failOnStatusCode: false,
    body: requisicao,
  });
});

Cypress.Commands.add('adicionarAnexoI', (token, requisicao, incidenteID) => {
  cy.api({
    method: 'POST',
    url: `${integracao}/atendimentos/incidentes/${incidenteID}/anexos`,
    headers: {
      Authorization: token,
    },
    failOnStatusCode: false,
    body: requisicao,
  });
});
