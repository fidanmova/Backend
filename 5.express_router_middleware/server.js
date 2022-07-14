const express = require('express');
const app = express();
const PORT = 5000;
const userRouter = require('./routes/userRouter')
const productRouter = require('./routes/productRouter')
const dateAndTime = require('./middleware/dateAndTime')
// settings
// setting for getting json data from client
app.use(express.json())

app.use(dateAndTime.login) // login middleware

app.get('/', (req, res)=>{
    res.json('Its Final response')
})

// app.use('/firstPartOfRoute', nameOfTheModule)
app.use('/user', userRouter)
app.use('/product', productRouter)

app.listen(PORT, ()=>{
    console.log('Server is running on ' + PORT)
})
