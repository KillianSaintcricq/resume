import * as types from '../constants/ActionTypes';

/**
 * Creates an action that lets users select a tag.
 * @param id
 * @returns {{type: SELECT_TAG, id: *}}
 */
export function selectTag(id) {
    return {type: types.SELECT_TAG, id};
}

/**
 * Creates an action that lets users select all tags.
 * @returns {{type: SELECT_ALL_TAGS}}
 */
export function selectAll() {
    return {type: types.SELECT_ALL_TAGS};
}

/**
 * Creates an action that lets users deselect all tags.
 * @returns {{type: SELECT_NO_TAGS}}
 */
export function selectNone() {
    return {type: types.SELECT_NO_TAGS};
}