import React, {Component, PropTypes} from 'react';
import Tag from './Tag.jsx';

export default class Tags extends Component {

    render() {
        return (
            <div>
                What are you interested in?
                <ul>
                    <li onClick={() => this.props.onEverythingClick()}>Everything</li>
                    <li onClick={() => this.props.onNothingClick()}>Nothing</li>
                    {this.props.tags.map((tag) =>
                        <Tag
                            {...tag}
                            key={tag.id}
                            onClick={() => this.props.onTagClick(tag.id)}
                        />
                    )}
                </ul>
            </div>
        );
    }

}

Tags.propTypes = {
    onEverythingClick: PropTypes.func.isRequired,
    onNothingClick: PropTypes.func.isRequired,
    onTagClick: PropTypes.func.isRequired,
    tags: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        selected: PropTypes.bool.isRequired
    }).isRequired).isRequired
};