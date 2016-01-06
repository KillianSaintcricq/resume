var Tag = require('../models/Tag');

exports.getAll = function (req, res) {
    Tag.find(function (err, tags) {
        if (err) res.send(err);
        res.json(
            tags.map(function(tag) {
               return {
                   id: tag._id,
                   title: tag.title
               };
            })
        );
    });
};