import {
    FETCH_TAGS_REQUEST,
    FETCH_TAGS_SUCCESS,
    FETCH_TAGS_FAILURE,
    SELECT_ALL_TAGS, 
    DESELECT_ALL_TAGS, 
    SELECT_TAG
} from '../constants/ActionTypes';

const initialState = {
    isFetching: false,
    values: []
};

export default function tags(state = initialState, action) {
    switch (action.type) {
        case FETCH_TAGS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case FETCH_TAGS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                values: action.tags.map(tag => Object.assign({}, tag, {
                    selected: false
                }))
            });
        case FETCH_TAGS_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                values: []
            });
        case SELECT_ALL_TAGS:
            return Object.assign({}, state, {
                values: state.values.map((tag) => {
                    tag.selected = true;
                    return tag;
                })
            });
        case DESELECT_ALL_TAGS:
            return Object.assign({}, state, {
                values: state.values.map((tag) => {
                    tag.selected = false;
                    return tag;
                })
            });
        case SELECT_TAG:
            return Object.assign({}, state, {
                values: state.values.map((tag) => {
                    if (tag.id === action.id) return Object.assign({}, tag, {selected: !tag.selected});
                    return tag;
                })
            });
        default:
            return state;
    }
}
