angular.module('myServices')
  .factory("StorageService", function( $window ) {

    const keyToken = 'myApp-token';
    const keyRemember = 'myApp-rememberMe-storage';

    const $localStorage = $window.localStorage;
    const $sessionStorage = $window.sessionStorage;

    /* store if using localStorage or sessionStorage */
    const getRememberMe = () => $localStorage[keyRemember]
    const getStorageMethod = () => getRememberMe() === 'true' ? $localStorage : $sessionStorage;

    // true => localStorage
    // false => sessionStorage
    const setRememberMe = ( value ) => {
      $localStorage[keyRemember] = value;
      return value;
    }

    /* token management */
    const readToken = () => {
      const storage = getStorageMethod()
      return storage[keyToken];
    }

    const removeToken = () => {
      const storage = getStorageMethod()
      delete storage[keyToken];
    }

    const saveToken = ( token ) => {
      delete $sessionStorage[keyToken];
      delete $localStorage[keyToken];

      const storage = getStorageMethod()
      storage[keyToken] = token;
      return token;
    }

    return { getRememberMe, setRememberMe, readToken, saveToken, removeToken }

  })