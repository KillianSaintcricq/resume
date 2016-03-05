import React, { Component } from 'react';
import Presentation from '../../components/Presentation/Presentation.jsx';

import './about.scss';

export default class About extends Component {

    render() {
        return (
            <section className="page-section experience">
                <div className="container">
                    <Presentation>
                        About section...
                    </Presentation>
                </div>
                <section className="content">
                    <div className="container">
                        <h2>About</h2>
                    </div>
                </section>
            </section>
        );
    }

}
