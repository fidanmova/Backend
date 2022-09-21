const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const {log} = require('console')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
//let x = someVar || 500
// setting the port:
app.set('port', process.env.PORT || 3000)
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// module.exports = app;
// make app.js entry file, so the listener is here 
const server = app.listen(app.get('port'), ()=>log(`the server is running on port: ${app.get('port')}`))
// start Websocket (ws) Server
// 1- install socket.io : `npm i socket.io` 
// 2- require that library
const io = require('socket.io')(server)
// events
io.on('connection', (socket)=>{
  log("some body is connected")
  // listener for 'messageName' message from client
  socket.on('messageName', message=>{
    log(message)
    // response from server
    // socket.emit("response", "Hello client")
    // socket.emit("response", "Hello client")
    // socket.emit("response", "Hello client")
    // socket.emit("response", "Hello client")
    // socket.emit('socketEmitter', "socket emit message")
    // broadcast the message to all connected clients exept sender
    socket.broadcast.emit('socketEmitter', "socket emit message")
  })

  // broadcasting message to all connected users/clients
  io.emit('generalMessage', "Hello everyone")
  
  // sending some random stuff
  // setInterval(()=>{
  //   io.emit('data', Math.floor(Math.random()*10))
  // },1000)
  socket.on('stop', msg=>{
    // disconnect user
    socket.disconnect()
  })
})

