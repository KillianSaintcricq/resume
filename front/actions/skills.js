import fetch from 'isomorphic-fetch';
import * as types from '../constants/ActionTypes';

/**
 * Creates an action that lets the application know a user has voted.
 * @param id
 * @returns {{type: VOTE_FOR_SKILL, id: *}}
 */
export function voteForSkill(id) {
    return {
        type: types.VOTE_FOR_SKILL,
        id
    };
}

/**
 * Creates an action that lets the application know skills have been requested.
 * @returns {{type: FETCH_SKILLS_REQUEST}}
 */
function fetchSkillsRequest() {
    return {
        type: types.FETCH_SKILLS_REQUEST
    }
}

/**
 * Creates an action that lets the application know skills have been received.
 * @param json
 * @returns {{type: FETCH_SKILLS_SUCCESS, skills: *}}
 */
function fetchSkillsSuccess(json) {
    return {
        type: types.FETCH_SKILLS_SUCCESS,
        skills: json
    }
}

/**
 * Creates an action that lets the application know skills have not been received.
 * @returns {{type: FETCH_SKILLS_FAILURE}}
 */
function fetchSkillsFailure() {
    return {
        type: types.FETCH_SKILLS_FAILURE
    }
}

/**
 * Creates an action that fetches skills from the server.
 * @returns {Function}
 */
export function fetchSkills() {
    return dispatch => {
        dispatch(fetchSkillsRequest());
        return fetch('http://localhost:1993/api/skills/')
            .then(response => response.json())
            .then(json => dispatch(fetchSkillsSuccess(json)))
            .catch(error => dispatch(fetchSkillsFailure()));
    }
}