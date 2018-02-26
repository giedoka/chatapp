const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Conversation = require('../models/conversation');
const User = require('../models/user');
const util = require('util'); //for objects logs

const dbUrl = 'mongodb://localhost:27017/chatapp';
mongoose.Promise = global.Promise
mongoose.connect(dbUrl, (err) => {
   if (err) {
      console.log('Error! ', err);
   }
});

router.get('/conversations', (req, res) => {
   console.log('Get request for all conversations');
   Conversation.find({}).exec((err, conversations) => {
      if (err) {
          console.log('Error retrieving conversations!');
      } else {
         res.json(conversations);
      }
   });
});

router.get('/conversations/:id', (req, res) => {
    Conversation.findById(req.params.id).exec((err, conversation) => {
        if (err) {
            console.log('Error retrieving this conversation! (id: ' + req.params.id + ')');
        } else {
            res.json(conversation);
        }
    });
});

router.get('/users', (req, res) => {
    console.log('Get request for all users');
    User.find({}).exec((err, users) => {
        if (err) {
            console.log('Error retrieving users!');
        } else {
            res.json(users);
        }
    });
});

router.get('/users/:id', (req, res) => {
    User.findById(req.params.id).exec((err, user) => {
        if (err) {
            console.log('Error retrieving this user! (id: ' + req.params.id + ')');
        } else {
            res.json(user);
        }
    });
});

router.get

module.exports = router;