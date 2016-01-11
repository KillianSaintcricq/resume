import React, { Component } from 'react';

import './experience.scss';

export default class Experience extends Component {

    render() {
        return (
            <section className="page-section experience">
                <div className="arrow">
                    <i className="material-icons icon">keyboard_arrow_left</i>
                </div>
                <div className="container">
                    <h2>Experience</h2>
                </div>
                <div className="arrow">
                    <i className="material-icons icon">keyboard_arrow_right</i>
                </div>
            </section>
        );
    }

}
