import React from 'react';
import { Link, IndexLink } from 'react-router';

import './menu.scss';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.active = {
            color: 'red'
        }
    }

    render() {
        return (
            <nav>
                <ul id="nav-mobile">
                    <li><IndexLink to="/" activeStyle={this.active}>Home</IndexLink></li>
                    <li><Link to="/about" activeStyle={this.active}>About</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Menu