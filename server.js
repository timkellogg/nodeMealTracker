var express = require('express');
var path = require('path');
var handlebars = require('express-handlebars');

var app = express();
var port = process.env.PORT || 5000;

// navigation 
var nav = [{
  link: '/about',
  text: 'About'
}, {
  link: '/help',
  text: 'Help'
}];

// routes
var staticPagesRouter = require(__dirname + '/app/routes/staticPagesRouter')(nav),
          mealsRouter = require(__dirname + '/app/routes/mealsRouter')(nav);

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


app.listen(port, function() {
  console.log('node running on ' + port);
});
