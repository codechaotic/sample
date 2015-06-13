(function() {
  "use strict";

  var gulp = require('gulp'),
      run = require('run-sequence')

  gulp.task('app', ['install','asset'], function(callback){
    run(
      [ 'app.files', 'app.views', 'app.modules' ],
      callback
    )
  })

})();
