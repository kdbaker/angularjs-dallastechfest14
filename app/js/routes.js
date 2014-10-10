'use strict';

dtf.config( function( $stateProvider, $urlRouterProvider ) {
  $stateProvider

    .state( 'home', {
      url: '/',
      controller: 'ListCtrl',
      templateUrl: 'views/home.html'
    })

    .state( 'about', {
      url: '/about',
      templateUrl: 'views/about.html'
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});
