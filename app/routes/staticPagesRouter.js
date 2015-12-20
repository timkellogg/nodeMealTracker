var express = require('express');
var staticPagesRouter = express.Router();

var router = function(nav) {

  staticPagesRouter.route('/')
    .get(function(req, res) {
      res.render('index');
    });

  staticPagesRouter.route('/about')
    .get(function(req, res){
      res.render('about');
    });

  staticPagesRouter.route('/help')
    .get(function(req, res) {
      res.render('help');
    });

  return staticPagesRouter;
};

module.exports = router;