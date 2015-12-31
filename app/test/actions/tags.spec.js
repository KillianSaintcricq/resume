import expect from 'expect';
import * as actions from '../../actions/tags';
import * as types from '../../constants/ActionTypes';

describe('tag actions', () => {

    it('selectTag should create SELECT_TAG action', () => {
        expect(actions.selectTag(1)).toEqual({
            type: types.SELECT_TAG,
            id: 1
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