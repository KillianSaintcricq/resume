var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SkillSchema = new Schema({
    title: String,
    votes: Number,
    tags: [String]
});

module.exports = mongoose.model('Skill', SkillSchema);