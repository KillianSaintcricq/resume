const Experience = require('../models/Experience');

exports.getAll = (req, res) => {
    Experience.find((err, experiences) => {
        if (err) res.send(err);
        res.json(
            experiences.map(experience => {
                return {
                    id: experience._id,
                    title: experience.title,
                    company: experience.company,
                    start: experience.start,
                    end: experience.end,
                    place: experience.place,
                    team: experience.team,
                    actions: experience.actions
                };
            })
        );
    });
};