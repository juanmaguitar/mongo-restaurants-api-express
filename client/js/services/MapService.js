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

		function createMarker( map, rest, customOptions = {} ) {

			const [ lng, lat ] = rest.address.coord;
			const myLatLng = { lat, lng };
			let defaultOptions = {
				position: myLatLng,
				map: map,
				title: 'Hello World!'
			};

			const options = _.extend( defaultOptions, customOptions)

			const marker = new google.maps.Marker(options);

			const infowindow = new google.maps.InfoWindow({
		    content: `<h3><a href="#/details/${rest._id}">${ rest.name }</h3><p>${ rest.borough } | ${ rest.cuisine }</p><p>${ rest.address.zipcode }</p>`
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

		function getDetailsMarker(idMap, rest ){

			let optionsMarker = {
				animation: google.maps.Animation.DROP
			};

			if (idMap == "edit-map") {
				optionsMarker = _.extend( optionsMarker, {
					draggable: true
				})
			}

			return NgMap.getMap({ id: idMap })
				.then( (map) => {

					const prevMarker = getDetailsMarker.marker;
					const [ lat, lng ] = rest.address.coord;
					const myLatlng = new google.maps.LatLng(lng, lat);

					prevMarker ? prevMarker.setMap(null) : null;
					getDetailsMarker.marker = createMarker( map, rest, optionsMarker );

					map.setZoom(16);
	  			map.panTo(myLatlng)

	  			return getDetailsMarker.marker;

				})

		}

		function getMarkers() {
			cleanMarkers();
			return NgMap.getMap({ id: 'main-map' }).then( showMarkers )
		}

		$rootScope.setCenter = function( coords ) {

	  	const [ lat, lng ] = coords;
	  	const myLatlng = new google.maps.LatLng(lng, lat);

	  	NgMap.getMap({ id: 'main-map' })
	  		.then( map => {
	  			map.setZoom(16);
	  			map.panTo(myLatlng)
	  		})

	  }


		return { getMarkers, getDetailsMarker }

	})