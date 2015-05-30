(function() {

  var exports = module.exports = {}
  exports.getAll = getAll

  var mongoose = require('mongoose')
  var sectionSchema = new mongoose.Schema({
     title: {
       type: String,
       required: true
     },
     content: {
       type: String,
       required: true
     }
  })
  var section = mongoose.model('Section', sectionSchema);

  function getAll() {
    return section.find({ }).exec()
  }

})();
