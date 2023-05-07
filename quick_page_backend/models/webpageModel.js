const {model, Schema, Types} = require('../connection');

const myschema = new Schema({
    title : String,
    data : Object,
    expireDate : Date,
    user: {type: Types.ObjectId, ref : 'users'},
    createdAt: Date
});

module.exports = model('webpages', myschema);