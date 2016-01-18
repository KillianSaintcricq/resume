import React, { Component } from 'react';
import Experiences from '../../components/Experiences/Experiences.jsx';

import './experience.scss';

export default class Experience extends Component {

    render() {
        return (
            <section className="page-section experience" id="experience">
                <div className="container">
                    <h2>Experience</h2>
                </div>
                <Experiences />
            </section>
        );
    }

}
