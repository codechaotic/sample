(function() {
  'use strict';

  angular
    .module('app.post')
    .controller('PostController',Post);

  /* @ngInject */
  function Post() {
    var vm = this
    vm posts = []

    this.save = function(post) {

    }
  }

})();
