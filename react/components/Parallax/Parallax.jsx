import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import './parallax.scss';

export default class Parallax extends Component {

    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            backgroundPositionY: '100%'
        }
    }

    handleScroll(e) {
        const html = document.documentElement;
        const backgroundPositionY = 100 - document.body.scrollTop / (html.scrollHeight - html.clientHeight) * 100;
        this.setState({
            backgroundPositionY: `${backgroundPositionY}%`
        });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    render() {
        const { imageUrl, classes, children } = this.props;
        const parallaxClasses = classNames('parallax', classes);
        const style = {
            backgroundImage: `url('${imageUrl}')`,
            backgroundPositionY: this.state.backgroundPositionY
        };
        return (
            <div className="parallax" style={style} className={parallaxClasses}>
                {children}
            </div>
        );
    }

}

Parallax.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    classes: PropTypes.string
};