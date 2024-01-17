const mongoose = require('mongoose');
const express = require('express')
const app = express()
const port = 8000
const User = require('./models/User');
const Todo = require('./models/todo');
const userRoute = require('./routes/userRoute');
const todoRoute = require('./routes/todoRoute');
const userController = require("./controllers/UserController")
const todoController = require("./controllers/TodoController")
mongoose.connect('mongodb://127.0.0.1:27017/ITI').then(() => {
    console.log("connect to db");
}).catch(err => {
    console.log(err);
})
app.use(express.urlencoded({ extended: true }));
app.use('/user', userRoute);
app.use('/todo', todoRoute);
//todoController.createTodo("reemtt","thirdtodo",["cc","tt"]);
//todoController.getTodos("65a66e54c7200227a2e521be");
//todoController.editTodo("65a695eceb99fe689d36d8cc","newfirsttodo");
//todoController.deleteTodo("secondttodo");

//Register new user
//userController.Register("reemtt","123456","reem");

//display all users
//userController.getAllUsers();

//delete user
//userController.deleteUser("reemtt");

//userController.editUser("adammohamd","esraatt","123457","esraa");


// User.create({ userName: "ayatarek",password:"12345",firstName:"aya", age: 25 }).then(data => {
//         console.log(data);
//     })
// User.create({ userName: "adammohamd",password:"12345",firstName:"adam", age: 20 }).then(data => {
//         console.log(data);
//     })

app.listen(port, () => console.log(`listening on port ${port}!`))