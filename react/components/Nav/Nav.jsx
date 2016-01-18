import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';

import './nav.scss';

export default class Nav extends Component {

    render() {
        const { name, index, items } = this.props;
        return (
            <section className="nav">
                <h1 className="site-name"><IndexLink to={index} className="index">{name}</IndexLink></h1>
                <nav className="nav-wrapper hide-on-s-and-lower">
                    <ul className="nav-items without-bullets">
                        {items.map((item, index) =>
                            <li className="nav-item" key={index}>
                                <Link to={item.link} className="link" activeClassName="active">
                                    {item.label}
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </section>
        );
    }

}

Nav.propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
    })).isRequired
};