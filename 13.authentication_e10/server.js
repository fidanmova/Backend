const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const mongoose = require('mongoose');
const cors = require('cors')
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const session = require('express-session')

// session setup
app.use(session({
    secret: 'bond007-james bond', // any secret text
    cookie: { 
        // time period for session data (e.g. store data for 1 day: 1000*60*60*24)
        maxAge: 1000*60*60*24 
    },
    resave:false,
    saveUninitialized: true
}))

// connect DB
mongoose.connect(process.env.DB_LINK)
.then(()=>{
    console.log('My Database is connected...')
})
.catch(error=> console.log('Database is not connected'))

app.use(express.json());
app.use(cors())
app.use('/', indexRouter)
app.use('/user', userRouter)

app.listen(PORT, ()=>{
    console.log(`The Server is running Successfully in ${PORT} .....`);
});
