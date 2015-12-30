import * as types from '../constants/ActionTypes';

/**
 * Creates an action that lets users vote for a skill.
 * @param id
 * @returns {{type: VOTE_FOR_SKILL, id: *}}
 */
export function voteForSkill(id) {
    return {type: types.VOTE_FOR_SKILL, id};
}