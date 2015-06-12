(function() {
  "use strict";

  var gulp = require('gulp')

  gulp.task('watch.asset', [
    'asset',
  ], main)

  function main() {
    gulp.watch( config.asset.client.watch, ['asset.client'] )
      .on('change', helpers.changeHandler('client file'))
    gulp.watch( config.asset.bower.watch, ['asset.bower'] )
      .on('change', helpers.changeHandler('bower package'))
    gulp.watch( config.asset.theme.watch, ['asset.theme'] )
      .on('change', helpers.changeHandler('theme file'))
  }
})();
