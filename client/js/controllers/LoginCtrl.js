angular.module('myControllers')
	.controller('LoginCtrl', function ($scope, $uibModalInstance, AuthService, StorageService, data ) {

		$scope.cancel = $uibModalInstance.dismiss;
		StorageService.setRememberMe( $scope.rememberMe ? true : false );

	 	$scope.loginUser = function() {

	 		AuthService.login($scope.user)
				.then( StorageService.saveToken )
	    	.then( AuthService.setCredentials )
		    .then( $uibModalInstance.close )
		    .catch( (error) => {
		      const message = error.data.message;
		      $scope.error = { message }
		      console.log(error);
		    })

	  }; // end save


  });
