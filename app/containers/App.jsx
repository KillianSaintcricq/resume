import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Tags from '../components/Tags.jsx';
import { selectAll, deselectAll, selectTag, fetchTags } from '../actions/tags';
import Skills from '../components/Skills.jsx';
import { voteForSkill, fetchSkills } from '../actions/skills';

class App extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchTags());
        dispatch(fetchSkills());
    }

    render() {
        const { dispatch, tags, skills } = this.props;
        return (
            <div>
                App <br />
                <hr />
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
        );
    }

}

App.propTypes = {
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
function getSkills(skills, tags) {
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

/**
 * Gets props regarding the current state.
 * @param state
 * @returns {{tags: (*|Array), skills: *}}
 */
function mapStateToProps(state) {
    return {
        tags: state.tags,
        skills: Object.assign({}, state.skills, {
            values: getSkills(state.skills.values, state.tags.values)
        })
    }
}

export default connect(mapStateToProps)(App);