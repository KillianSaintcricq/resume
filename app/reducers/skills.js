import {
    FETCH_SKILLS_REQUEST,
    FETCH_SKILLS_SUCCESS,
    FETCH_SKILLS_FAILURE,
    VOTE_FOR_SKILL,
} from '../constants/ActionTypes';

const initialState = {
    isFetching: false,
    values: []
};

export default function skills(state = initialState, action) {
    switch (action.type) {
        case FETCH_SKILLS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case FETCH_SKILLS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                values: action.skills
            });
        case FETCH_SKILLS_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                values: []
            });
        case VOTE_FOR_SKILL:
            return Object.assign({}, state, {
                values: state.values.map((skill) => {
                    if (skill.id === action.id) skill.votes++;
                    return skill;
                })
            });
        default:
            return state;
    }
}
