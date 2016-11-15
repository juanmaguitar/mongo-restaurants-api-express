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
	.controller('ResultsCtrl', function($scope, $rootScope) {
		$scope.title = "RESTAURANTS"
	})