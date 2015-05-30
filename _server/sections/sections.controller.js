(function() {

  module.exports = sectionsController
  var sections = require('./sections.model.js')

  function sectionsController(app) {
    app.get('/api/sections', function(req, res, next) {
      sections.getAll()
        .onResolve(function (err, data) {
          if (err) console.error(err)
          res.send(data)
          next()
        })
    })
  }

})();
