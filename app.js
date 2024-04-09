var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const MongoDBStore = require('connect-mongodb-session')(session);


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const store = new MongoDBStore({
  uri: 'mongodb+srv://anmol8120170003:brrDVrJb97fSJtUz@cluster0.neserka.mongodb.net/
',
  collection: 'sessions'
});

// Express session and Passport initialistion //
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: "animeflare-session-10101"
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(usersRouter.serializeUser());
passport.deserializeUser(usersRouter.deserializeUser());


// Parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/', indexRouter);
app.use('/user', usersRouter);
// app.use('/anime', animeRouter);
// app.use('/episode', episodeRouter);
// app.use('/season', seasonRouter);
// app.use('/banner', bannerRouter);
// app.use('/multer', multerRouter);
// app.use('/comment', commentRouter);
// app.use('/admin', adminRouter);

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
