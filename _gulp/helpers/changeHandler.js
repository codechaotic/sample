(function() {
  "use strict";

  var gutil = require('gulp-util'),
      path = require('path')

  module.exports = function(label) {
    return function(event) {
      var file = path.basename(event.path),
          msg = function(){ switch(event.type) {
            case 'added': return 'was created'; break;
            case 'deleted': return 'was removed'; break;
            case 'changed': return 'was modified'; break;
          }}(),
          parts = [
            gutil.colors.yellow(file),
            gutil.colors.white(label),
            gutil.colors.blue(msg)
          ]

      gutil.log(parts.join(' '))
    }
  }

})();
