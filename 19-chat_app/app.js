const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const {log} = require('console')
const indexRouter = require('./routes/index');
const chatRouter = require('./routes/chat');

const app = express();

app.set('port', process.env.PORT || 3000)
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// for bootstrap
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap')))
app.use('/', indexRouter);
app.use('/chat', chatRouter);

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
// define the server
const server = app.listen(app.get('port'), ()=>log(`The Chat App ready on port: ${app.get('port')}`))
// ws server init:
const io = require('socket.io')(server)

let users = []

io.on('connection', socket=>{
  log('A new User is Connected')
  log(socket.handshake.query.nickName)
  users.push(socket.handshake.query.nickName)
  // each new user has a room:
  socket.join(socket.handshake.query.nickName)

  // listener for incoming message
  socket.on("userMessage", messageInfo=>{
    log(messageInfo)
    // proadcast to all connected clients include the sender
    io.emit("messageFromServer", messageInfo)
    // socket.broadcast.emit(...)==> broadcast the message to all clients EXEPT the sender
  })

  // to specific user send
  socket.on("spscificUser", messageInfo=>{
    log(messageInfo)
    // send only to specific user
    socket.to(messageInfo.to).emit('messageFromServer', messageInfo)
  })

  io.emit('newUser', socket.handshake.query.nickName)

})
