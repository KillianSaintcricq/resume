import React, { Component } from 'react';
import SelectableSkills from './../SelectableSkills/SelectableSkills.jsx';
import Nav from '../../components/Nav/Nav.jsx';
import Presentation from '../../components/Presentation/Presentation.jsx';

import './header.scss';

export default class Header extends Component {

    render() {
        return (
            <header className="header">
                <div className="container">
                    <Nav
                        items={[
                            {label: "About", link: "/", index: true},
                            {label: "Showcase", link: "/showcase", index: false}
                        ]}
                    />
                </div>
            </header>
        );
    }

}
