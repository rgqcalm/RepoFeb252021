const { defineConfig } = require("cypress");
/*const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify"); 

 async function setupNodeEvents(on,config)
 {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
 }*/


module.exports = defineConfig({
  defaultCommandTimeout: 6000,

  env: {
    url: "https://rahulshettyacademy.com", //control the url from here and terminal also
    //userId:"sid"
    //pwd:"pwd"
  },
  //reporter: 'cypress-mochawesome-reporter',// to generate mochawesome report

  retries: {
    runMode: 1,

  },
  projectId: "jn6usz",


  e2e: {
    /*
  setupNodeEvents(on,config)
  {
     require('cypress-mochawesome-reporter/plugin')(on);//setup event listener
  }, */

    specPattern: 'cypress/integration/examples/*.js',
    experimentalStudio: true,

  },
});
