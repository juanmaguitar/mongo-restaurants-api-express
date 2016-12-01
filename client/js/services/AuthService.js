angular.module('myServices')
  .factory("AuthService", function( $rootScope, $http, $location, StorageService, AccountService, jwtHelper ) {

    function register( userData ) {
      const url = '/auth/register'
      return $http.post( url, userData )
    }

    function login( userData ) {
      const url = '/auth/login'
      return $http.post( url, userData )
                  .then( data => data.data.token )
    }

    function isLoggedIn() {
      try {
        var token = StorageService.readToken();
        var tokenPayload = jwtHelper.decodeToken( token );
        return !( jwtHelper.isTokenExpired( token ) )
      } catch( e ) {
        return false
      }
    }


    function logout() {
      StorageService.removeToken();
      delete $rootScope.loggedUser;
    }

    function setCredentials( token ) {

//      $rootScope.loggedUser = {};
      //const tokenPayload = jwtHelper.decodeToken( token );
      //const { id } = tokenPayload;
      AccountService.getMe()
        .then( data => {
          const { username, email, fullname, social, image } = data;
          $rootScope.loggedUser = { username, email, fullname, social, image };
        })
        .catch( console.error )

      return token;

    }

    return { register, login, isLoggedIn, logout, setCredentials }

  })