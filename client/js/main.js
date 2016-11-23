angular.module('myApp', [
    'ngRoute',
    'ngMap',
    'my.ui.bootstrap',
    'myControllers',
    'myDirectives'
  ])
	.config( function ($routeProvider) {

		$routeProvider
      .when('/', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl'
      })
      .when('/details/:id', {
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl'
      })
      .when('/edit/:id', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl'
      })
      .when('/borough/:borough', {
        templateUrl: 'views/results.html',
        controller: 'ByBoroughCtrl'
      })
      .when('/cuisines/:cuisine', {
        templateUrl: 'views/results.html',
        controller: 'ByCuisineCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

	})

