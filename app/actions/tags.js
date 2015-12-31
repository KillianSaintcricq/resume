import * as types from '../constants/ActionTypes';

/**
 * Creates an action that lets the application know the user has selected a tag.
 * @param id
 * @returns {{type: SELECT_TAG, id: *}}
 */
export function selectTag(id) {
    return {
        type: types.SELECT_TAG,
        id
    };
}

/**
 * Creates an action that lets the application know the user has selected all tags.
 * @returns {{type: SELECT_ALL_TAGS}}
 */
export function selectAll() {
    return {
        type: types.SELECT_ALL_TAGS
    };
}

/**
 * Creates an action that lets the application know the user has deselected all tags.
 * @returns {{type: DESELECT_ALL_TAGS}}
 */
export function deselectAll() {
    return {
        type: types.DESELECT_ALL_TAGS
    };
}

/**
 * Creates an action that lets the application know skills have been requested.
 * @returns {{type: FETCH_TAGS_REQUEST}}
 */
function fetchTagsRequest() {
    return {
        type: types.FETCH_TAGS_REQUEST
    }
}

/**
 * Creates an action that lets the application know skills have been received.
 * @param json
 * @returns {{type: FETCH_TAGS_SUCCESS, skills: *}}
 */
function fetchTagsSuccess(json) {
    return {
        type: types.FETCH_TAGS_SUCCESS,
        tags: json
    }
}

/**
 * Creates an action that lets the application know skills have not been received.
 * @returns {{type: FETCH_TAGS_FAILURE}}
 */
function fetchTagsFailure() {
    return {
        type: types.FETCH_TAGS_FAILURE
    }
}

/**
 * Creates an action that fetches skills from the server.
 * @returns {Function}
 */
export function fetchTags() {
    return dispatch => {
        dispatch(fetchTagsRequest());
        return fetch('http://localhost:3001/api/tags/')
            .then(response => response.json())
            .then(json => dispatch(fetchTagsSuccess(json)))
            .catch(error => dispatch(fetchTagsFailure(error)));
    }
}