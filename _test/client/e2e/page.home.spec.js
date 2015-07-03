(function() {
  'use strict';

  describe('Home Page', function() {
    it('should have a title', function() {
      browser.get('/')
      expect(browser.getTitle()).toEqual('Title Here')
    })
  })

})();
