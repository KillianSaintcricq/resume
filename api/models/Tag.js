var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TagSchema = new Schema({
    title: String
});

module.exports = mongoose.model('Tag', TagSchema);