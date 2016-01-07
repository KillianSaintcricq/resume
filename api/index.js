const express = require('express');
const mongoose = require('mongoose');
const skills = require('./services/skills');
const tags = require('./services/tags');

const router = express.Router();

const options =
    process.env.MONGO_USER && process.env.MONGO_PASSWORD ?
    {user: process.env.MONGO_USER, pass: process.env.MONGO_PASSWORD} :
    {};
mongoose.connect(`mongodb://${process.env.MONGO_URL}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`, options);

router.get('/skills', skills.getAll);
router.get('/tags', tags.getAll);

module.exports = router;