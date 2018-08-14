const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const util = require('util'); //for objects logs
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Conversation = require('../models/conversation');
// const dbUrl = 'mongodb://127.0.0.1:27017/chatapp';
const dbUrl = 'mongodb://groniu:groniu@%2Fopt%2Fbitnami%2Fmongodb%2Ftmp%2Fmongodb-27017.sock/chatapp';

// const config = require('config');
// const dbConfig = config.get('chatapp.dbConfig');

mongoose.Promise = global.Promise
mongoose.connect(dbUrl, (err) => {

    if (err) {
        console.log('Error! ', err);
    }
});

router.post('/users', (req, res) => {
    const user = new User({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        name: req.body.name,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        conversationsIds: []
    });
    user.save((err, result) => {
        if (!user.email || !user.password || !user.name || !user.firstName || !user.lastName) {
            return res.status(401).json({
                status: 'err',
                title: 'An error occured',
                error: {message: 'Fill the required fields'}
            });
        }
        if (err) {
            return res.status(500).json({
                status: 'err',
                title: 'Register failed',
                error: err
            });
        }
        res.status(201).json({
            status: 'ok',
            message: 'User created',
            obj: result
        });
    });
});

router.post('/users/signin', (req, res) => {
    User.findOne({email: req.body.email}, (err, user) => {
        if (err) {
            return res.status(500).json({
                status: 'err',
                title: 'An error occured',
                error: err
            });
        }
        if (!user) {
            return res.status(401).json({
                status: 'err',
                title: 'Login failed',
                error: {message: 'Invalid credentials'}
            });
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                status: 'err',
                title: 'Login failed',
                error: {message: 'Invalid credentials'}
            });
        }
        const token = jwt.sign({userId: user._id}, 'secret', {expiresIn: 7200});
        res.status(200).json({
            status: 'ok',
            message: 'Successfully logged in',
            token: token,
            userId: user._id
        });
    });
});

router.get('/users', (req, res) => {
    if (req.query.search) {
        const query = {
            $or: [{name: {$regex: req.query.search, $options: 'i'}}, {
                firstName: {
                    $regex: req.query.search,
                    $options: 'i'
                }
            }, {lastName: {$regex: req.query.search, $options: 'i'}}]
        };
        User.find(query).exec((err, users) => {
            if (err) {
                console.log('Error retrieving users!');
            } else {
                res.json(users);
            }
        });
    } else {
        User.find({}).exec((err, users) => {
            if (err) {
                console.log('Error retrieving users!');
            } else {
                res.json(users);
            }
        });
    }
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

router.use('/conversations', (req, res, next) => {
    jwt.verify(req.query.token, 'secret', (err, decoded) => {
        if (err) {
            return res.status(401).json({
                title: 'Not authenticated',
                error: err
            });
        }
        next();
    });
});

router.get('/conversations', (req, res) => {
    console.log('Get request for all conversations');
    const decode = jwt.decode(req.query.token);
    User.findById(decode.userId).exec((err, user) => {
        if (!err) {
            Conversation.find({'_id': {$in: user.conversationsIds}}).exec((err, conversations) => {
                if (err) {
                    console.log('Error retrieving conversations!');
                } else {
                    res.json(conversations);
                }
            });
        }
    });
});

router.get('/conversations/:id', (req, res) => {
    const decode = jwt.decode(req.query.token);
    User.findById(decode.userId).exec((err, user) => {
        if (!err) {
            Conversation.findById(req.params.id).exec((err, conversation) => {
                if (err) {
                    console.log('Error retrieving this conversation! (id: ' + req.params.id + ')');
                } else {
                    if (user.conversationsIds.indexOf(conversation._id.toString()) < 0) {
                        return res.status(401).json({
                            title: 'Not authenticated',
                            error: 'Conversation does not belong to this user'
                        });
                    }
                    res.json(conversation);
                }
            });
        }
    });
});

router.patch('/users/add-conversation', (req, res) => {
    const decode = jwt.decode(req.query.token);
    User.findById(decode.userId).exec((err, user) => {
        if (!err) {
            User.update(
                {_id: {$in: [user._id, req.body.receiverId]}},
                {$push: {conversationsIds: req.query.conversationId}},
                {'multi': true},
                (err, result) => {
                    if (err) {
                        return res.status(500).json({
                            title: 'An error occured',
                            error: err
                        });
                    }
                    res.status(201).json({
                        message: 'Conversation ID saved to users',
                        obj: result
                    });
                });
        }
    });
});

router.post('/conversations/create-conversation', (req, res) => {
    const decode = jwt.decode(req.query.token);

    User.findById(decode.userId).exec((err, user) => {
        if (!err) {
            const conversation = new Conversation({
                usersCount: 2,
                usersIds: [user._id, req.body.receiverId],
                messages: []
            });

            conversation.save((err, result) => {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occured',
                        error: err
                    });
                }
                res.status(201).json({
                    message: 'Conversation created',
                    obj: result
                });
                console.log(conversation);
            });
        }
    });
});

router.patch('/conversations/:id/send-message', (req, res) => {
    const decode = jwt.decode(req.query.token);
    User.findById(decode.userId).exec((err, user) => {
        if (!err) {
            User.findById(user._id, (err, user) => {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occured',
                        error: err
                    });
                }
                const message = {
                    authorId: user._id,
                    authorFirstName: req.body.authorFirstName,
                    authorLastName: req.body.authorLastName,
                    content: req.body.content,
                    date: new Date(),
                    status: 'sent',
                    conversationId: req.body.conversationId
                };
                Conversation.findByIdAndUpdate(
                    req.params.id,
                    {$push: {messages: message}},
                    {safe: true, upsert: true},
                    function (err, result) {
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
            });
        }
    });
});

module.exports = router;