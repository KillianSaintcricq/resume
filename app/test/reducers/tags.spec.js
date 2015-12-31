import expect from 'expect';
import reducer from '../../reducers/tags';
import * as types from '../../constants/ActionTypes';

describe('tags reducer', () => {

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

    it('should handle SELECT_TAG (set selected from false to true)', () => {
        expect(
            reducer(
                {
                    isFetching: false,
                    values: [
                        {
                            id: 1,
                            title: 'javascript',
                            selected: false
                        },
                        {
                            id: 3,
                            title: 'react',
                            selected: true
                        }
                    ]
                },
                {
                    type: types.SELECT_TAG,
                    id: 1
                }
            )
        ).toEqual(
            {
                isFetching: false,
                values: [
                    {
                        id: 1,
                        title: 'javascript',
                        selected: true
                    },
                    {
                        id: 3,
                        title: 'react',
                        selected: true
                    }
                ]
            }
        );
    });

    it('should handle SELECT_TAG (set selected from true to false)', () => {
        expect(
            reducer(
                {
                    isFetching: false,
                    values: [
                        {
                            id: 1,
                            title: 'javascript',
                            selected: false
                        },
                        {
                            id: 3,
                            title: 'react',
                            selected: true
                        }
                    ]
                },
                {
                    type: types.SELECT_TAG,
                    id: 3
                }
            )
        ).toEqual(
            {
                isFetching: false,
                values: [
                    {
                        id: 1,
                        title: 'javascript',
                        selected: false
                    },
                    {
                        id: 3,
                        title: 'react',
                        selected: false
                    }
                ]
            }
        );
    });

    it('should handle SELECT_ALL_TAGS', () => {
        expect(
            reducer(
                {
                    isFetching: false,
                    values: [
                        {
                            id: 1,
                            title: 'javascript',
                            selected: false
                        },
                        {
                            id: 3,
                            title: 'react',
                            selected: true
                        }
                    ]
                },
                {
                    type: types.SELECT_ALL_TAGS
                }
            )
        ).toEqual(
            {
                isFetching: false,
                values: [
                    {
                        id: 1,
                        title: 'javascript',
                        selected: true
                    },
                    {
                        id: 3,
                        title: 'react',
                        selected: true
                    }
                ]
            }
        );
    });

    it('should handle DESELECT_ALL_TAGS', () => {
        expect(
            reducer(
                {
                    isFetching: false,
                    values: [
                        {
                            id: 1,
                            title: 'javascript',
                            selected: false
                        },
                        {
                            id: 3,
                            title: 'react',
                            selected: true
                        }
                    ]
                },
                {
                    type: types.DESELECT_ALL_TAGS,
                }
            )
        ).toEqual(
            {
                isFetching: false,
                values: [
                    {
                        id: 1,
                        title: 'javascript',
                        selected: false
                    },
                    {
                        id: 3,
                        title: 'react',
                        selected: false
                    }
                ]
            }
        );
    });

});