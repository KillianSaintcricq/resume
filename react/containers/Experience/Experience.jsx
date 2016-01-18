import React, { Component } from 'react';
import Presentation from '../../components/Presentation/Presentation.jsx';
import Experiences from '../../components/Experiences/Experiences.jsx';

import './experience.scss';

export default class Experience extends Component {

    render() {
        return (
            <section className="page-section experience">
                <div className="container">
                    <Presentation>
                        Experience section...
                    </Presentation>
                </div>
                <section className="content">
                    <div className="container">
                        <h2>Experience</h2>
                    </div>
                    <Experiences />
                </section>
            </section>
        );
    }

}
