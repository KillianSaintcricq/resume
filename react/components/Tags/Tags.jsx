import React, { Component, PropTypes } from 'react';
import Tag from './../Tag/Tag.jsx';

import './tags.scss';

export default class Tags extends Component {

    render() {
        const { tags, label, onEverythingClick, onRandomClick, onNothingClick, onTagClick } = this.props;
        return (
            <section className="tags">
                <h2 className="label">{label}</h2>
                <ul className="values without-bullets">
                    <Tag selected={false} onClick={() => onEverythingClick()}>
                        <span className="strong">Everything</span>
                    </Tag>
                    <Tag selected={false} onClick={() => onRandomClick(tags.map(tag => tag.id))}>
                        <span className="strong">Random</span>
                    </Tag>
                    <Tag selected={false} onClick={() => onNothingClick()}>
                        <span className="strong">Nothing</span>
                    </Tag>
                    {tags.map(tag =>
                        <Tag selected={tag.selected} key={tag.id} onClick={() => onTagClick(tag.id)}>
                            {tag.title}
                        </Tag>
                    )}
                </ul>
            </section>
        );
    }

}

Tags.propTypes = {
    onEverythingClick: PropTypes.func.isRequired,
    onRandomClick: PropTypes.func.isRequired,
    onNothingClick: PropTypes.func.isRequired,
    onTagClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        selected: PropTypes.bool.isRequired
    }).isRequired).isRequired
};