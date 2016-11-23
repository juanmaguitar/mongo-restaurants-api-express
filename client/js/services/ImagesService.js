angular.module('myServices')
.factory("ImagesService", function( $http ) {

    function getRemoteUrlImage( file ) {

      const { name, type, size } = file;

      function addToAWS({ signedRequest, url }) {

        const options = { headers: { 'Content-Type': type } }
        return $http.put(signedRequest, file, options )
                  .then( () => url )
                  .catch( err => new Error("Fail uploading!") )
      }

      if( size > 10585760) return new Error("Image too big!!")

      const url = '/sign-s3';

      return $http.get( url, { params: { name, type } } )
                    .then( d => d.data )
                    .then( addToAWS )


    }


  return { getRemoteUrlImage }

})