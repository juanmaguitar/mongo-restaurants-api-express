const gravatar = require("gravatar");

function getImageGravatar( email, s=200 ) {

  const d = 'mm'// default;
  const protocol = 'https'// default;

  return gravatar.url( email, { s, d, protocol } );

}

module.exports = getImageGravatar