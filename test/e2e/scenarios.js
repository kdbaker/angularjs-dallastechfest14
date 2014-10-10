'use strict';

/* https://docs.angularjs.org/guide/e2e-testing */

describe( 'DTF App', function() {

  describe( 'Top Speakers', function() {

    beforeEach( function() {
      browser.get( 'app/index.html' );
    });

    it( 'should be possible to control speaker via input and order via the drop down select box', function() {

      var speakerNameColumn = element.all( by.repeater( 'speaker in top_speakers' ).column( '{{ speaker.name }}' ) );
      var query = element( by.model( 'query' ) );

      function getNames() {
        return speakerNameColumn.map( function( elm ) {
          return elm.getText();
        });
      }

      // Test via input
      query.sendKeys('jared');
      expect( getNames() ).toEqual( [ "Jared Spool" ] );

      // Clear input
      query.clear();

      // Test via drop down
      element( by.model( 'orderProp' ) ).element( by.css( 'option[value="name"]' ) ).click();
      expect(getNames()).toEqual([
        "Amir Rajan",
        "Brian Sullivan",
        "Jared Spool"
      ]);

    });

  });

  describe( 'Routes', function() {

    beforeEach( function() {
      browser.get( 'app/index.html' );
    });

    it( 'should redirect #/foo to #/', function() {

      browser.get( 'app/#/foo' );
      browser.getLocationAbsUrl()
        .then( function( url ) {
          expect( url.split('#')[1] ).toBe( '/' );
        });

    });

    it( 'should navigate to #/about', function() {
      browser.get( 'app/#/about' );
      browser.getLocationAbsUrl()
        .then( function( url ) {
          expect( url.split('#')[1] ).toBe( '/about' );
        });
    });

  });
});
