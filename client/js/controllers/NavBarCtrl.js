angular.module('myControllers')
  .controller('NavBarCtrl', function ($scope, $rootScope, $location, ModalService, AuthService) {

    $scope.logout = () => {
      AuthService.logout();
      console.log("logout...")
      $location.path('/')
    }

    $scope.showModalLogin = () => {

      ModalService.modalLogin()
        .then( (data) => {
            console.log("result?...")
            console.log(data)
            console.log($rootScope)
        })

    };

    $scope.showModalRegister = () => {

      ModalService.modalRegister ()
        .then( (data) => {
            console.log("result?...")
            console.log(data)
        })

    };

  });
