const path = require('path');
const express = require('express');
const mongoose= require('mongoose');
const passport = require('passport');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const keys = require('./config/keys.js');

var app = express();
var users = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, '.../public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(cookieSession({maxAge: 30 * 24 * 60 * 60 * 1000,keys: [keys.cookieKey],}))
app.use(cookieParser());

// Database Connection
const db = mongoose.connect(`mongodb://localhost:27017/suventure`,(err,database)=>{
  if(err){
    console.log("Not Able to connect to Database",err);
  }else {
    console.log("connection to database was sucessfull");
  }
})

app.use(passport.initialize());
app.use(passport.session());

require('./routes/index')(app,db)
require('./routes/authRoutes.js')(app);

// index(app,db);
// app.use('/', index)
// app.use('/users', users);

// catch default error fallback
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'public','index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;
