angular.module('myServices')
	.factory("DataService", function( $http, $rootScope, $location ) {

			const limit = 10;
			$rootScope.maxSize = 5;

			function getPages( d ) {
				const { docs, total, page, pages } = d.data;
				$rootScope.totalResults = total;
				$rootScope.totalPages = pages;
				$rootScope.currentPage = page;
				return docs;
			}

			function getRestaurants( page ) {
				const url = '/restaurants';
				return $http.get( url, { params: { limit, page } } )
											.then( getPages )
			}

			function getRestaurantsByBorough( page, borough ) {
				const url = `/restaurants/borough/${borough}`;
				return $http.get( url, { params: { limit, page } } )
											.then( getPages )
			}

			function getRestaurantsByCuisine( page, borough ) {
				const url = `/restaurants/cuisine/${borough}`;
				return $http.get( url, { params: { limit, page } } )
												.then( getPages )
			}

			function getRestaurantsClose( id ) {
				const url = `/restaurant/${id}/around/5`;
				const limit = 5
				return $http.get( url, { params: { limit } } ).then( d => d.data )
			}

			function getBoroughs() {
				const url = '/boroughs';
				return $http.get( url ).then( d => d.data )
			}

			function getCuisines() {
				const url = '/cuisines';
				return $http.get( url ).then( d => d.data )
			}

			function getRestaurantDetails( id ) {
				const url = `/restaurant/${id}`;
				return $http.get( url ).then( d => d.data )
			}


			function updateRestaurant(id, data) {
				const url = `/restaurant/${id}`;
				const method = 'POST';
				//const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
				console.log("updating restaurant " + id)
				return $http( { url, method, data } )
			}

			return { getRestaurants, getBoroughs, getRestaurantsByBorough, getRestaurantsByCuisine, getCuisines, getRestaurantDetails, updateRestaurant, getRestaurantsClose }

	})