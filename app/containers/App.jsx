import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import Tags from '../components/Tags.jsx';
import { selectAll, selectNone, selectTag } from '../actions/tags';
import Skills from '../components/Skills.jsx';
import { voteForSkill } from '../actions/skills';

class App extends Component {

    render() {
        const {dispatch, tags, skills} = this.props;
        return (
            <div>
                App
                <Tags
                    tags={tags}
                    onEverythingClick={() => dispatch(selectAll())}
                    onNothingClick={() => dispatch(selectNone())}
                    onTagClick={(id) => dispatch(selectTag(id))}
                />
                <Skills
                    skills={skills}
                    onSkillVoteClick={(id) => dispatch(voteForSkill(id))}
                />
            </div>
        );
    }

}

App.propTypes = {
    tags: PropTypes.array.isRequired,
    skills: PropTypes.array.isRequired
};

function select(state) {
    return {
        tags: state.tags,
        skills: state.skills
    }
}

export default connect(select)(App);