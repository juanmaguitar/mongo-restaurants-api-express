angular.module('myControllers')
	.controller('LoginCtrl', function ($scope, $uibModalInstance, data ) {

		console.log("login...")
		console.log(data)

		$scope.cancel = function() {
			console.log("cancel...")
	    $uibModalInstance.dismiss('canceled');
	  }; // end cancel

	 	$scope.save = function() {
	 		console.log("save...")
	    $uibModalInstance.close( $scope.user );
	  }; // end save


  });
