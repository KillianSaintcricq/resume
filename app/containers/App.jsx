import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Tags from '../components/Tags.jsx';
import { selectAll, deselectAll, selectTag } from '../actions/tags';
import * as TagActions from '../actions/tags';
import Skills from '../components/Skills.jsx';
import { voteForSkill } from '../actions/skills';
import * as SkillActions from '../actions/skills';

class App extends Component {

    render() {
        const {tags, tagActions, skills, skillActions} = this.props;
        return (
            <div>
                App
                <hr />
                <Tags tags={tags} {...tagActions} />
                <Skills skills={skills} {...skillActions} />
            </div>
        );
    }

}

App.propTypes = {
    tags: PropTypes.array.isRequired,
    tagActions: PropTypes.object.isRequired,
    skills: PropTypes.array.isRequired,
    skillActions: PropTypes.object.isRequired,
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
 * Select
 * @param state
 * @returns {{tags: (*|Array), skills: *}}
 */
function mapStateToProps(state) {
    return {
        tags: state.tags,
        skills: getSkills(state.skills, state.tags)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        tagActions: bindActionCreators(TagActions, dispatch),
        skillActions: bindActionCreators(SkillActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);