require('dotenv').config();// read .env file here ...
const express = require('express');
const indexRouter = require('./routes/indexRouter');
// define the app
const app = express();

// setting middleware
// set the port
app.set('port', process.env.PORT || 3000);
// to make the application able to parse JSON/post data
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// for any type of request (post/get)
app.use('/', indexRouter)






// start listening
app.listen(app.get('port'), ()=>console.log(`Server is listening on port: ${app.get('port')}`));