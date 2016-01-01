import React, { Component, PropTypes } from 'react';

export default class Tag extends Component {

    render() {
        return (
            <li
                onClick={this.props.onClick}
                style={{
                    color: this.props.selected ? 'red' : 'black'
                }}
            >
                {this.props.title}
            </li>
        );
    }

}

Tag.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired
};