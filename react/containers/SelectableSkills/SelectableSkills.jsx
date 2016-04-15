import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Presentation from '../../components/Presentation/Presentation.jsx';
import Tags from '../../components/Tags/Tags.jsx';
import { selectAll, selectTags, deselectAll, selectTag, fetchTags } from '../../actions/tags';
import Elements from '../../components/Elements/Elements.jsx';
import { voteForSkill, fetchSkills } from '../../actions/skills';
import { visibleSkillsSelector } from '../../selectors/skills.js';
import { randomValues } from '../../utils/random';

import './selectableSkills.scss'

class SelectableSkills extends Component {

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(fetchTags());
        dispatch(fetchSkills());
    }

    componentWillReceiveProps(nextProps) {
        const { dispatch } = this.props;
        // If we just received the tags, we have to select randomly some of them
        if (this.props.tags.isFetching && !nextProps.tags.values.isFetching) {
            dispatch(selectTags(randomValues(nextProps.tags.values.map(tag => tag.id))));
        }
    }

    onRandomClick() {
        const { tags, selectTags } = this.props;
        const tagsToSelect = Math.floor((Math.random() * tags) + 1);
    }

    render() {
        const { dispatch, tags, skills } = this.props;
        return (
            <section className="page-section selectable-skills">
                <div className="container">
                    <Presentation>
                        Skills section...
                    </Presentation>
                </div>
                <hr />
                <section className="content">
                    <div className="container">
                        <section className="tags-container">
                            <Tags
                                label="What skills are you seeking?"
                                tags={tags.values}
                                onTagClick={(id) => dispatch(selectTag(id))}
                                onEverythingClick={() => dispatch(selectAll())}
                                onRandomClick={(ids) => dispatch(selectTags(randomValues(ids)))}
                                onNothingClick={() => dispatch(deselectAll())}
                            />
                        </section>
                        <section className="skills-container">
                            <Elements
                                label="Here is what I know about it!"
                                elements={skills.values}
                                onElementVoteButtonClick={(id) => dispatch(voteForSkill(id))}
                            />
                        </section>
                    </div>
                </section>
            </section>
        );
    }

}

SelectableSkills.propTypes = {
    tags: PropTypes.shape({
        isFetching: PropTypes.bool.isRequired,
        values: PropTypes.array.isRequired
    }).isRequired,
    skills: PropTypes.shape({
        isFetching: PropTypes.bool.isRequired,
        values: PropTypes.array.isRequired
    }).isRequired
};

export default connect(visibleSkillsSelector)(SelectableSkills);