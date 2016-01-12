const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
    company: String,
    start: String,
    end: String,
    place: String,
    team: String,
    title: String,
    actions: [String]
});

module.exports = mongoose.model('Experience', ExperienceSchema);