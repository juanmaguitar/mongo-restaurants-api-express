angular.module('myControllers')
  .controller('EditCtrl', function(
    $scope,
    $rootScope,
    $routeParams,
    $http,
    $location,
    $timeout,
		MapService,
    DataService,
    ImagesService
  ) {

      const id = $routeParams.id;
      const getMarker = MapService.getDetailsMarker;
      const oStylesImage = document.getElementById('styles-preview-image');
      let counter = 0;

      DataService.getRestaurantDetails( id )
        .then( ([rest]) => {
          $scope.restaurant = rest

          if (rest.image) {
              angular.element(oStylesImage).html(`#preview-image{background-image:url("${rest.image}")}`);
          }

          return rest;
        })
        .then( getMarker.bind(null, "edit-map") )
        .then( marker => {

          google.maps.event.addListener(marker, 'dragend', function(evt){
            const lat = evt.latLng.lat();
            const lng = evt.latLng.lng();
            $scope.restaurant.address.coord = [ lng, lat ];

            $timeout(function() {
              $scope.$apply();
            });

          });

        })

    $scope.updateData = function(id) {
      console.log("updateData... " + id)
      const data = JSON.stringify($scope.restaurant)
      DataService.updateRestaurant( id, data)
        .then( () => {
          window.alert("Restaurant data updated succesfully!")
          $location.path(`/details/${id}`)
        })
    }

    $scope.uploadImage = function(event) {

          var files = event.target.files;
          var file = files[0];
          ImagesService.getRemoteUrlImage( file )
            .then( remoteUrl => {
                $scope.restaurant.image = remoteUrl;
                angular.element(oStylesImage).html(`#preview-image{background-image:url("${remoteUrl}")}`);
            })

    };


  })