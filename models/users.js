const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const User = new Schema({
    name: { type: String},
    email: { type: String},
    password: { type: String},
    shippingAddress: {
        home:  { type: String},
        street: { type: String},
        district: { type: String},
        city: { type: String},
    },
}, { timestamps: true });

module.exports = mongoose.model('users', User);
