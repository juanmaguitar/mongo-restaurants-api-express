angular.module('myApp', ['ngRoute'])
	.config( function ($routeProvider) {

		$routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/results', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

	})
	.controller('SearchCtrl', function($scope, $rootScope, DataService, $location) {

		$scope.querySearch = "tortellini";
		$scope.searchItems = function(e) {
			e.preventDefault()

			DataService.getRecipes( $scope.querySearch )
				.then( function(response) {
					$rootScope.recipes = response.data;
				})

			$location.path("/results")
		}

	})
	.controller('HomeCtrl', function($scope) {
		$scope.title = "HOME"
	})
	.controller('ResultsCtrl', function($scope, $rootScope) {
		$scope.title = "RESULTS RECIPES"
	})
	.factory("DataService", function( $http ) {

			function getRecipes( query ) {
				url = 'https://powerful-inlet-75906.herokuapp.com/recipe?q=' + query;
				return $http.get( url )
			}

			return {
				getRecipes : getRecipes
			}

	})

