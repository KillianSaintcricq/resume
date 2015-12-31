import expect from 'expect';
import reducer from '../../reducers/skills';
import * as types from '../../constants/ActionTypes';

describe('skills reducer', () => {

    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual(
            {
                isFetching: false,
                values: []
            }
        );
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
        ).toEqual(
            {
                isFetching: false,
                values: [{
                    id: 1,
                    title: 'Javascript',
                    text: 'I am in love with Javascript!',
                    votes: 3,
                    tags: ['front-end']
                }]
            }
        );
    });

});