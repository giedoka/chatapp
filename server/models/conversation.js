const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const conversationSchema = new Schema({
    id: Number,
    usersCount: Number,
    usersIds: [String],
    messages: [{
        authorId: String,
        authorFirstName: String,
        authorLastName: String,
        content: String,
        date: Date,
        status: String,
    }]
});

module.exports = mongoose.model('conversation', conversationSchema, 'conversations');