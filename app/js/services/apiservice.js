'use strict';

dtf.service( 'ApiService',
  [ '$http', '$q',
  function ( $http, $q ) {

    return {

      find: function ( artist ) {

        var deferred = $q.defer(),
            source = 'https://api.spotify.com/v1/search?q=' + artist + '&type=artist';

        $http.get( source )
          .then( function ( apiData ) {

            deferred.resolve( apiData.data.artists.items );

          }, function ( reject ){

            deferred.reject( 'server error ' + reject.status )

          });

        return deferred.promise;

      },
      details: function ( artistId ) {

        var deferred = $q.defer(),
            source = 'https://api.spotify.com/v1/artists/' + artistId + '/albums?type=album&market=us';

        $http.get( source )
          .then( function ( apiData ) {

            deferred.resolve( apiData.data.items );

          }, function ( reject ){

            deferred.reject( 'server error ' + reject.status )

          });

        return deferred.promise;

      }

    };

  }]);
