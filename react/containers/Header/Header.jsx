import React, { Component } from 'react';
import SelectableSkills from './../SelectableSkills/SelectableSkills.jsx';
import Nav from '../../components/Nav/Nav.jsx';
import Presentation from '../../components/Presentation/Presentation.jsx';

import './header.scss';

export default class Header extends Component {

    render() {
        return (
            <header className="page-section header">
                <div className="container">
                    <Nav
                        name="Killian Saint cricq"
                        items={[
                            {label: "Skills", link: "#skills"},
                            {label: "Experience", link: "#experience"},
                            {label: "Education", link: "#education"},
                            {label: "About", link: "#about"}
                        ]}
                    />
                    <Presentation>
                        Hello!! Welcome on my website :-)
                    </Presentation>
                </div>
            </header>
        );
    }

}
