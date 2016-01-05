import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as actions from '../../actions/tags';
import * as types from '../../constants/ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('tag actions', () => {

    it('selectTag should create SELECT_TAG action', () => {
        expect(actions.selectTag(1)).toEqual({
            type: types.SELECT_TAG,
            id: 1
        });
    });

    it('selectRandom should create SELECT_TAGS action', () => {
        expect(actions.selectTags([3, 2, 6])).toEqual({
            type: types.SELECT_TAGS,
            ids: [3, 2, 6]
        });
    });

    it('selectAll should create SELECT_ALL_TAGS action', () => {
        expect(actions.selectAll()).toEqual({
            type: types.SELECT_ALL_TAGS
        });
    });

    it('deselectAll should create DESELECT_ALL_TAGS action', () => {
        expect(actions.deselectAll()).toEqual({
            type: types.DESELECT_ALL_TAGS
        });
    });

});

/* Will be tested when API will be implemented.
describe('async tag actions', () => {

    afterEach(() => {
        nock.cleanAll();
    });

    it('creates FETCH_TAGS_SUCCESS when fetching tags has been done', (done) => {
        const response = [
            { id: 1, title: 'javascript' }, { id: 2, title: 'react' }
        ];

        nock(api()).get('/api/tags/').reply(200, response);

        const initialState = {
            isFetching: false,
            values: []
        };
        const expectedActions = [
            {type: types.FETCH_TAGS_REQUEST},
            {type: types.FETCH_TAGS_SUCCESS, tags: response}
        ];
        const store = mockStore(initialState, expectedActions, done);

        store.dispatch(actions.fetchTags());
    });

});
*/