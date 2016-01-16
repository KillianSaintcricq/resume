import reducer from './../../reducers/skills';
import * as types from '../../constants/ActionTypes';
import { createTestReducer } from './helpers';

const testReducer = createTestReducer(reducer);

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
                    id: 3,
                    title: 'Java',
                    votes: 2,
                    tags: ['back-end']
                },
                {
                    id: 1,
                    title: 'Javascript',
                    votes: 2,
                    tags: ['front-end']
                }
            ]
        };
        const action = {
            type: types.VOTE_FOR_SKILL,
            id: 1
        };

        const stateAfter = {
            isFetching: false,
            values: [
                {
                    id: 3,
                    title: 'Java',
                    votes: 2,
                    tags: ['back-end']
                },
                {
                    id: 1,
                    title: 'Javascript',
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
                    id: 2,
                    title: 'Java',
                    votes: 2,
                    tags: ['back-end']
                },
                {
                    id: 5,
                    title: 'Javascript',
                    votes: 5,
                    tags: ['front-end']
                }
            ]
        };
        const action = {
            type: types.FETCH_SKILLS_REQUEST
        };

        const stateAfter = {
            isFetching: true,
            values: [
                {
                    id: 2,
                    title: 'Java',
                    votes: 2,
                    tags: ['back-end']
                },
                {
                    id: 5,
                    title: 'Javascript',
                    votes: 5,
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
                    votes: 2,
                    tags: ['front-end']
                }
            ]
        };
        const action = {
            type: types.FETCH_SKILLS_SUCCESS,
            skills: [
                {
                    id: 3,
                    title: 'Java',
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
                    votes: 2,
                    tags: ['front-end']
                }
            ]
        };
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