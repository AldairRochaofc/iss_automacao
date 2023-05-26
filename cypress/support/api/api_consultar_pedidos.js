const API_URL = Cypress.env('API_BASE_URL');
const token = `Bearer ${Cypress.env('API_TOKEN')}`;

// eslint-disable-next-line no-shadow
Cypress.Commands.add('consultarPedidos', (_token, idPedidoVia, codigoBandeira) => {
  cy.request({
    method: 'GET',
    url: `${API_URL}/orders/${idPedidoVia}?businessUnitId=${codigoBandeira}`,
    headers: {
      Authorization: token,
    },
    failOnStatusCode: false,
  });
});

