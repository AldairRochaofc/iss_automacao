/// <reference types="Cypress" />

import dados from '../../fixtures/integracao_atendimento.json';

describe('Testes da Api de Integração - Atendimento', () => {
  it('Obter Incidentes', () => {
    cy.obterIncidentesI(dados[0].token, dados[1].page, dados[1].perpage).should((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('Obter Incidente', () => {
    cy.obterIncidenteI(dados[0].token, dados[1].incidenteID).should((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('Obter Comentários', () => {
    cy.obterComentariosI(dados[0].token, dados[1].incidenteID).should((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('Obter Anexos', () => {
    cy.obterAnexosI(dados[0].token, dados[1].incidenteID).should((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('Download Anexos', () => {
    cy.downloadAnexoI(dados[0].token, dados[1].incidenteID, dados[1].anexoID).should((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('Obter Motivos', () => {
    cy.obterMotivosI(dados[0].token).should((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('Obter Histórico Incidente', () => {
    cy.obterHistIncidenteI(dados[0].token, dados[1].incidenteID).should((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('Criar Incidente', () => {
    cy.criarIncidenteIntI(dados[0].token, dados[2]).should((response) => {
      expect(response.status).to.equal(201);
    });
  });

  it('Inserir Comentários', () => {
    cy.criarIncidenteIntI(dados[0].token, dados[2]).then((response) => {
      const { id } = response.body.data[0];
      cy.adicionarComentarioI(dados[0].token, dados[3], id).should((response2) => {
        expect(response2.status).to.equal(201);
      });
    });
  });

  it('Inserir Comentários e Anexo', () => {
    cy.criarIncidenteIntI(dados[0].token, dados[2]).then((response) => {
      const { id } = response.body.data[0];
      cy.adicionarComentarioAnexoI(dados[0].token, dados[4], id).should((response2) => {
        expect(response2.status).to.equal(201);
      });
    });
  });

  it('Inserir Anexo', () => {
    cy.criarIncidenteIntI(dados[0].token, dados[2]).then((response) => {
      const { id } = response.body.data[0];
      cy.adicionarAnexoI(dados[0].token, dados[5], id).should((response2) => {
        expect(response2.status).to.equal(201);
      });
    });
  });
});
