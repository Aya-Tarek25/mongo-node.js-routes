const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    userName: {
        type: String,
        required: true,
        unique:true,
        minLength: 2,
        maxLength: 10

    },
     password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 15

    },
    age:{ 
        type:Number,
        min:13
    }
    
})


const User = mongoose.model('User', userSchema);

module.exports = User;
