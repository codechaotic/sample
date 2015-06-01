(function() {
  'use strict';

  module.exports = init

  function init(app) {
    app.use('/', require('./homepage.controller'))

    var view_paths = app.get('views')
    view_paths.push(__dirname)
    app.set('views', view_paths )
  }

})();
