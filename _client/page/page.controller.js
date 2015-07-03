(function() {
  'use strict';

  angular
    .module( 'app.page' )
    .controller( 'PageController', PageController )

  function PageController() {
    this.title = 'Home Page'
  }

})();
