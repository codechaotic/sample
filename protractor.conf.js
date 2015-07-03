exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  specs: [
    './_test/client/e2e/**/*.spec.js'
  ],
  multiCapabilities: [{
     browserName: 'firefox'
   }]
}
