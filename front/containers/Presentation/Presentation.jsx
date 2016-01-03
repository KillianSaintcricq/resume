import React, { Component } from 'react';
import SelectableSkills from './../SelectableSkills/SelectableSkills.jsx';
import Presentation from './../Presentation/Presentation.jsx';

import './presentation.scss';

export default class App extends Component {

    render() {
        return (
            <header className="page-section presentation">
                <div className="container">
                    <h1 className="site-name">Killian Saint cricq</h1>
                    <nav className="nav-wrapper">
                        <ul className="nav-items without-bullets">
                            <li className="nav-item">Skills</li>
                            <li className="nav-item">Experience</li>
                            <li className="nav-item">About</li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }

}
