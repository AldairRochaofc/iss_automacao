import pedidos from '../Pages/consultaPedidosPage';

class ConsultaPedidoValidation {
  validationPedidoCarregado() {
    cy.contains('td', 'Ver detalhes').find('a');
    pedidos.elements.verDetalhesPedido().should('have.text', 'Ver detalhes');
  }

  validationMultiplosPedidos() {
    cy.contains('td', 'Ver detalhes').find('a');
    pedidos.elements.verDetalhesPedido().should('include.text', 'Ver detalhes');

    cy.get('tbody tr').should('have.length', 4);
  }

  validationAtendimentoRealizado() {
    cy.contains('h5', 'Atendimento Realizado!');
    cy.get('div[class="modal-dialog modal-lg modal-sucesso"]').should('include.text', 'Foi gerado um número de protocolo do atendimento');
  }
}

export default new ConsultaPedidoValidation();
