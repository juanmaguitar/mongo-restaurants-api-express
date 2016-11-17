angular.module('myControllers', ['myServices'])
  .controller('SearchCtrl', function($scope, $rootScope, DataService, NgMap, $location) {

    $scope.querySearch = "tortellini";

    $rootScope.restaurants = [];
    $rootScope.markers = [];

    DataService.getBoroughs()
        .then( boroughs => $scope.boroughs = boroughs )

    DataService.getRestaurants()
        .then( restaurants => {
          $rootScope.restaurants = restaurants
          return restaurants;
        })
        .then( restaurants => {
            NgMap.getMap()
            .then( (map) => {

              let bounds = new google.maps.LatLngBounds()

              restaurants.forEach( rest => {

                const [ lng, lat ] = rest.address.coord;
                var myLatLng = { lat, lng };

                var marker = new google.maps.Marker({
                  position: myLatLng,
                  map: map,
                  title: 'Hello World!'
                });

                $rootScope.markers.push(marker)
                bounds.extend( marker.position );

              })

            map.fitBounds( bounds );

            })
        })

    $scope.getByBorough = function(e) {

      if (e) e.preventDefault()
      const borough = $scope.borough;

      DataService.getRestaurantsByBorough( borough )
        .then( restaurants => $rootScope.restaurants = restaurants )
        .then( () =>  NgMap.getMap() )
        .then( (map) => {

          let bounds = new google.maps.LatLngBounds()

          $rootScope.markers.forEach( marker => marker.setMap(null) )
          $rootScope.restaurants.forEach( rest => {

            const [ lng, lat ] = rest.address.coord;
            var myLatLng = { lat, lng };

            var marker = new google.maps.Marker({
              position: myLatLng,
              map: map,
              title: 'Hello World!'
            });
            $rootScope.markers.push(marker)
            bounds.extend(marker.position);

          })


          map.fitBounds( bounds );


        })


    }

  })
  .controller('HomeCtrl', function($scope) {
    $scope.title = "HOME"
  })
  .controller('ResultsCtrl', function($scope, $rootScope, NgMap) {

    $scope.title = "RESTAURANTS"

    const token = 'AIzaSyC-8fnm-fKikIyZvY5Oww9qVdenK_5R3U4';
    $scope.googleMapsUrl=`https://maps.googleapis.com/maps/api/js?key=${token}`

  })
  .controller('MyController', function(NgMap) {

  });