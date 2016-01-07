const express = require('express');
const mongoose = require('mongoose');
const skills = require('./services/skills');
const tags = require('./services/tags');

const router = express.Router();
// TODO: dev vs prod
mongoose.connect('mongodb://localhost/resume');

router.get('/skills', skills.getAll);
router.get('/tags', tags.getAll);

module.exports = router;