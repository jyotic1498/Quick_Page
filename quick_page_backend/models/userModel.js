const {model, Schema} = require('../connection');

const myschema = new Schema({
    name : String,
    address : String,
    email : String,
    contact: String,
    password : String,
    age : Number
});

module.exports = model('users', myschema);