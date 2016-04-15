import React, { Component, PropTypes } from 'react';
import Element from './../Element/Element.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './elements.scss';

export default class Elements extends Component {

    render() {
        const { elements, onElementVoteButtonClick } = this.props;
        return (
            <section className="elements">
                <ReactCSSTransitionGroup
                    component="section"
                    className="values"
                    transitionName="skills-items"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={400}
                    transitionAppearTimeout={500}
                    transitionAppear={true}
                >
                    {elements.map(
                        element =>
                            <Element
                                {...element}
                                key={element.id}
                                onVoteClick={() => onElementVoteButtonClick(element.id)}
                            />
                    )}
                </ReactCSSTransitionGroup>
            </section>
        );
    }

}

Elements.propTypes = {
    onElementVoteButtonClick: PropTypes.func.isRequired,
    elements: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        votes: PropTypes.number.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    }).isRequired).isRequired
};