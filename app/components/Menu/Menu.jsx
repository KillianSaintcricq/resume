import React from 'react';
import { Link, IndexLink } from 'react-router';
import classNames from 'classnames';

import './menu.scss';

class Menu extends React.Component {

    render() {
        const sideNavClass = classNames('side-nav', 'fixed');
        const itemClass = classNames('waves-effect', 'waves-red');
        const topNavClass = classNames('top-nav', 'valign-wrapper');
        const titleClass = classNames('valign', 'container');
        return (
            <header className="menu">
                <nav className={topNavClass}>
                    <ul className="hide-on-large-only">
                        <li className="brand-logo">Killian Saint cricq</li>
                        <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                        <li><Link to="/about" activeClassName="active">About</Link></li>
                    </ul>
                    <a href="#" data-activates="slide-out" className="button-collapse">
                        <i className="mdi-navigation-menu"></i>
                    </a>
                    <h1 className={titleClass}>Title</h1>
                </nav>
                <ul className={sideNavClass}>
                    <li className="brand-logo">Killian Saint cricq</li>
                    <li><IndexLink to="/" className={itemClass} activeClassName="active">Home</IndexLink></li>
                    <li><Link to="/about" className={itemClass} activeClassName="active">About</Link></li>
                </ul>
            </header>
        );
    }
}

export default Menu;