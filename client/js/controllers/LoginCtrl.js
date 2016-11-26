angular.module('myControllers')
	.controller('LoginCtrl', function ($scope, $uibModalInstance, AuthService, data ) {

		console.log("login...")
		console.log(data)

		$scope.cancel = function() {
			console.log("cancel...")
	    $uibModalInstance.dismiss('canceled');
	  }; // end cancel

	 	$scope.loginUser = function() {

	 		console.log("login...")
	 		console.log($scope.user)
	 		AuthService.login($scope.user)
	 			.then( console.log )

	    $uibModalInstance.close( $scope.user );
	  }; // end save


  });
