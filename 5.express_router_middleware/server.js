const express = require('express');
const app = express();
const PORT = 5000;
const userRouter = require('./routes/userRouter')
const productRouter = require('./routes/productRouter')
//const dateAndTime = require('./middleware/dateAndTime')
// settings
// setting for getting json data from client
app.use(express.json())

//app.use(dateAndTime.login) // login middleware

// a route: loalhost:5000
// app.get(PATH, middleware...., Final-Callback)
const {middleware1, middleware2, notMiddleware} = require('./middleware/test')
app.get('/', middleware1,middleware2,(req, res)=>{
    notMiddleware();
    res.json(req.user)
})


// app.use('/firstPartOfRoute', nameOfTheModule)
app.use('/user', userRouter)
app.use('/product', productRouter)

app.listen(PORT, ()=>{
    console.log('Server is running on ' + PORT)
})
