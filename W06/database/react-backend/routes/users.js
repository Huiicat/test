var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json([{
        id: 1,
        username: "賴奕書"
    }, {
        id: 2,
        username: "鍾雄任"
    }, {
        username: "林思妤"
    }, {
        username: "林潓蓉"
    }]);
});

module.exports = router;