var express = require('express');
var handlebars = require('express-handlebars');

var app = express();
var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('views', 'views');

app.engine('.hbs', handlebars({
  defaultLayout: 'main', 
  extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(port, function() {
  console.log('node running on ' + port);
});
