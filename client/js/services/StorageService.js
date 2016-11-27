angular.module('myServices')
  .factory("StorageService", function( $window ) {

    const keyToken = 'myApp-token';
    const keyRemember = 'myApp-rememberMe';

    const $localStorage = $window.localStorage;
    const $sessionStorage = $window.sessionStorage;

    /* store if using localStorage or sessionStorage */
    const getRememberMe = () => $localStorage[keyRemember]

    const setRememberMe = ( value ) => {
      $localStorage[keyRemember] = value;
      return value;
    }

    /* token management */
    const readToken = () => {
      const storage = !!getRememberMe() ? $localStorage : $sessionStorage;
      return storage[keyToken];
    }

    const removeToken = () => {
      const storage = !!getRememberMe() ? $localStorage : $sessionStorage;
      delete storage[keyToken];
    }

    const saveToken = ( token ) => {
      delete $sessionStorage[keyToken];
      delete $localStorage[keyToken];

      const storage = !!getRememberMe() ? $localStorage : $sessionStorage;
      storage[keyToken] = token;
      return token;
    }

    return { getRememberMe, setRememberMe, readToken, saveToken, removeToken }

  })