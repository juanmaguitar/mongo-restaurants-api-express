angular.module('myControllers')
  .controller('ByBoroughCtrl', function($scope, MapService, $routeParams, $rootScope, DataService, NgMap) {

      const borough = $routeParams.borough;

      DataService.getRestaurantsByBorough( borough )
        .then( restaurants => $rootScope.restaurants = restaurants )
        .then( MapService.getMarkers )

  })