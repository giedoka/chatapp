const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const conversationSchema = new Schema({
    id: Number,
    usersCount: Number,
    usersIds: [],
    messages: []
});

module.exports = mongoose.model('conversation', conversationSchema, 'conversations');