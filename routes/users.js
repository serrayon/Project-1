const express = require('express');
const router = express.Router();

// Databse
const db = require('../models');
function getTime() {
    return new Date().toLocaleString();
  };
  
// Users Index
router.get('/', (req, res) => {
    db.User.find({}, (err, allUsers) => {
      if (err) return res.status(400).json({
        status: 400,
        message: 'Something went wrong, please try again',
      });
  
      res.status(200).json({
        status: 200,
        numberOfResults: allUsers.length,
        data: allUsers,
        requestedAt: getTime(),
      });
    });
  });
  
  // User Show
  router.get('/:user_id', (req, res) => {
    db.User.findById(req.params.user_id, (err, foundUser) => {
      if (err) return res.status(400).json({
        status: 400,
        message: 'Something went wrong, please try again',
      });
  
      res.status(200).json({
        status: 200,
        data: foundUser,
        requestedAt: getTime(),
      });
    });
  });
  
  // User Create
  router.post('/', (req ,res) => {
    const newUser = req.body;
  
    db.User.create(newUser, (err, createdUser) => {
      if (err) return res.status(400).json({
        status: 400,
        message: 'Something went wrong, please try again'});
  
      res.status(201).json({
        status: 201,
        data: createdUser,
        requestedAt: getTime(),
      });
    });
  });
  
  // User Update
  router.put('/:user_id', (req, res) => {
    console.log(req.body);
    db.User.findByIdAndUpdate(req.params.user_id, req.body, { new: true }, (err, updatedUser) => {
      console.log(updatedUser)
      if (err) return res.status(400).json({
        status: 400,
        message: 'Something went wrong, please try again',
      });
  
      res.status(202).json({
        status: 202,
        data: updatedUser,
        requestedAt: getTime(),
      });
    });
  })
  
  // User Destroy
  router.delete('/:user_id', (req, res) => {
    db.User.findByIdAndDelete(req.params.user_id, (err, deletedUser) => {
      if (err) return res.status(400).json({
        status: 400,
        message: 'Something went wrong, please try again',
      });
  
      console.log(deletedUser);
      res.status(200).json({
        status: 200,
        message: 'Success',
      });
    });
  });


  module.exports = router;