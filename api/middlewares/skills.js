var Skill = require('../models/Skill');

exports.getAll = function (req, res) {
    Skill.find(function (err, skills) {
        if (err) res.send(err);
        res.json(
            skills.map(function (skill) {
                return {
                    id: skill._id,
                    title: skill.title,
                    votes: skill.votes,
                    tags: skill.tags
                };
            })
        );
    });
};