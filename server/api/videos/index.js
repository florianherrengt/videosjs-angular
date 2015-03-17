var express = require('express');
var controller = require('./controller');
var router = express.Router();

router.get('/', controller.list);
router.get('/one/:id', controller.one);

module.exports = router;
