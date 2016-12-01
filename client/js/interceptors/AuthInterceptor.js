angular.module('myInterceptors', ['myServices'])
  .factory('AuthInterceptor', function AuthInterceptor( StorageService ){
    'use strict';

    return {
      request: addToken
    };


    function addToken(config) {

      const { url } = config;
      if ( url.includes('s3.amazonaws.com') ) return config;

      const token = StorageService.readToken()
      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = 'Bearer ' + token
      }
      return config;
    }

  })