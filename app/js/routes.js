'use strict';

dtf.config( function( $stateProvider, $urlRouterProvider ) {
  $stateProvider

    .state( 'home', {
      url: '/',
      controller: 'ListCtrl',
      templateUrl: 'views/home.html'
    })

    .state( 'details', {
      url: '/details/:id/:name',
      controller: 'DetailsCtrl',
      templateUrl: 'views/details.html'
    })

    .state( 'about', {
      url: '/about',
      templateUrl: 'views/about.html'
    })

    .state( 'filters', {
      url: '/angular-filters',
      templateUrl: 'views/filters.html'
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});
