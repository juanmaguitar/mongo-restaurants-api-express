angular.module('myControllers')
  .controller('RegisterCtrl', function ($scope, $uibModalInstance, AuthService, data ) {

    console.log("login...")
    console.log(data)

    $scope.cancel = function() {
      console.log("cancel...")
      $uibModalInstance.dismiss('canceled');
    }; // end cancel

    $scope.createUser = function() {

      console.log("registeting...")
      console.log($scope.user)
      const { username, password } = $scope.user;

      AuthService.register( $scope.user )
        .then( () => AuthService.login( { username, password } ) )
        .then( d => d.data )
        .then( $uibModalInstance.close )
        .catch( (error) => {
          const message = "The creation of your user failed with these credentials";
          $scope.error = { message }
        })
    }; // end save


  });
