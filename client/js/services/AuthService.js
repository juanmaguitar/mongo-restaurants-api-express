angular.module('myServices')
  .factory("AuthService", function( $http ) {

  	function register( userData ) {
  		const url = '/auth/register'
  		return $http.post( url, userData )
  	}

  	function login( userData ) {
  		const url = '/auth/login'
  		return $http.post( url, userData )
  	}

    return { register, login }

  })