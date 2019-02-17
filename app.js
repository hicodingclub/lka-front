const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const mongoose = require('mongoose');
const mongoDB = 'mongodb://lkauser:lkauser1@ds143683.mlab.com:43683/lka';
mongoose.connect(mongoDB, { useNewUrlParser: true }, function(error, db) {
	if (error) throw error;
} );
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const meanRestExpress = require('mean-rest-express');
//for auth client
const authConfig = require('mdds-express-auth-app');
//for auth server
const authServer = require('mdds-mongoose-express-auth-server');
const authRouter = authServer.GetDefaultAuthnRouter();
const usersRouter = authServer.GetDefaultUserRouter(authConfig);
//for lka models
const lkaDbDefinition = require('./models/index');
const lkaRouter = meanRestExpress.RestRouter(lkaDbDefinition, authConfig, "Academics");
//Authorization. Call it after all meanRestExpress resources are generated.
const authzRouter = authServer.GetDefaultAuthzRouter(authConfig);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//app.use('/', indexRouter);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/manage', lkaRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/roles', authzRouter);

//for file upload
var multer = require('multer');
var upload = multer({ dest: '/tmp/'});
var fs = require('fs');

//File input field name is simply 'file'
app.post('/api/images', upload.single('file'), function(req, res) {
    var file = __dirname + '/' + req.file.filename;
    fs.rename(req.file.path, file, function(err) {
     if (err) {
       console.log(err);
       res.send(500);
     } else {
       res.json({
         message: 'File uploaded successfully',
         filename: req.file.filename
       });
     }
    });
});

app.get(/.*/, function(req, res, next) {
  if (req.accepts('html')) {
	  return res.sendFile(path.join(__dirname, './public/index.html'));
  } else {
    return next();
  }
});

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

module.exports = app;
