const express = require('express');
const app = express();
require('dotenv').config();
const {DB_User, DB_password, DB_Name, PORT} = process.env;
const mongoose = require('mongoose')

// settings
app.use(express.json())
/**
 * Connect Database with MongoDB cloud account
 */
mongoose.connect(`mongodb+srv://${DB_User}:${DB_password}@arifdci.fvkse.mongodb.net/${DB_Name}`)
.then(()=>{
    console.log('MongoDB is connected...')
})

// Routes

app.listen(PORT, ()=>{
    console.log('Server is running on ' + PORT)
})
