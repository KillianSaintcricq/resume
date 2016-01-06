import React, { Component } from 'react';

import './presentation.scss';

export default class Presentation extends Component {
    render() {
        return (
            <section className="presentation">
                {this.props.children}
            </section>
        )
    }
}