import React, {Component, PropTypes} from 'react';
import Skill from './Skill.jsx';

export default class Skills extends Component {

    render() {
        const { skills, voteForSkill } = this.props;
        return (
            <section>
                Skills
                <ul>
                    {skills.map((skill) =>
                        <Skill
                            {...skill}
                            key={skill.id}
                            onVoteClick={() => voteForSkill(skill.id)}
                        />
                    )}
                </ul>
            </section>
        );
    }

}

Skills.propTypes = {
    voteForSkill: PropTypes.func.isRequired,
    skills: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        votes: PropTypes.number.isRequired
    }).isRequired).isRequired
};