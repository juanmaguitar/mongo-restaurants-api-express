angular.module('myServices')
.factory("MapService", function( $rootScope, NgMap ) {

	function cleanMarkers(  ) {
		if ($rootScope.markers && $rootScope.markers.length) {
			$rootScope.markers.forEach( marker => marker.setMap(null) )
		}
		else {
			$rootScope.markers = [];
		}
	}

	function createMarker( map, lng, lat ) {
		var myLatLng = { lat, lng };

		return new google.maps.Marker({
			position: myLatLng,
			map: map,
			title: 'Hello World!'
		});

	}

	function showMarkers(map){

		let bounds = new google.maps.LatLngBounds()

		$rootScope.restaurants.forEach( rest => {

			const [ lng, lat ] = rest.address.coord;
			const marker = createMarker( map, lng, lat );
			$rootScope.markers.push(marker)
			bounds.extend(marker.position);

		})

		map.fitBounds( bounds );

	}


	function getMarkers() {
		cleanMarkers();
		return NgMap.getMap().then( showMarkers )
	}

	return { getMarkers }

})