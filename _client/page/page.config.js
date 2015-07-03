(function() {
  'use strict';

  angular
    .module( 'app.page' )
    .config(PageConfig)

  PageConfig.$inject = ['$routeProvider']
  function PageConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'PageController',
        controllerAs: 'page'
      })
  }

})();
