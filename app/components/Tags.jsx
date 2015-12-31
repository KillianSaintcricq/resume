import React, {Component, PropTypes} from 'react';
import Tag from './Tag.jsx';

export default class Tags extends Component {

    render() {
        const { tags, selectTag, selectAll, deselectAll } = this.props;
        return (
            <section>
                What are you interested in?
                <ul>
                    <li onClick={() => selectAll()}>Everything</li>
                    <li onClick={() => deselectAll()}>Nothing</li>
                    {tags.map(
                        (tag) =>
                            <Tag
                                {...tag}
                                key={tag.id}
                                onClick={() => selectTag(tag.id)}
                            />
                    )}
                </ul>
            </section>
        );
    }

}

Tags.propTypes = {
    selectAll: PropTypes.func.isRequired,
    deselectAll: PropTypes.func.isRequired,
    selectTag: PropTypes.func.isRequired,
    tags: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        selected: PropTypes.bool.isRequired
    }).isRequired).isRequired
};