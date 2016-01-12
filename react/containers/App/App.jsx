import React, { Component } from 'react';
import Header from '../Header/Header.jsx';
import SelectableSkills from './../SelectableSkills/SelectableSkills.jsx';
import Experience from './../Experience/Experience.jsx';

import './app.scss';

export default class App extends Component {

    render() {
        return (
            <div className="app">
                <Header />
                <SelectableSkills />
                <Experience />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        );
    }

}