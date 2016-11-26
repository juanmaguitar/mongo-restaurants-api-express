angular.module('myControllers')
  .controller('NavBarCtrl', function ($scope, $rootScope, ModalService) {

    $scope.showModalLogin = () => {

      ModalService.modalLogin()
        .then( (data) => {
            console.log("result?...")
            console.log(data)
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
