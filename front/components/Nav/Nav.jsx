import React, { Component, PropTypes } from 'react';

import './nav.scss';

export default class Nav extends Component {

    render() {
        const { name, items } = this.props;
        return (
            <section className="nav">
                <h1 className="site-name">{name}</h1>
                <nav className="nav-wrapper hide-on-s-and-lower">
                    <ul className="nav-items without-bullets">
                        {items.map((item, index) =>
                            <li className="nav-item" key={index}>
                                <a href={item.link} className="link">
                                    {item.label}
                                </a>
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
    items: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
    })).isRequired
};