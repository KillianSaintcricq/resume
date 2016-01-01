import React, { Component, PropTypes } from 'react';
import Skill from './Skill.jsx';

export default class Skills extends Component {

    render() {
        const { skills, onSkillVoteButtonClick } = this.props;
        return (
            <section>
                Skills
                <ul>
                    {skills.map((skill) =>
                        <Skill
                            {...skill}
                            key={skill.id}
                            onVoteClick={() => onSkillVoteButtonClick(skill.id)}
                        />
                    )}
                </ul>
            </section>
        );
    }

}

Skills.propTypes = {
    onSkillVoteButtonClick: PropTypes.func.isRequired,
    skills: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        votes: PropTypes.number.isRequired
    }).isRequired).isRequired
};