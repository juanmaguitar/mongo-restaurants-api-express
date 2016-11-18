angular.module('myControllers')
  .controller('ByCuisineCtrl', function($scope, MapService, $routeParams, $rootScope, DataService, NgMap) {

      const cuisine = $routeParams.cuisine;

      DataService.getRestaurantsByCuisine( cuisine )
        .then( restaurants => $rootScope.restaurants = restaurants )
        .then( MapService.getMarkers )

  })