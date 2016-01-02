import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Tags from '../../components/Tags/Tags.jsx';
import { selectAll, deselectAll, selectTag, fetchTags } from '../../actions/tags';
import Skills from '../../components/Skills/Skills.jsx';
import { voteForSkill, fetchSkills } from '../../actions/skills';
import { visibleSkillsSelector } from '../../selectors/skills.js';

import './selectableSkills.scss'

class SelectableSkills extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchTags());
        dispatch(fetchSkills());
    }

    render() {
        const { dispatch, tags, skills } = this.props;
        return (
            <section className="selectable-skills">
                <div className="container">
                    <Tags
                        tags={tags.values}
                        onTagClick={(id) => dispatch(selectTag(id))}
                        onEverythingClick={() => dispatch(selectAll())}
                        onNothingClick={() => dispatch(deselectAll())}
                    />
                    <Skills
                        skills={skills.values}
                        onSkillVoteButtonClick={(id) => dispatch(voteForSkill(id))}
                    />
                </div>
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