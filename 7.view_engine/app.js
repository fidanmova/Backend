const express  = require('express')
const usersRouter = require('./routes/users')
require('dotenv').config()
const app = express();


// setting application middleware
app.set('port', process.env.PORT || 3000)
// tell express that we will use ejs as a view engine
app.set('view engine', 'ejs')
// tell express, where is the views folder
// app.set('views', 'where is your views folder')
app.set('views', 'views')

//use usersRouter as handler for any request start with /users
app.use('/users', usersRouter)







app.listen(app.get('port'), ()=>console.log(`Server is running on port ${app.get('port')}`))