const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const util = require('util'); //for objects logs

const Conversation = require('../models/conversation');
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

router.patch('/conversations/:id/send-message', (req, res) => {
    const message = {
        authorId: req.body.authorId,
        authorFirstName: req.body.authorFirstName,
        authorLastName: req.body.authorLastName,
        content: req.body.content,
        date: new Date(),
        status: 'sent',
    };
    Conversation.findByIdAndUpdate(
        req.params.id,
        {$push: {messages: message}},
        {safe: true, upsert: true},
        function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }
            res.status(201).json({
                message: 'Saved message to conversation' + req.body.conversationId,
                obj: result
            });
        }
    );
    // Conversation.save(function(err, result) {
    //     if (err) {
    //         return res.status(500).json({
    //             title: 'An error occured',
    //             error: err
    //         });
    //     }
    //     res.status(201).json({
    //         message: 'Saved message',
    //         obj: result
    //     });
    // });
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

module.exports = router;