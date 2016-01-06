import React, { Component, PropTypes } from 'react';
import Skill from './../Skill/Skill.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './skills.scss';

export default class Skills extends Component {

    render() {
        const { skills, onSkillVoteButtonClick } = this.props;
        return (
            <section className="skills">
                <ReactCSSTransitionGroup
                    component="section"
                    className="values"
                    transitionName="skills-items"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={400}
                    transitionAppearTimeout={500}
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
    skills: PropTypes.array.isRequired
};