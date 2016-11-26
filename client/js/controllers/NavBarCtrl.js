angular.module('myControllers')
  .controller('NavBarCtrl', function ($scope, dialogs) {

    $scope.showModalLogin = () => {

      const LoginTpl = 'views/modals/login.html'
      const optionsModal = {
        size: "md",
        windowClass: 'my-class'
      }

      const loginModal = dialogs.create(
        LoginTpl, // url
        'LoginCtrl', // ctrl
        { title : 'modal window' }, // data object =>
        optionsModal // options for the dialog
      );

      loginModal.result.then( (data) => {
          console.log("result?...")
          console.log(data)
      })

    };

    $scope.showModalRegister = () => {

      const RegisterTpl = 'views/modals/register.html'
      const optionsModal = {
        size: "md",
        windowClass: 'my-class'
      }

      const loginModal = dialogs.create(
        RegisterTpl, // url
        'RegisterCtrl', // ctrl
        { title : 'modal window' }, // data object =>
        optionsModal // options for the dialog
      );

      loginModal.result.then( (data) => {
          console.log("result?...")
          console.log(data)
      })

    };

  });
