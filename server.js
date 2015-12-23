var express = require('express');
var path = require('path');
var handlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var knex = require('./config/db');
var port = process.env.PORT || 5000;
var app = express();

app.use(bodyParser.json()); // support json 
app.use(bodyParser.urlencoded({
  extended: true
}));

// navigation 
var nav = [{
  link: '/about',
  text: 'About'
}, {
  link: '/help',
  text: 'Help'
}];

// routes
var staticPagesRouter = require(__dirname + '/app/routes/staticPagesRouter')(nav, knex);
var mealsRouter = require(__dirname + '/app/routes/mealsRouter')(nav, knex);
var daysRouter = require(__dirname + '/app/routes/daysRouter')(nav, knex);

app.use(express.static('public'));
app.set('views', __dirname + '/app/views');

app.engine('.hbs', handlebars({
  defaultLayout: 'main',
  layoutsDir: 'app/views/layouts',
  extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.use('/', staticPagesRouter);
app.use('/meals', mealsRouter);
app.use('/days', daysRouter);

app.listen(port, function() {
  console.log('node running on ' + port);
});
