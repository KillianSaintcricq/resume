import React, {Component, PropTypes} from 'react';

export default class Tag extends Component {

    render() {
        return (
            <li
                onClick={this.props.onClick}
                style={{
                    color: this.props.selected ? 'red' : 'black'
                }}
            >
                {this.props.text}
            </li>
        );
    }

}

Tag.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired
};