angular.module('myControllers')
  .controller('ByCuisineCtrl', function(
    $scope,
    $rootScope,
    MapService,
    $routeParams,
    DataService
  ) {

			const page = 1;
      const cuisine = $routeParams.cuisine;

      $rootScope.filters = { cuisine }

      $scope.setPage = function (page) {

				DataService.getRestaurantsByCuisine( page, cuisine )
	        .then( rests => $rootScope.restaurants = rests )
	        .then( MapService.getMarkers )
	        .then( () => window.scrollTo(0, 0) )

		  };

      DataService.getRestaurantsByCuisine( page, cuisine )
        .then( rests => $rootScope.restaurants = rests )
        .then( MapService.getMarkers )

  })