angular.module('myControllers')
  .controller('EditCtrl', function(
    $scope,
    $rootScope,
    $routeParams,
    $location,
		MapService,
    DataService
  ) {

      const id = $routeParams.id;
      const getMarker = MapService.getDetailsMarker;
      let counter = 0;

      DataService.getRestaurantDetails( id )
        .then( ([rest]) => {
          $scope.restaurant = rest
          return rest;
        })
        .then( getMarker.bind(null, "edit-map") )
        .then( marker => {

          google.maps.event.addListener(marker, 'dragend', function(evt){
            const lat = evt.latLng.lat();
            const lng = evt.latLng.lng();
            $scope.restaurant.address.coord = [ lng, lat ];
            $scope.$apply();
          });

        })

    $scope.updateData = function(id) {
      console.log("updateData... " + id)
      const data = JSON.stringify($scope.restaurant)
      DataService.updateRestaurant( id, data)
        .then( () => $location.path(`/details/${id}`) )
    }

  })