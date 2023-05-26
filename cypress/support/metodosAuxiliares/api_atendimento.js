/// <reference types="Cypress" />

const atendimento = Cypress.config('atendimento');

Cypress.Commands.add('listarIncidentes', (partner, apikey, page, perpage, dateStart, dateEnd) => {
  cy.api({
    method: 'GET',
    url: `${atendimento}ab2b/api/incidents?page=${page}&perpage=${perpage}&createdStart=${dateStart}&createdEnd=${dateEnd}`,
    headers: {
      'x-consumer-tags': partner,
      apiKey: apikey,
    },
    failOnStatusCode: false,
  });
});

Cypress.Commands.add('obterIncidente', (partner, apikey, incidenteID) => {
  cy.api({
    method: 'GET',
    url: `${atendimento}ab2b/api/incidents/${incidenteID}`,
    headers: {
      'x-consumer-tags': partner,
      apiKey: apikey,
    },
    failOnStatusCode: false,
  });
});

Cypress.Commands.add('obterComentarios', (partner, apikey, incidenteID) => {
  cy.api({
    method: 'GET',
    url: `${atendimento}ab2b/api/incidents/${incidenteID}/comments`,
    headers: {
      'x-consumer-tags': partner,
      apiKey: apikey,
    },
    failOnStatusCode: false,
  });
});

Cypress.Commands.add('obterAnexos', (partner, apikey, incidenteID) => {
  cy.api({
    method: 'GET',
    url: `${atendimento}ab2b/api/incidents/${incidenteID}/attachments`,
    headers: {
      'x-consumer-tags': partner,
      apiKey: apikey,
    },
    failOnStatusCode: false,
  });
});

Cypress.Commands.add('obterAnexoseComentario', (partner, apikey, incidenteID, anexoID) => {
  cy.api({
    method: 'GET',
    url: `${atendimento}ab2b/api/fileattachments/${incidenteID}/${anexoID}/download-attachments`,
    headers: {
      'x-consumer-tags': partner,
      apiKey: apikey,
    },
    failOnStatusCode: false,
  });
});

Cypress.Commands.add('obterMotivos', (partner, apikey) => {
  cy.api({
    method: 'GET',
    url: `${atendimento}ab2b/api/reasons`,
    headers: {
      'x-consumer-tags': partner,
      apiKey: apikey,
    },
    failOnStatusCode: false,
  });
});

Cypress.Commands.add('criarIncidente', (partner, apikey, requisicao) => {
  cy.api({
    method: 'POST',
    url: `${atendimento}ab2b/api/incidents`,
    headers: {
      'x-consumer-tags': partner,
      apiKey: apikey,
    },
    failOnStatusCode: false,
    body: requisicao,
  });
});

Cypress.Commands.add('inserirComentario', (partner, apikey, requisicao, orderID) => {
  cy.api({
    method: 'POST',
    url: `${atendimento}ab2b/api/incidents/${orderID}/comment`,
    headers: {
      'x-consumer-tags': partner,
      apiKey: apikey,
    },
    failOnStatusCode: false,
    body: requisicao,
  });
});

Cypress.Commands.add('inserirComentarioeAnexo', (partner, apikey, requisicao, orderID) => {
  cy.api({
    method: 'POST',
    url: `${atendimento}ab2b/api/incidents/${orderID}/commentandattachments`,
    headers: {
      'x-consumer-tags': partner,
      apiKey: apikey,
    },
    failOnStatusCode: false,
    body: requisicao,
  });
});

Cypress.Commands.add('inserirAnexo', (partner, apikey, requisicao, orderID) => {
  cy.api({
    method: 'POST',
    url: `${atendimento}ab2b/api/fileattachments/${orderID}/attachments`,
    headers: {
      'x-consumer-tags': partner,
      apiKey: apikey,
    },
    failOnStatusCode: false,
    body: requisicao,
  });
});
