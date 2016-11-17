angular.module('myApp', ['ngRoute', 'ngMap', 'myControllers'])
	.config( function ($routeProvider) {

		$routeProvider
      // .when('/', {
      //   templateUrl: 'views/home.html',
      //   controller: 'HomeCtrl'
      // })
      .when('/', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

	})

