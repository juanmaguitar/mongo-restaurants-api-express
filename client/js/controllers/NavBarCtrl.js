angular.module('myControllers')
  .controller('NavBarCtrl', function ($scope, $rootScope, ModalService) {

    $scope.showModalLogin = () => {

      ModalService.modalLogin()
        .then( (data) => {
          debugger;
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
