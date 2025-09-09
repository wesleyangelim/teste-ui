const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'jps2dm',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
