var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { id: '405631697', name: '林潓蓉' });
});

module.exports = router;