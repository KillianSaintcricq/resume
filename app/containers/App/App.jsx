import React, { Component } from 'react';
import SelectableSkills from './../SelectableSkills/SelectableSkills.jsx';
import Presentation from './../Presentation/Presentation.jsx';

import './app.scss';

export default class App extends Component {

    render() {
        return (
            <div>
                <Presentation />
                <SelectableSkills />
            </div>
        );
    }

}