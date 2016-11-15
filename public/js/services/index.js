angular.module('myServices', [])
	.factory("DataService", function( $http ) {

			const limit = 20;
			const url = '/restaurants';

			function getRestaurants( query ) {

				return $http.get( url, { params: { limit } } )
											.then( d => d.data )

			}

			return { getRestaurants }

	})