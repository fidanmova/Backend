const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const {log} = require('console')
const os  = require('os')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
// setting PORT
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

const server = app.listen(app.get('port'), ()=>log(`Server is listening On Port: ${app.get("port")}`))
// create ws server
const io = require('socket.io')(server)

let getMemInterval;
io.on('connection', socket=>{
  log('someone connected to ws server')
  
  // send message each 1000ms
  getMemInterval = setInterval(()=>{
    let freeMem = os.freemem()
    let totalMem = os.totalmem()
    let usedMem = totalMem - freeMem
    let pesentageValueUsedMem = Math.floor(usedMem *100 /totalMem)
    let pesentageValueFreeMem = Math.floor(freeMem *100 /totalMem)
    socket.emit("memData", {freeUsage: pesentageValueFreeMem, usedUsage: pesentageValueUsedMem})
  }, 1000)

  // if someone disconnected
  socket.on('disconnect', ()=>{
    log('someone is disconnected')
    clearInterval(getMemInterval)
  })
})