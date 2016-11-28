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
			      const message = error.data.message;
			      $scope.error = { message }
			      console.error(error);
			    })

	  }; // end save


  });
