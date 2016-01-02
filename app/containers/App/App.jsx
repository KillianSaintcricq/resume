import React, { Component } from 'react';
import SelectableSkills from './../SelectableSkills/SelectableSkills.jsx';

import './app.scss';

export default class App extends Component {

    render() {
        return (
            <div>
                {/* This section is temporary */}
                <section className="container">
                    App
                    <br/>
                    by Killian Saint cricq
                    <hr/>
                </section>
                <SelectableSkills />
            </div>
        );
    }

}