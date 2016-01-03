import expect from 'expect';
import deepFreeze from 'deep-freeze';
import reducer from './../../reducers/skills';
import * as types from '../../constants/ActionTypes';

const testReducer = (stateBefore, action, stateAfter) => expect(reducer(stateBefore, action)).toEqual(stateAfter);

describe('skills reducer', () => {

    it('should return the initial state', () => {

        const stateBefore = undefined;
        const action = {};

        const stateAfter = {
            isFetching: false,
            values: []
        };

        testReducer(stateBefore, action, stateAfter);

    });

    it('should handle VOTE_FOR_SKILL', () => {

        const stateBefore = {
            isFetching: false,
            values: [
                {
                    id: 1,
                    title: 'Javascript',
                    text: 'I am in love with Javascript!',
                    votes: 2,
                    tags: ['front-end']
                }
            ]
        };
        deepFreeze(stateBefore);
        const action = {
            type: types.VOTE_FOR_SKILL,
            id: 1
        };

        const stateAfter = {
            isFetching: false,
            values: [
                {
                    id: 1,
                    title: 'Javascript',
                    text: 'I am in love with Javascript!',
                    votes: 3,
                    tags: ['front-end']
                }
            ]
        };

        testReducer(stateBefore, action, stateAfter);

    });

    it('should handle FETCH_SKILLS_REQUEST', () => {

        const stateBefore = {
            isFetching: false,
            values: [
                {
                    id: 1,
                    title: 'Javascript',
                    text: 'I am in love with Javascript!',
                    votes: 2,
                    tags: ['front-end']
                }
            ]
        };
        deepFreeze(stateBefore);
        const action = {
            type: types.FETCH_SKILLS_REQUEST
        };

        const stateAfter = {
            isFetching: true,
            values: [
                {
                    id: 1,
                    title: 'Javascript',
                    text: 'I am in love with Javascript!',
                    votes: 2,
                    tags: ['front-end']
                }
            ]
        };

        testReducer(stateBefore, action, stateAfter);

    });

    it('should handle FETCH_SKILLS_SUCCESS', () => {
        const stateBefore = {
            isFetching: true,
            values: [
                {
                    id: 1,
                    title: 'Javascript',
                    text: 'I am in love with Javascript!',
                    votes: 2,
                    tags: ['front-end']
                }
            ]
        };
        deepFreeze(stateBefore);
        const action = {
            type: types.FETCH_SKILLS_SUCCESS,
            skills: [
                {
                    id: 3,
                    title: 'Java',
                    text: 'I used Java a lot.',
                    votes: 6,
                    tags: ['back-end']
                }
            ]
        };

        const stateAfter = {
            isFetching: false,
            values: [
                {
                    id: 3,
                    title: 'Java',
                    text: 'I used Java a lot.',
                    votes: 6,
                    tags: ['back-end']
                }
            ]
        };

        testReducer(stateBefore, action, stateAfter);

    });

    it('should handle FETCH_SKILLS_FAILURE', () => {

        const stateBefore = {
            isFetching: true,
            values: [
                {
                    id: 1,
                    title: 'Javascript',
                    text: 'I am in love with Javascript!',
                    votes: 2,
                    tags: ['front-end']
                }
            ]
        };
        deepFreeze(stateBefore);
        const action = {
            type: types.FETCH_SKILLS_FAILURE
        };

        const stateAfter = {
            isFetching: false,
            values: []
        };

        testReducer(stateBefore, action, stateAfter);

    });

});