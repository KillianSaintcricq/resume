import React, { Component } from 'react';
import SelectableSkills from './../SelectableSkills/SelectableSkills.jsx';
import Header from '../Header/Header.jsx';

import './app.scss';

export default class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <SelectableSkills />
            </div>
        );
    }

}