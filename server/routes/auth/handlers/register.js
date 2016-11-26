const Account = require('../../../models/account');

function register(passport, req, res) {

  const { username, password } = req.body;
  // const username = req.body.username;
  // const password = req.body.password;
  const newUserAccount = new Account({ username });

  const promisedAccountRegister = (newUserAccount, password) => {
    return new Promise( (resolve, reject) => {
      Account.register( newUserAccount, password, (err, account) => {
        if (err) reject(err)
        resolve(account)
      })
    })
  }

  promisedAccountRegister( newUserAccount, password )
    .then( account => {
      passport.authenticate('local')(req, res, () =>  res.status(200).json(account) );
    })
    .catch( err => {
      console.log(err);
      console.log("Something bad happened registering the user...")
      // return res.render('register', { account : account });
      res.status(500).json(err)
    })

}

module.exports = register;