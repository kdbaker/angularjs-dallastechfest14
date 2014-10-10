'use strict';

dtf.controller( 'ListCtrl',
  [ '$scope', 'ApiService',
  function ( $scope, ApiService ) {

    var getList = function ( ) {
      return ApiService
        .find( $scope.artist_search )
        .then( function ( apiData ) {

          $scope.artists = apiData;

        }, function ( reason ) {

          $scope.error = reason;

        });
      };

    $scope.doSearch = function( ) {

      // Clear any errors
      delete $scope.error;
      $scope.query = '';
      $scope.orderProp = 'Popularity';

      getList( );
    }

    $scope.page_title = "Artist Search";
    $scope.orderProp = 'Popularity';

  }]);
