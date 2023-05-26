/* eslint-disable no-param-reassign */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const grepTags = require('cypress-grep/src/plugin');

module.exports = defineConfig({
  viewportWidth: 1140,
  viewportHeight: 768,
  defaultCommandTimeout: 10000,
  projectId: 'pays8a',
  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',

    setupNodeEvents(on, config) {
      allureWriter(on, config);
      grepTags(config);

      // if version not defined, use local
      const version = config.env.version || 'HLG';

      require('cypress-localstorage-commands/plugin')(on, config);
      // eslint-disable-next-line no-param-reassign
      config.env = require(`./cypress/config/${version}.json`);
      config.baseUrlBff = config.env.baseUrlBff;
      config.urlPortal = config.env.urlPortal;
      config.atendimento = config.env.atendimento;
      config.integracao = config.env.integracao;

      return config;
    },
    env: {
      requestMode: true,
      hideCredentials: true,
      testIsolation: false,
    },
  },
});
