import React, { Component } from 'react';
import SelectableSkills from './../SelectableSkills/SelectableSkills.jsx';
import Presentation from './../Presentation/Presentation.jsx';

import './presentation.scss';

export default class App extends Component {

    render() {
        return (
            <section className="page-section presentation">
                <div className="container">
                    <h1>Killian Saint cricq</h1>
                    <p>Hey! This is my website :-)</p>
                </div>
            </section>
        );
    }

}
