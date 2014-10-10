'use strict';

/* jasmine specs for controllers go here */

describe( 'DTF controllers', function() {

  describe( 'ListCtrl', function() {
    var scope, ctrl;

    beforeEach( module( 'dtf' ) );

    beforeEach( inject( function( $controller ) {
      scope = { };
      ctrl = $controller( 'ListCtrl', { $scope:scope } );
    }));

    it( 'should should create top_speakers model with 3 speakers' , function() {
      expect( scope.top_speakers.length ).toBe( 3 );
    });

    it( 'should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('speaking_order');
    });

  });

});
