var express = require('express');
var mongoose = require('mongoose');
var skills = require('./middlewares/skills');
var tags = require('./middlewares/tags');

var router = express.Router();
// TODO: dev vs prod
mongoose.connect('mongodb://localhost/resume');

router.get('/skills', skills.getAll);
router.get('/tags', tags.getAll);

module.exports = router;
