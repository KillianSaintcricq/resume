import React, {Component, PropTypes} from 'react';
import Tag from './Tag.jsx';

export default class Tags extends Component {

    render() {
        const { tags, onEverythingClick, onNothingClick, onTagClick } = this.props;
        return (
            <section>
                What are you interested in?
                <ul>
                    <li onClick={() => onEverythingClick()}>Everything</li>
                    <li onClick={() => onNothingClick()}>Nothing</li>
                    {tags.map(
                        (tag) =>
                            <Tag
                                {...tag}
                                key={tag.id}
                                onClick={() => onTagClick(tag.id)}
                            />
                    )}
                </ul>
            </section>
        );
    }

}

Tags.propTypes = {
    onEverythingClick: PropTypes.func.isRequired,
    onNothingClick: PropTypes.func.isRequired,
    onTagClick: PropTypes.func.isRequired,
    tags: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        selected: PropTypes.bool.isRequired
    }).isRequired).isRequired
};