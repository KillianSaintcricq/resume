const Skill = require('../models/Skill');

exports.getAll = (req, res) => {
    Skill.find((err, skills) => {
        if (err) res.send(err);
        res.json(
            skills.map(skill => {
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