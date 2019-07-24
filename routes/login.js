const express = require('express');
const router = express.Router();

// Databse
const db = require('../models');


router.post('/', (req ,res) => {
  const username = req.body.username;

  db.User.find({username: username}, (err, users) => {
      let user = users[0]
      if (user) {
        req.session.user_id = user._id
        req.session.save(() => {
          res.redirect('/main')
        })
      } else {
        db.User.create(req.body, (err, newUser) => {
          req.session.user_id = newUser._id
          req.session.save(() => {
            res.redirect('/main')
          });
        })
      }

  });
});

  module.exports = router;
