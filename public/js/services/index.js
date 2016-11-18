angular.module('myServices', [])
	.factory("DataService", function( $http ) {

			const limit = 30;

			function getRestaurants() {
				const url = '/restaurants';
				return $http.get( url, { params: { limit } } )
											.then( d => d.data )
			}

			function getRestaurantsByBorough( borough ) {
				const url = '/restaurants/borough/' + borough;
				return $http.get( url, { params: { limit } } )
											.then( d => d.data )
			}

			function getRestaurantsByCuisine( borough ) {
				const url = '/restaurants/cuisine/' + borough;
				return $http.get( url, { params: { limit } } )
											.then( d => d.data )
			}

			function getBoroughs() {
				const url = '/boroughs';
				return $http.get( url ).then( d => d.data )
			}

			function getCuisines() {
				const url = '/cuisines';
				return $http.get( url ).then( d => d.data )
			}

			return { getRestaurants, getBoroughs, getRestaurantsByBorough, getRestaurantsByCuisine, getCuisines }

	})