import * as types from '../constants/ActionTypes';

export function selectTag(id) {
    return {type: types.SELECT_TAG, id};
}

export function selectAll() {
    return {type: types.SELECT_ALL_TAGS};
}

export function selectNone() {
    return {type: types.SELECT_NO_TAGS};
}