import React, { Component, PropTypes } from 'react';

import './skill.scss';

export default class Skill extends Component {

    render() {
        const { title, votes, tags, onVoteClick } = this.props;
        return (
            <span className="skill">
                <div className="skill-container">
                    <h3 className="title">{title}</h3>
                    <div className="skill-tags-container">
                        {tags.map(
                            (tag, index) =>
                                <span className="skill-tags" key={index}>
                                    {tag}{' '}
                                </span>
                        )}
                    </div>
                    <div className="skill-relevance-container">
                        <a href="#" className="vote" onClick={onVoteClick}>Like</a>{' '}({votes})
                    </div>
                </div>
            </span>
        );
    }

}

Skill.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};