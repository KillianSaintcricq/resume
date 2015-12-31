import expect from 'expect';
import * as actions from '../../actions/skills';
import * as types from '../../constants/ActionTypes';

describe('skill actions', () => {

    it('voteForSkill should create VOTE_FOR_SKILL action', () => {
        expect(actions.voteForSkill(1)).toEqual({
            type: types.VOTE_FOR_SKILL,
            id: 1
        });
    });

});