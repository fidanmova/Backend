const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose')
const User = require('./model/userModel')
require('dotenv').config();

// settings
app.use(express.json())
/**
 * Connect Database with MongoDB cloud account
 */
mongoose.connect(`mongodb+srv://${process.env.DB_User}:${process.env.DB_password}@arifdci.fvkse.mongodb.net/test`)
.then(()=>{
    console.log('MongoDB is connected...')
})

// Routes
// Create a user from User model and save it
app.post('/user/create', (req, res)=>{
    // how to create data based on model?
    console.log(req.body)
    const newUser = new User(req.body)
    // save the data into DB using save() method
    newUser.save(()=>{
        res.json('1 User has been created')
    })
})

app.listen(PORT, ()=>{
    console.log('Server is running on ' + PORT)
})
