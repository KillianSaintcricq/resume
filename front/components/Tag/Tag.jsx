import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import './tag.scss';

export default class Tag extends Component {

    render() {
        const { title, onClick } = this.props;
        const classes = classNames('tag', { active: this.props.selected });
        return (
            <li className={classes} onClick={onClick}>
                {this.props.children}
            </li>
        );
    }

}

Tag.propTypes = {
    selected: PropTypes.bool.isRequired
};