import massa from '../../fixtures/massa-hlg.json';

const token = `Bearer ${Cypress.env('API_TOKEN')}`;

describe('Validações do Token', () => {
  it('Consultar uma Order de Pedido com Token Válido', () => {
    // eslint-disable-next-line max-len
    cy.consultarPedidos(token, massa.casasbahia.idPedidoVia, massa.casasbahia.codigoBandeira)
      .then((response) => {
        expect(response.status).to.equal(200);
        console.log(response.body);
        console.log(response);
      });
  });

  it('MEU TESTE', () => {
    cy.consultarPedidos(token, massa.casasbahia.idPedidoVia, massa.casasbahia.codigoBandeira)
      .then((response) => {
        expect(response.status).to.equal(200);
        const TokenRecuperado = response;
        const tokenAtual = Cypress.env('TokenRecuperado');
        cy.log(TokenRecuperado);

        // Recuperar token - sempre rodar função de recuperação do token para depois executar a ação.
        // guardar o tojken na seçã
      });
  });

  it('MEU TESTE EDU', () => {
    cy.getToken()
      .then((response) => {
        // cy.log(response);
        // cy.log(Cypress.session.getCurrentSessionData());
        //  cy.log(Cypress.session.getSession());
        // Recuperar token - sempre rodar função de recuperação do token para depois executar a ação.
        // guardar o tojken na seçã
      });
  });
});
