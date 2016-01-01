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
            return {
                ...state,
                isFetching: true
            };
        case FETCH_TAGS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                values: action.tags.map(tag => {
                    return {
                        ...tag,
                        selected: false
                    };
                })
            };
        case FETCH_TAGS_FAILURE:
            return {
                ...state,
                isFetching: false,
                values: []
            };
        case SELECT_ALL_TAGS:
            return {
                ...state,
                values: state.values.map(tag => {
                    return {
                        ...tag,
                        selected: true
                    };
                })
            };
        case DESELECT_ALL_TAGS:
            return {
                ...state,
                values: state.values.map(tag => {
                    return {
                        ...tag,
                        selected: false
                    };
                })
            };
        case SELECT_TAG:
            return {
                ...state,
                values: state.values.map(tag => {
                    return {
                        ...tag,
                        // If it is currently the tag to select, we have to toggle its selected attribuet
                        selected: tag.id === action.id ? !tag.selected : tag.selected
                    };
                })
            };
        default:
            return state;
    }
}
