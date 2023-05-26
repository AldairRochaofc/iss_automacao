/// <reference types="Cypress" />

import dados from '../../fixtures/apiatendimento.json';

describe('Testes da Api de Atendimento', () => {
  it('Listar Incidentes', () => {
    cy.listarIncidentes(dados[2].partner, dados[0].apikey, dados[1].page, dados[1].perpage, dados[1].dateStart, dados[1].dateEnd).should((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('Obter Incidente', () => {
    cy.obterIncidente(dados[2].partner, dados[0].apikey, dados[1].incidenteID).should((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('Obter Comentários por Incidente', () => {
    cy.obterComentarios(dados[2].partner, dados[0].apikey, dados[1].incidenteID).should((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('Obter Anexos por Incidente', () => {
    cy.obterAnexos(dados[2].partner, dados[0].apikey, dados[1].incidenteID).should((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('Download de Anexo por Incidente', () => {
    cy.obterAnexoseComentario(dados[2].partner, dados[0].apikey, dados[1].incidenteID, dados[1].anexoID).should((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('Obter Motivos', () => {
    cy.obterMotivos(dados[2].partner, dados[0].apikey).should((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('Criar Incidente', () => {
    cy.criarIncidente(dados[2].partner, dados[0].apikey, dados[3]).should((response) => {
      expect(response.status).to.equal(201);
    });
  });

  it('Inserir Comentario', () => {
    cy.criarIncidente(dados[2].partner, dados[0].apikey, dados[3]).then((response) => {
      const { id } = response.body.data[0];
      cy.inserirComentario(dados[2].partner, dados[0].apikey, dados[4], id).should((response) => {
        expect(response.status).to.equal(201);
      });
    });
  });

  it('Inserir Comentario e Anexo', () => {
    cy.criarIncidente(dados[2].partner, dados[0].apikey, dados[3]).then((response) => {
      const { id } = response.body.data[0];
      cy.inserirComentarioeAnexo(dados[2].partner, dados[0].apikey, dados[5], id).should((response) => {
        expect(response.status).to.equal(201);
      });
    });
  });

  it('Inserir  Anexo', () => {
    cy.criarIncidente(dados[2].partner, dados[0].apikey, dados[3]).then((response) => {
      const { id } = response.body.data[0];
      cy.inserirAnexo(dados[2].partner, dados[0].apikey, dados[6], id).should((response) => {
        expect(response.status).to.equal(201);
      });
    });
  });
});
