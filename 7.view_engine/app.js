const express  = require('express')
const usersRouter = require('./routes/users')
require('dotenv').config()
const app = express();


// setting application middleware
app.set('port', process.env.PORT || 3000)

//use usersRouter as handler for any request start with /users
app.use('/users', usersRouter)







app.listen(app.get('port'), ()=>console.log(`Server is running on port ${app.get('port')}`))