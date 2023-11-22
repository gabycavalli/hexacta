const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve("./cypress", "config", `${file}`.json);
  let rawdata = fs.readFileSync(pathToConfigFile);
  return JSON.parse(rawdata);
}

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    baseUrl: "https://www.google.com/",
    viewportHeight: 768,
    viewportWidth: 1024,
  },
});
