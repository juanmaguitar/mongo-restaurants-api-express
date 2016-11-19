angular.module('myControllers')
  .controller('ResultsCtrl', function($scope, $rootScope, DataService, MapService, NgMap) {

    const page = 1;
    $scope.title = "RESTAURANTS"

    $scope.setPage = function (page) {

      DataService.getRestaurants(page)
        .then( rests => $rootScope.restaurants = rests )
        .then( MapService.getMarkers )

    };

    DataService.getRestaurants(page)
      .then( rests => $rootScope.restaurants = rests )
      .then( MapService.getMarkers )

    const token = 'AIzaSyC-8fnm-fKikIyZvY5Oww9qVdenK_5R3U4';
    $scope.googleMapsUrl=`https://maps.googleapis.com/maps/api/js?key=${token}`

  })