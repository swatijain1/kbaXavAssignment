const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username: {type: String, required:[true, 'Username Required'], unique:[true, 'Username already taken']},
    password: {type: String, required:[true, 'Password Required'], min: [6,'Week Password']},
    name: {type: String},
    nationality: {type: String, default: 'Indian'}
})

module.exports = mongoose.model('user', schema)
