angular.module('myApp', [
    'ngRoute',
    'ngMap',
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
      .when('/profile/edit', {
        templateUrl: 'views/edit-profile.html',
        controller: 'EditProfileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

	})
  .run( function ( $rootScope, $location, AuthService, StorageService ) {

      if ( AuthService.isLoggedIn() ) {
        const token = StorageService.readToken();
        AuthService.setCredentials(token)
      }

  })
