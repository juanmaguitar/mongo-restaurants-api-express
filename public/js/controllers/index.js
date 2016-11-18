angular.module('myControllers', ['myServices'])
.controller('SearchCtrl', function($scope, $rootScope, DataService, NgMap, $location) {

  $scope.querySearch = "tortellini";

})
.controller('HomeCtrl', function($scope) {
  $scope.title = "HOME"
})
.controller('ByCuisineCtrl', function($scope, $routeParams, $rootScope, DataService, NgMap) {

    const cuisine = $routeParams.cuisine;

    DataService.getRestaurantsByCuisine( cuisine )
      .then( restaurants => $rootScope.restaurants = restaurants )
      .then( () =>  NgMap.getMap() )
      .then( (map) => {

        let bounds = new google.maps.LatLngBounds()

        if ($rootScope.markers && $rootScope.markers.length) {
          $rootScope.markers.forEach( marker => marker.setMap(null) )
        }
        else {
          $rootScope.markers = [];
        }

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


})
.controller('ByBoroughCtrl', function($scope, $routeParams, $rootScope, DataService, NgMap) {


    const borough = $routeParams.borough;


    DataService.getRestaurantsByBorough( borough )
      .then( restaurants => $rootScope.restaurants = restaurants )
      .then( () =>  NgMap.getMap() )
      .then( (map) => {

        let bounds = new google.maps.LatLngBounds()

        if ($rootScope.markers && $rootScope.markers.length) {
          $rootScope.markers.forEach( marker => marker.setMap(null) )
        }
        else {
          $rootScope.markers = [];
        }

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


})
.controller('ResultsCtrl', function($scope, $rootScope, DataService, NgMap) {

  $scope.title = "RESTAURANTS"

  DataService.getRestaurants()
    .then( restaurants => {
      $rootScope.restaurants = restaurants
      return restaurants;
    })
    .then( restaurants => {
      NgMap.getMap()
      .then( (map) => {

        let bounds = new google.maps.LatLngBounds()

        $rootScope.markers = [];

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


  const token = 'AIzaSyC-8fnm-fKikIyZvY5Oww9qVdenK_5R3U4';
  $scope.googleMapsUrl=`https://maps.googleapis.com/maps/api/js?key=${token}`

})
.controller('MyController', function(NgMap) {

})
.controller('MenuCtrl', function ($scope, $location, $rootScope, NgMap, $routeParams, DataService ) {

  DataService.getBoroughs()
    .then( boroughs => $scope.boroughs = boroughs )

  DataService.getCuisines()
    .then( cuisines => $scope.cuisines = cuisines )

  $scope.getByCuisine = function(cuisine) {
    $location.path('/cuisines/' + cuisine );
  }

});


