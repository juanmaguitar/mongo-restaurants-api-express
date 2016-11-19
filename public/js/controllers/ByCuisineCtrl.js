angular.module('myControllers')
  .controller('ByCuisineCtrl', function($scope, MapService, $routeParams, $rootScope, DataService, NgMap) {

			const page = 1;
      const cuisine = $routeParams.cuisine;

      $scope.setPage = function (page) {

				DataService.getRestaurantsByCuisine( page, cuisine )
	        .then( rests => $rootScope.restaurants = rests )
	        .then( MapService.getMarkers )

		  };

      DataService.getRestaurantsByCuisine( page, cuisine )
        .then( rests => $rootScope.restaurants = rests )
        .then( MapService.getMarkers )

  })