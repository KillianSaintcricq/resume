const express = require('express');
const mongoose = require('mongoose');
const skills = require('./services/skills');
const tags = require('./services/tags');

const router = express.Router();
mongoose.connect(process.env.MONGO_URI);

router.get('/skills', skills.getAll);
router.get('/tags', tags.getAll);

module.exports = router;