angular.module('myControllers')
	.controller('ResultsCtrl', function($scope, $rootScope, DataService, MapService, NgMap) {

	  $scope.title = "RESTAURANTS"

	  DataService.getRestaurants()
	    .then( restaurants => $rootScope.restaurants = restaurants )
	    .then( MapService.getMarkers )

	  const token = 'AIzaSyC-8fnm-fKikIyZvY5Oww9qVdenK_5R3U4';
	  $scope.googleMapsUrl=`https://maps.googleapis.com/maps/api/js?key=${token}`

	})