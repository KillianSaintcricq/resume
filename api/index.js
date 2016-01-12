const express = require('express');
const mongoose = require('mongoose');
const skills = require('./services/skills');
const tags = require('./services/tags');
const experiences = require('./services/experiences');

const router = express.Router();
mongoose.connect(process.env.MONGO_URI);

router.get('/skills', skills.getAll);
router.get('/tags', tags.getAll);
router.get('/experiences', experiences.getAll);

module.exports = router;