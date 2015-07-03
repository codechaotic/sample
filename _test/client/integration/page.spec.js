(function() {
  'use strict';

  describe('Module: Page', function() {

    var module
    beforeEach(function() {
      module = angular.module('app.page')
    })

    it('should be registered', function() {
      expect(module).not.toBeNull()
    })

    describe("Dependencies:", function() {

      var deps,
          hasModule = function(m) {
            return deps.indexOf(m) >= 0
          }

      beforeEach(function() {
        deps = module.value('appName').requires
      })

      //you can also test the module's dependencies
      it("should have ngRoute as a dependency", function() {
        expect(hasModule('ngRoute')).toBe(true);
      })

    })
  })

})();
