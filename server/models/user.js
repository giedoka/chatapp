const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: Number,
    name: String,
    firstName: String,
    lastName: String,
    email: String,
    conversationsIds: []
});

module.exports = mongoose.model('user', userSchema, 'users');