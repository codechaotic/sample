(function() {
  'use strict';

  angular
    .module( 'app.page' )
    .controller( 'PageController', PageController )

  angular
    .module( 'app.page' )
    .controller( 'HomePageController', HomePageController )

  PageController.$inject = ['$routeProvider']

  function PageController($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html'
        controller: 'HomePageController'
      })
  }

  function HomePageController() {
    this.title = 'Home'
    this.content = 'Welcome to the Home Page'
  }

})();
