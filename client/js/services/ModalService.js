angular.module('myServices')
.factory("ModalService", function( $http, dialogs ) {

		let optionsModal = {
      size: "md"
    }

		function modalLogin ( data ) {

      const LoginTpl = 'views/modals/login.html';
      optionsModal.windowClass = 'login-modal'

      const loginModal = dialogs.create(
        LoginTpl, // url
        'LoginCtrl', // ctrl
        data,
        optionsModal // options for the dialog
      );

      return loginModal.result

    };

    function modalRegister( data ) {

      const RegisterTpl = 'views/modals/register.html'
			optionsModal.windowClass = 'register-modal'

      const registerModal = dialogs.create(
        RegisterTpl, // url
        'RegisterCtrl', // ctrl
        data,
        optionsModal // options for the dialog
      );

      return registerModal.result

    };


  return { modalLogin, modalRegister }

})