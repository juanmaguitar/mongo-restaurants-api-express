angular.module('myControllers')
  .controller('DetailsCtrl', function(
    $scope,
    $rootScope,
    $routeParams,
		MapService,
    DataService
  ) {

      const id = $routeParams.id;
      const getMarker = MapService.getDetailsMarker;
      let counter = 0;

      DataService.getRestaurantDetails( id )
        .then( (rest) => {
          $scope.restaurant = rest
          return rest;
        })
        .then( getMarker.bind(null, "details-map") )

      DataService.getRestaurantsClose( id )
        .then( console.log )

  })