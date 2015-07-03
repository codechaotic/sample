(function() {
  "use strict";

  var gulp = require('gulp'),
      karma = require('karma').server,
      protractor = require("gulp-protractor").protractor

  gulp.task('test.e2e', e2e)
  gulp.task('test.unit', unit)
  gulp.task('test', [
    'test.e2e',
    'test.unit'
  ])

  function unit(done) {
    karma.start({
      configFile: config.root_dir + '_config/karma.conf.js',
      singleRun: true
    }, done)
  }

  function e2e(done) {
    lib.application.start()
      .then(lib.selenium.start)
      .then(function() {
        gulp.src(['./_test/client/e2e/**/*.js'])
          .pipe(protractor({
              configFile: config.root_dir + '_config/protractor.conf.js',
              args: ['--baseUrl', 'http://127.0.0.1']
          }))
          .on('end', function() {
            lib.selenium.stop()
              .then(lib.application.stop)
              .then(function() {
                done()
              })
          })
      })

    //})
  }

})();
