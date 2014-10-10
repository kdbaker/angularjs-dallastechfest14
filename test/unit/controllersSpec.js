'use strict';

/* jasmine specs for controllers go here */

describe( 'DTF controllers', function() {

  describe( 'AppCtrl', function() {
    var scope, ctrl;

    beforeEach( module( 'dtf' ) );

    beforeEach( inject( function( $controller ) {
      scope = { };
      ctrl = $controller( 'AppCtrl', { $scope:scope } );
    }));

    it( 'should should return from App Controller' , function() {
      expect( scope.welcome_msg ).toBe( 'the App Controller' );
    });

  });

});
