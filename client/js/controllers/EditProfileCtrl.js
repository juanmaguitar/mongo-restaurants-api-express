angular.module('myControllers')
  .controller('EditProfileCtrl', function ( $scope, $rootScope, ImagesService ) {

    $scope.uploadImage = function(event) {

          var files = event.target.files;
          var file = files[0];
          ImagesService.getRemoteUrlImage( file )
            .then( remoteUrl => {
                $rootScope.loggedUser.image = remoteUrl;
            })

    };

    $scope.updateData = function() {

    }

  });
