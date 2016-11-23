const aws = require('aws-sdk');

/*
* Respond to GET requests to /sign-s3.
* Upon request, return JSON containing the temporarily-signed S3 request and
* the anticipated URL of the image.
*/
function signS3 (req, res) {

  const S3_BUCKET = process.env.S3_BUCKET;

  const s3 = new aws.S3();
  const fileName = req.query['name'];
  const fileType = req.query['type'];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {

    if(err) {
      console.log(err);
      return res.end();
    }

    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };

    res.write( JSON.stringify(returnData) );
    res.end();
  });

};

module.exports = signS3