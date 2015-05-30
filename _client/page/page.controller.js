(function() {
  'use strict';

  angular
    .module('app.page')
    .controller('PageController',Page);

  /* @ngInject */
  function Page($http) {
    var vm = this;
    vm.sections = [];
    activate();

    function activate() {
      return $http.get('/api/sections')
        .success(function(data) {
          vm.sections = data;
        });
    }
  }
  Page.$inject = ['$http'];

})();
