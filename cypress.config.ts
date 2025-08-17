const { defineConfig } = require("cypress");
const cucumber = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      cucumber(on, config);
      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
  },
});
