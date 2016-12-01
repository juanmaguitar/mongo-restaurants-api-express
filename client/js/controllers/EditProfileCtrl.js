angular.module('myControllers')
  .controller('EditProfileCtrl', function ( $scope, $rootScope, ImagesService, AccountService ) {

    AccountService.getMe()
      .then( data => {
        const { username, email, fullname, social, image } = data;
        $rootScope.loggedUser = { username, email, fullname, social, image };
      })
      .catch( console.error )

    $scope.uploadImage = function(event) {

      var files = event.target.files;
      var file = files[0];
      ImagesService.getRemoteUrlImage( file )
        .then( remoteUrl => {
            $rootScope.loggedUser.image = remoteUrl;
        })

    };

    $scope.updateData = function() {

      const data = JSON.stringify($rootScope.loggedUser)
      AccountService.updateMe( data )
        .then( (data) => {
          $scope.message = "Data updated succesfully!"
        })

    }

  });
