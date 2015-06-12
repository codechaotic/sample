(function() {
  "use strict";

  var gulp = require('gulp')

  module.exports = function(from,to) {
    return function() {
      return gulp.src(from + '**/*', { base: from })
        .pipe(gulp.dest(to))
    }
  }

})();
