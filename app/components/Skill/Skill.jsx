import React, { Component, PropTypes } from 'react';
import ReactTooltip from 'react-tooltip';

import './skill.scss';

export default class Skill extends Component {

    render() {
        const { id, title, votes, tags, onVoteClick } = this.props;
        const idS = id.toString();
        return (
            <span className="skill">
                <button className="vote hide-on-s-and-lower" onClick={onVoteClick} data-tip data-for={idS}>
                    <i className="material-icons icon">thumb_up</i>
                </button>
                <ReactTooltip id={idS} effect="solid">
                    <span>{votes}</span>
                </ReactTooltip>
                <div className="content-container">
                    <h3 className="title">{title}</h3>
                    <div className="skill-tags-container">
                        {tags.map((tag, index) =>
                            <span className="skill-tags" key={index}>
                                {tag}{' '}
                            </span>
                        )}
                    </div>
                </div>
            </span>
        );
    }

}

Skill.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};