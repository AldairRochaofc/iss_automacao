Cypress.Commands.add('getMassaByEnv', () => {
  const urlPortal = Cypress.env('urlPortal');
  const ambienteRegex = /-(\w+)\./;
  const matches = urlPortal.match(ambienteRegex);
  const ambiente = matches ? matches[1].toUpperCase() : null;

  const ambienteToMassa = {
    HLG: 'massa-hlg.json',
    PRD: 'massa-prd.json',
    DEV: 'massa-dev.json',
  };

  const arquivoJson = ambienteToMassa[ambiente];

  return cy.fixture(arquivoJson);
});

