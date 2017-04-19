var express = require('express');
var router = express.Router();

var db = require('../queries');

router.get('/api/pizzas',)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
