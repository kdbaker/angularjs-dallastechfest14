'use strict';

/* App Module */
var dtf = angular.module( 'dtf', [ ] );

/* App Controller */
dtf.controller( 'AppCtrl',
  [ '$scope',
  function ( $scope ) {

    $scope.welcome_msg = 'the App Controller';

  }]);
