import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Tags from '../components/Tags.jsx';
import { selectAll, deselectAll, selectTag, fetchTags } from '../actions/tags';
import Skills from '../components/Skills.jsx';
import { voteForSkill, fetchSkills } from '../actions/skills';
import { createSelector } from 'reselect';

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
            <section>
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

/**
 * Gets the skills having at least one of their tags selected in the list of tags.
 * @param skills
 * @param tags
 * @returns {*}
 */
function selectSkills(skills, tags) {
    // Gets the tags title currently selected
    const selectedTags = tags.filter(tag => tag.selected).map(tag => tag.title);
    // Gets the skills associated with those tags
    return skills.filter(skill => {
        for (let tag of skill.tags) {
            if (selectedTags.indexOf(tag) !== -1) return true;
        }
        return false;
    });
}

const tagsSelector = state => state.tags;
const skillsSelector = state => state.skills;
const visibleSkillsSelector = createSelector(
    [tagsSelector, skillsSelector],
    (tags, skills) => {
        return {
            skills: {
                ...skills,
                values: selectSkills(skills.values, tags.values)
            },
            tags
        }
    }
);

export default connect(visibleSkillsSelector)(SelectableSkills);