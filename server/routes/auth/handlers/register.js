const Account = require('../../../models/account');

function register(passport, req, res) {

  const { username, password } = req.body;
  // const username = req.body.username;
  // const password = req.body.password;
  const newUserAccount = new Account({ username });

  Account.register( newUserAccount, password, (err, account) => {
      if (err) {
        console.log(err);
        console.log("Something bad happened registering the user...")
        return res.render('register', { account : account });
      }
      passport.authenticate('local')(req, res, () =>  res.redirect('/') );
  });

}

module.exports = register;