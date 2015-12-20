var express = require('express');
var path = require('path');
var handlebars = require('express-handlebars');

var app = express();
var port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/app/views');

app.engine('.hbs', handlebars({
  defaultLayout: 'main',
  layoutsDir: 'app/views/layouts',
  extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(port, function() {
  console.log('node running on ' + port);
});
