angular.module('myControllers', ['myServices'])
	.controller('SearchCtrl', function($scope, $rootScope, DataService, $location) {

		$scope.querySearch = "tortellini";
		$scope.searchItems = function(e) {
			if (e) e.preventDefault()

			DataService.getRestaurants( $scope.querySearch )
				.then( function(response) {
					console.log(response)
					$rootScope.restaurants = response;
				})

			$location.path("/results")
		}

		$scope.searchItems()

	})
	.controller('HomeCtrl', function($scope) {
		$scope.title = "HOME"
	})
	.controller('ResultsCtrl', function($scope, $rootScope, NgMap) {
		$scope.title = "RESTAURANTS"

		const token = 'AIzaSyC-8fnm-fKikIyZvY5Oww9qVdenK_5R3U4';
		$scope.googleMapsUrl=`https://maps.googleapis.com/maps/api/js?key=${token}`

		// NgMap.getMap()
		// 	.then( (map) => {
		//     console.log(map.getCenter());
		//     console.log('markers', map.markers);
		//     console.log('shapes', map.shapes);
		//   });
	})
	.controller('MyController', function(NgMap) {

	});