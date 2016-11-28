angular.module('myControllers')
  .controller('ByBoroughCtrl', function(
    $scope,
    $rootScope,
    $routeParams,
    MapService,
    DataService
  ) {

			const page = 1;
      const borough = $routeParams.borough;

      $rootScope.filters = { borough }

      $scope.setPage = function (page) {

				DataService.getRestaurantsByBorough( page, borough )
	        .then( rests => $rootScope.restaurants = rests )
	        .then( MapService.getMarkers )
          .then( () => window.scrollTo(0, 0) )

		  };

      DataService.getRestaurantsByBorough( page, borough )
        .then( rests => $rootScope.restaurants = rests )
        .then( MapService.getMarkers )

  })