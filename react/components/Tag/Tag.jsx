import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import './tag.scss';

export default class Tag extends Component {

    render() {
        const { selected, classes, onClick } = this.props;
        const tagClasses = classNames('tag', classes, { active: selected });
        return (
            <li className={tagClasses} onClick={onClick}>
                {this.props.children}
            </li>
        );
    }

}

Tag.propTypes = {
    selected: PropTypes.bool.isRequired,
    classes: PropTypes.string
};