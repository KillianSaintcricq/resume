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
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SKILLS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                values: action.skills.sort((skillA, skillB) => skillB.votes - skillA.votes)
            };
        case FETCH_SKILLS_FAILURE:
            return {
                ...state,
                isFetching: false,
                values: []
            };
        case VOTE_FOR_SKILL:
            return {
                ...state,
                values: state.values.map(skill => {
                    return {
                        ...skill,
                        votes: skill.id === action.id ? skill.votes + 1 : skill.votes
                    };
                })
            };
        default:
            return state;
    }
}
