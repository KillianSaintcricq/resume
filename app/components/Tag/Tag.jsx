import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import './tag.scss';

export default class Tag extends Component {

    render() {
        const { title, onClick } = this.props;
        const classes = classNames('tag', { active: this.props.selected });
        return (
            <li className={classes} onClick={onClick}>
                {title}
            </li>
        );
    }

}

Tag.propTypes = {
    title: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired
};