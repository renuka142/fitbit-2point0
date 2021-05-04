const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load User model
const User = require('../models/User');

// Login Page
router.get('/login',(req, res) => res.render('login'));

// Register Page
router.get('/register',(req, res) => res.render('register'));

// Register
router.post('/register', (req, res) => {
   //pulling variables out from req.body
  const { name, email, password, password2 } = req.body;
  let errors = [];

  //----validation starts-------

  //check required fields
  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' });
  }

  //check password match
  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  //check the password length
  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    //validation passed
    //making sure user doesn't exsist
    User.findOne({ email: email }).then(user => {
      if (user) {
        //user exists
        errors.push({ msg: 'Email already exists' });
        res.render('register', {
          errors,
          name,
          email,
          password,
          password2
        });
      } else {
        //creating a new user
        const newUser = new User({
          //Passing the values
          name,
          email,
          password
        });
        //Hash password
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            //set password to hash
            newUser.password = hash;
            //Save user to database
            newUser
              .save()
              .then(user => {
                req.flash(
                  'success_msg',
                  'You are now registered'
                );
                res.redirect('/users/login');
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/exercise/about.html',
    failureRedirect: '/users/login',
    failureFlash: true //Fash error msg as that email is not registered
  })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout(); //passport middleware
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});

module.exports = router;

