const { defineConfig } = require("cypress");

const cypressSplit = require('cypress-split');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      cypressSplit(on, config)
      // IMPORTANT: return the config object
      return config
    },
  },
});
