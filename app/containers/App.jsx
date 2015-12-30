import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import Tags from '../components/Tags.jsx';
import { selectAll, selectNone, selectTag } from '../actions/tags';

class App extends Component {

    render() {
        const {dispatch, tags} = this.props;
        return (
            <div>
                App
                <Tags
                    tags={tags}
                    onEverythingClick={() => dispatch(selectAll())}
                    onNothingClick={() => dispatch(selectNone())}
                    onTagClick={(index) => dispatch(selectTag(index))}
                />
            </div>
        );
    }

}

App.propTypes = {
    tags: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        tags: state.tags
    }
}

export default connect(mapStateToProps)(App);