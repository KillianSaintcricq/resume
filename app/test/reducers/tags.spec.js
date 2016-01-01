import expect from 'expect';
import reducer from '../../reducers/tags';
import * as types from '../../constants/ActionTypes';

describe('tags reducer', () => {

    it('should return the initial state', () => {
        expect(
            reducer(
                undefined,
                {}
            )
        ).toEqual(
            {
                isFetching: false,
                values: []
            }
        );
    });

    it('should handle SELECT_TAG', () => {
        // Select tag that was selected
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
        // Select a tag that was not selected
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
                    type: types.DESELECT_ALL_TAGS
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

    it('should handle FETCH_TAGS_REQUEST', () => {
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
                            id: 5,
                            title: 'java',
                            selected: true
                        }
                    ]
                },
                {
                    type: types.FETCH_TAGS_REQUEST
                }
            )
        ).toEqual(
            {
                isFetching: true,
                values: [
                    {
                        id: 1,
                        title: 'javascript',
                        selected: false
                    },
                    {
                        id: 5,
                        title: 'java',
                        selected: true
                    }
                ]
            }
        );
    });

    it('should handle FETCH_TAGS_SUCCESS', () => {
        expect(
            reducer(
                {
                    isFetching: true,
                    values: [
                        {
                            id: 1,
                            title: 'javascript',
                            selected: false
                        },
                        {
                            id: 5,
                            title: 'java',
                            selected: true
                        }
                    ]
                },
                {
                    type: types.FETCH_TAGS_SUCCESS,
                    tags: [
                        {
                            id: 4,
                            title: 'uml'
                        }
                    ]
                }
            )
        ).toEqual({
            isFetching: false,
            values: [
                {
                    id: 4,
                    title: 'uml',
                    selected: false
                }
            ]
        });
    });

    it('should handle FETCH_TAGS_FAILURE', () => {
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
                            id: 5,
                            title: 'java',
                            selected: true
                        }
                    ]
                },
                {
                    type: types.FETCH_TAGS_FAILURE
                }
            )
        ).toEqual(
            {
                isFetching: false,
                values: []
            }
        );
    });

});