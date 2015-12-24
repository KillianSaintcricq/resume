import React from 'react';
import { Link, IndexLink } from 'react-router';
import classNames from 'classnames';
import LinkedStateMixin from 'react-addons-linked-state-mixin';

import './menu.scss';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        let page;
        switch (this.props.path) {
            case '/':
                page = 'Home';
                break;
            case '/about':
                page = 'About';
                break;
            default:
                page = 'Unknown page';
                break;
        }
        this.state = {
            page: page
        };
    }

    componentDidMount() {
        $(".button-collapse").sideNav();
    }

    render() {
        return (
            <header className="menu">

                {/* TOP NAV */}

                <nav className="top-nav valign-wrapper">
                    <a href="#" data-activates="slide-out" className="button-collapse">
                        <i className="mdi-navigation-menu"></i>
                    </a>
                    <h1 className="container valign">{this.state.page}</h1>
                </nav>

                {/* SIDE NAV */}

                <ul id="slide-out" className="side-nav fixed">
                    <li className="brand-logo">Killian Saint cricq</li>
                    <li>
                        <IndexLink
                            to="/"
                            className="waves-effect waves-red"
                            activeClassName="active"
                            onClick={() => this.setState({page: 'Home'})}
                        >
                            Home
                        </IndexLink>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="waves-effect waves-red"
                            activeClassName="active"
                            onClick={() => this.setState({page: 'About'})}
                        >
                            About
                        </Link>
                    </li>
                </ul>

            </header>
        );
    }
}

export default Menu;