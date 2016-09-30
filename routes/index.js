var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'First MVC structure lab' });
});
router.get('/vipul', function(req, res, next) {
  res.render('vipul', { title: 'Vipul' });
});
router.get('/jayesh', function(req, res, next) {
  res.render('jayesh', { title: 'jayesh' });
});
router.get('/bharatbhai', function(req, res, next) {
  res.render('bharatbhai', { title: 'bharatbhai' });
});
router.get('/hansaben', function(req, res, next) {
  res.render('hansaben', { title: 'hansaben' });
});

module.exports = router;
