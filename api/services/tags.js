const Tag = require('../models/Tag');

exports.getAll = (req, res) => {
    Tag.find((err, tags) => {
        if (err) res.send(err);
        res.json(
            tags.map(tag => {
               return {
                   id: tag._id,
                   title: tag.title
               };
            })
        );
    });
};