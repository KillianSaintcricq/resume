import React, { Component } from 'react';

import './presentation.scss';

export default class Presentation extends Component {
    render() {
        return (
            <section className="presentation">
                <p>{this.props.children}</p>
            </section>
        )
    }
}