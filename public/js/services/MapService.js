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

	function createMarker( map, rest ) {

		const [ lng, lat ] = rest.address.coord;
		const myLatLng = { lat, lng };

		const marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			title: 'Hello World!'
		});

		const infowindow = new google.maps.InfoWindow({
	    content: `<h3>${ rest.name }</h3><p>${ rest.borough } | ${ rest.cuisine }</p><p>${ rest.address.zipcode }</p>`
	  });

	  marker.addListener('click', function() {
	    infowindow.open(map, marker);
	  });

	  return marker;

	}

	function showMarkers(map){

		let bounds = new google.maps.LatLngBounds()

		$rootScope.restaurants.forEach( rest => {

			const marker = createMarker( map, rest );
			$rootScope.markers.push(marker)
			bounds.extend(marker.position);

		})

		map.fitBounds( bounds );

	}


	function getMarkers() {
		cleanMarkers();
		return NgMap.getMap().then( showMarkers )
	}

	$rootScope.setCenter = function( coords ) {

  	const [ lat, lng ] = coords;
  	const myLatlng = new google.maps.LatLng(lng, lat);

  	NgMap.getMap()
  		.then( map => {
  			map.setZoom(16);
  			map.panTo(myLatlng)
  		})

  }


	return { getMarkers }

})