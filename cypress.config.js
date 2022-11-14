const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'jm4nba',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
})