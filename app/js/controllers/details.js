'use strict';

dtf.controller( 'DetailsCtrl',
  [ '$scope', 'ApiService', '$stateParams',
  function ( $scope, ApiService, $stateParams ) {

    var getDetails = function ( ) {
      return ApiService
        .details( $stateParams.id )
        .then( function ( apiData ) {

          $scope.albums = apiData;

        }, function ( reason ) {

          $scope.error = reason;

        });
      };

    getDetails( );

    $scope.page_title = $stateParams.name + " Albums";

  }]);
