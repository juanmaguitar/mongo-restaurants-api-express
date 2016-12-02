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

      AccountService.getMe()
        .then( data => {
          const { username, email, fullname, social, image, roles } = data;
          $rootScope.loggedUser = { username, email, fullname, social, image, roles };
        })
        .catch( console.error )

      return token;

    }

    $rootScope.isAdmin = function() {
      const {roles} = $rootScope.loggedUser;
      if (!roles) return false

      const areRoles = !!roles.length
      return  areRoles ? roles.indexOf('admin') != -1 : false;
    }

    return { register, login, isLoggedIn, logout, setCredentials }

  })