(function() {
  "use strict";

  var gulp = require('gulp')

  gulp.task('asset', [
    'asset.bower',
    'asset.client',
    'asset.theme'
  ] )

})();
