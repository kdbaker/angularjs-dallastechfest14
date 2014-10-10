'use strict';

/* App Module */
var dtf = angular.module( 'dtf', [ 'ui.router' ] );

/* App Controller */
dtf.controller( 'AppCtrl',
  [ '$scope',
  function ( $scope ) {

    $scope.site_nav = [
      { 'name': 'Home',
        'state': 'home' },
      { 'name': 'About',
        'state': 'about' }
    ];

  }]);
