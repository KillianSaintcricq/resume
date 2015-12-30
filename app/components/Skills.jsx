import React, {Component, PropTypes} from 'react';
import Skill from './Skill.jsx';

export default class Skills extends Component {

    render() {
        return (
            <section>
                Skills
                <ul>
                    {this.props.skills.map((skill) =>
                        <Skill
                            {...skill}
                            key={skill.id}
                            onVoteClick={() => this.props.onSkillVoteClick(skill.id)}
                        />
                    )}
                </ul>
            </section>
        );
    }

}

Skills.propTypes = {
    onSkillVoteClick: PropTypes.func.isRequired,
    skills: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        votes: PropTypes.number.isRequired
    }).isRequired).isRequired
};