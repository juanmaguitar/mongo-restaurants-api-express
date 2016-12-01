angular.module('myServices')
	.factory("AccountService", function( $http ) {

			function getMe() {
				const url = `/account/me`;
				return $http.get( url )
										.then( d => d.data )
			}

			function updateMe(data) {
				const url = `/account/me`;
				const method = 'POST';
				return $http( { url, method, data } )
									.catch( err => console.log("someting went wrong w/ the update!") )
			}

			return { updateMe, getMe }

	})