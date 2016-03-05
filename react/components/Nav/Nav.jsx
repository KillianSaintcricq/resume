import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import Typist from 'react-typist';

import './nav.scss';

export default class Nav extends Component {

    render() {
        const { items } = this.props;
        return (
            <section className="nav">
                <h1 className="site-name">
                    <Typist avgTypingDelay={150}>
                        killian.s<span className="light">aint</span>c<span className="light">ricq</span>
                    </Typist>
                </h1>
                <nav className="nav-wrapper">
                    <ul className="nav-items without-bullets">
                        {items.map((item, index) =>
                            <li className="nav-item" key={index}>
                                <IndexLink to={item.link} className="link" activeClassName="active">
                                    {item.label}
                                </IndexLink>
                            </li>
                        )}
                    </ul>
                </nav>
            </section>
        );
    }

}

Nav.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
    })).isRequired
};