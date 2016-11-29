angular.module('myControllers')
	.controller('LoginCtrl', function ($scope, $uibModalInstance, AuthService, StorageService, data ) {

		$scope.cancel = $uibModalInstance.dismiss;

	 	$scope.loginUser = function() {

			StorageService.setRememberMe( $scope.rememberMe );

			AuthService.login($scope.user)
					.then( StorageService.saveToken )
		    	.then( AuthService.setCredentials )
			    .then( $uibModalInstance.close )
			    .catch( (error) => {
			      const message = "These credentials are not valid";
			      $scope.error = { message }
			    })

	  }; // end save


  });
