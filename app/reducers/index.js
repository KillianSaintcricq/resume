import { combineReducers } from 'redux';
import tags from './tags';
import skills from './skills';

const rootReducer = combineReducers({
    tags,
    skills
});

export default rootReducer;