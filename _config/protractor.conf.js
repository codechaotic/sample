exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  baseUrl: 'http://127.0.0.1',
  specs: [
    './_test/client/e2e/**/*.spec.js'
  ],
  capabilities: {
    'browserName': 'phantomjs',
    'phantomjs.binary.path': require('phantomjs').path,
    'phantomjs.ghostdriver.cli.args': ['--loglevel=NONE']
  }
}
