const mongoose = require('mongoose');

const dbUrl = 'mongodb+srv://jyoti124:Jyoti123@cluster0.glhqjnm.mongodb.net/quickpage?retryWrites=true&w=majority'

mongoose.connect(dbUrl)

.then((result) => {
    console.log('database connected!');
    
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;