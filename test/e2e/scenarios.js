'use strict';

/* https://docs.angularjs.org/guide/e2e-testing */

describe( 'DTF App', function() {

  beforeEach( function() {
    browser.get( 'app/index.html' );
  });

});


describe( 'DTF App', function() {

  describe( 'Welcome Message', function() {

    beforeEach( function() {
      browser.get( 'app/index.html' );
    });

    var msg = element(by.css('span'));

    it( 'should be the App Controller', function() {

      expect( msg.getText() ).toBe( 'the List Controller' );

    });

  });
});
