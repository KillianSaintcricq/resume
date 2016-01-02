import React, { Component, PropTypes } from 'react';
import Tag from './../Tag/Tag.jsx';

import './tags.scss';

export default class Tags extends Component {

    render() {
        const { tags, label, onEverythingClick, onNothingClick, onTagClick } = this.props;
        return (
            <section className="tags">
                <h2 className="label">{label}</h2>
                <ul className="values">
                    {tags.map(tag =>
                        <Tag {...tag} key={tag.id} onClick={() => onTagClick(tag.id)} />
                    )}
                </ul>
                <ul className="selectors">
                    <Tag title="Everything" selected={false} onClick={() => onEverythingClick()} />
                    <Tag title="Nothing" selected={false} onClick={() => onNothingClick()} />
                </ul>
            </section>
        );
    }

}

Tags.propTypes = {
    onEverythingClick: PropTypes.func.isRequired,
    onNothingClick: PropTypes.func.isRequired,
    onTagClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        selected: PropTypes.bool.isRequired
    }).isRequired).isRequired
};