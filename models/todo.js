const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true,
        unique: true,
        minLength: 5,
        maxLength: 20
    },
    status: {
        type: String,
        required: false,
        default:"to-do"
    },
    tags:{
        type: [String],
        required: false,
        maxLength:10,
        createdAt:Date.now
    }
})


const Todo = mongoose.model("Todo", todoSchema);
Todo.createIndexes({ title: 1 });
module.exports = Todo;