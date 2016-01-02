import React, { Component, PropTypes } from 'react';
import Skill from './../Skill/Skill.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './skills.scss';

export default class Skills extends Component {

    render() {
        const { skills, label, onSkillVoteButtonClick } = this.props;
        return (
            <section className="skills">
                <h2 className="label">{label}</h2>
                <ReactCSSTransitionGroup
                    className="values"
                    transitionName="skills-items"
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1000}
                    transitionAppear={true}
                >
                    {skills.map(
                        skill =>
                            <Skill
                                {...skill}
                                key={skill.id}
                                onVoteClick={() => onSkillVoteButtonClick(skill.id)}
                            />
                    )}
                </ReactCSSTransitionGroup>
            </section>
        );
    }

}

Skills.propTypes = {
    onSkillVoteButtonClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired
};