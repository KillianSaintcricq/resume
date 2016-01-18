import { combineReducers } from 'redux';
import tags from './tags';
import skills from './skills';
import { routeReducer } from 'redux-simple-router';

const rootReducer = combineReducers({
    routing: routeReducer,
    tags,
    skills
});

export default rootReducer;