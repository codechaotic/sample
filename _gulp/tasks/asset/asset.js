(function() {
  "use strict";

  var gulp = require('gulp'),
      run = require('run-sequence')

  gulp.task('asset', ['install'], function(callback){
    run(
      [ 'asset.bower', 'asset.client', 'asset.theme' ],
      callback
    )
  })

})();
