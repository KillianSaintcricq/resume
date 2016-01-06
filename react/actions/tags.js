import fetch from 'isomorphic-fetch';
import * as types from '../constants/ActionTypes';

/**
 * Creates an action that lets the application know a tag has been selected.
 * @param id
 * @returns {{type: SELECT_TAG, id: number}}
 */
export function selectTag(id) {
    return {
        type: types.SELECT_TAG,
        id
    };
}

/**
 * Creates an action that lets the application know all tags have been selected.
 * @returns {{type: SELECT_ALL_TAGS}}
 */
export function selectAll() {
    return {
        type: types.SELECT_ALL_TAGS
    };
}

/**
 * Creates an action that lets the application know some tags have been selected.
 * @returns {{type: SELECT_TAGS, ids: array}}
 */
export function selectTags(ids) {
    return {
        type: types.SELECT_TAGS,
        ids
    };
}

/**
 * Creates an action that lets the application know all tags have been deselected.
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
        return fetch('/api/tags/')
            .then(response => response.json())
            .then(json => dispatch(fetchTagsSuccess(json)))
            .catch(error => dispatch(fetchTagsFailure(error)));
    }
}