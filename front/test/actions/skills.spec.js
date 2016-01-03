import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as actions from '../../actions/skills';
import * as types from '../../constants/ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('skill actions', () => {

    it('voteForSkill should create VOTE_FOR_SKILL action', () => {
        expect(actions.voteForSkill(1)).toEqual({
            type: types.VOTE_FOR_SKILL,
            id: 1
        });
    });

});

describe('async skill actions', () => {

    afterEach(() => {
        nock.cleanAll();
    });

    it('creates FETCH_SKILLS_SUCCESS when fetching skills has been done', (done) => {
        const response = [{
            id: 1,
            title: 'Javascript',
            text: 'I am in love with Javascript!',
            votes: 2,
            tags: ['front-end']
        }];

        nock('http://localhost:3001/').get('/api/skills/').reply(200, response);

        const initialState = {
            isFetching: false,
            values: []
        };
        const expectedActions = [
            { type: types.FETCH_SKILLS_REQUEST },
            { type: types.FETCH_SKILLS_SUCCESS, skills: response }
        ];
        const store = mockStore(initialState, expectedActions, done);

        store.dispatch(actions.fetchSkills());
    });

});