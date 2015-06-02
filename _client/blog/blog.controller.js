(function() {
  'use strict';

  angular
    .module('app.blog')
    .controller('BlogController',Blog);

  /* @ngInject */
  function Blog($http) {
    var vm = this;
    vm.posts = [];
    activate();

    function activate() {
      return $http.get('/api/posts')
        .success(function(data) {
          vm.posts = data;
        });
    }
  }
  Page.$inject = ['$http'];

})();
