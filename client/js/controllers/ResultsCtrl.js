angular.module('myControllers')
  .controller('ResultsCtrl', function(
      $scope,
      $rootScope,
      $window,
      $location,
      DataService,
      MapService
  ) {

    const page = 1;
    $scope.title = "RESTAURANTS"

    $scope.setPage = function (page) {

      DataService.getRestaurants(page)
        .then( rests => $rootScope.restaurants = rests )
        .then( MapService.getMarkers )
        .then( () => $window.scrollTo(0, 0) )
        .catch( console.error )

    };

    DataService.getRestaurants(page)
      .then( rests => $rootScope.restaurants = rests )
      .then( MapService.getMarkers )

  })