import expect from 'expect';
import reducer from '../../reducers/skills';
import * as types from '../../constants/ActionTypes';

describe('skills reducer', () => {

    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual({
            isFetching: false,
            values: []
        });
    });

    it('should handle VOTE_FOR_SKILL', () => {
        expect(
            reducer(
                {
                    isFetching: false,
                    values: [{
                        id: 1,
                        title: 'Javascript',
                        text: 'I am in love with Javascript!',
                        votes: 2,
                        tags: ['front-end']
                    }]
                },
                {
                    type: types.VOTE_FOR_SKILL,
                    id: 1
                }
            )
        ).toEqual({
            isFetching: false,
            values: [{
                id: 1,
                title: 'Javascript',
                text: 'I am in love with Javascript!',
                votes: 3,
                tags: ['front-end']
            }]
        });
    });

    it('should handle FETCH_SKILLS_REQUEST', () => {
        expect(
            reducer(
                {
                    isFetching: false,
                    values: [{
                        id: 1,
                        title: 'Javascript',
                        text: 'I am in love with Javascript!',
                        votes: 2,
                        tags: ['front-end']
                    }]
                },
                {
                    type: types.FETCH_SKILLS_REQUEST
                }
            )
        ).toEqual({
            isFetching: true,
            values: [{
                id: 1,
                title: 'Javascript',
                text: 'I am in love with Javascript!',
                votes: 2,
                tags: ['front-end']
            }]
        });
    });

    it('should handle FETCH_SKILLS_SUCCESS', () => {
        expect(
            reducer(
                {
                    isFetching: true,
                    values: [{
                        id: 1,
                        title: 'Javascript',
                        text: 'I am in love with Javascript!',
                        votes: 2,
                        tags: ['front-end']
                    }]
                },
                {
                    type: types.FETCH_SKILLS_SUCCESS,
                    skills: [{
                        id: 3,
                        title: 'Java',
                        text: 'I used Java a lot.',
                        votes: 6,
                        tags: ['back-end']
                    }]
                }
            )
        ).toEqual({
            isFetching: false,
            values: [{
                id: 3,
                title: 'Java',
                text: 'I used Java a lot.',
                votes: 6,
                tags: ['back-end']
            }]
        });
    });

    it('should handle FETCH_SKILLS_FAILURE', () => {
        expect(
            reducer(
                {
                    isFetching: true,
                    values: [{
                        id: 1,
                        title: 'Javascript',
                        text: 'I am in love with Javascript!',
                        votes: 2,
                        tags: ['front-end']
                    }]
                },
                {
                    type: types.FETCH_SKILLS_FAILURE
                }
            )
        ).toEqual({
            isFetching: false,
            values: []
        });
    });

});