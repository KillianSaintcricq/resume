const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
    title: String,
    votes: Number,
    tags: [String]
});

module.exports = mongoose.model('Skill', SkillSchema);