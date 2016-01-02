import React, { Component, PropTypes } from 'react';

import './skill.scss';

export default class Skill extends Component {

    render() {
        return (
            <li>
                <div>{this.props.title} <span>({this.props.votes})</span></div>
                <p>{this.props.text}</p>
                <button onClick={this.props.onVoteClick}>Vote!</button>
            </li>
        );
    }

}

Skill.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired
};