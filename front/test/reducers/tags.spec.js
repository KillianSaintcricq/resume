import expect from 'expect';
import deepFreeze from 'deep-freeze';
import reducer from './../../reducers/tags';
import * as types from '../../constants/ActionTypes';

const testReducer = (stateBefore, action, stateAfter) => expect(reducer(stateBefore, action)).toEqual(stateAfter);

describe('tags reducer', () => {

    it('should return the initial state', () => {

        const stateBefore = undefined;
        const action = {};

        const stateAfter = {
            isFetching: false,
            values: []
        };

        testReducer(stateBefore, action, stateAfter);

    });

    describe('should handle SELECT_TAG', () => {

        it('when selecting an already selected tag', () => {

            const stateBefore = {
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
            };
            deepFreeze(stateBefore);
            const action = {
                type: types.SELECT_TAG,
                id: 3
            };

            const stateAfter = {
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
            };

            testReducer(stateBefore, action, stateAfter);

        });

        it('when selecting a deselected tag', () => {

            const stateBefore = {
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
            };
            deepFreeze(stateBefore);
            const action = {
                type: types.SELECT_TAG,
                id: 1
            };

            const stateAfter = {
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
            };

            testReducer(stateBefore, action, stateAfter);

        });

    });

    it('should handle SELECT_TAGS', () => {

        const stateBefore = {
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
                },
                {
                    id: 4,
                    title: 'laravel',
                    selected: true
                },
                {
                    id: 8,
                    title: 'java',
                    selected: true
                }
            ]
        };
        deepFreeze(stateBefore);
        const action = {
            type: types.SELECT_TAGS,
            ids: [1, 4, 8]
        };

        const stateAfter = {
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
                },
                {
                    id: 4,
                    title: 'laravel',
                    selected: false
                },
                {
                    id: 8,
                    title: 'java',
                    selected: false
                }
            ]
        };

        testReducer(stateBefore, action, stateAfter);

    });

    describe('should handle SELECT_ALL_TAGS', () => {

        it('when all tags are already selected', () => {

            const stateBefore = {
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
            };
            deepFreeze(stateBefore);
            const action = {
                type: types.SELECT_ALL_TAGS
            };

            const stateAfter = {
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
            };

            testReducer(stateBefore, action, stateAfter);

        });

        it('when all tags are deselected', () => {

            const stateBefore = {
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
            };
            deepFreeze(stateBefore);
            const action = {
                type: types.SELECT_ALL_TAGS
            };

            const stateAfter = {
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
            };

            testReducer(stateBefore, action, stateAfter);

        });

        it('when some tags are selected and others are not', () => {

            const stateBefore = {
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
            };
            deepFreeze(stateBefore);
            const action = {
                type: types.SELECT_ALL_TAGS
            };

            const stateAfter = {
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
            };

            testReducer(stateBefore, action, stateAfter);

        });

    });

    describe('should handle DESELECT_ALL_TAGS', () => {

        it('when all tags are selected', () => {

            const stateBefore = {
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
            };
            deepFreeze(stateBefore);
            const action = {
                type: types.DESELECT_ALL_TAGS
            };

            const stateAfter = {
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
            };

            testReducer(stateBefore, action, stateAfter);

        });

        it('when all tags are already deselected', () => {

            const stateBefore = {
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
            };
            deepFreeze(stateBefore);
            const action = {
                type: types.DESELECT_ALL_TAGS
            };

            const stateAfter = {
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
            };

            testReducer(stateBefore, action, stateAfter);

        });

        it('when some tags are selected and others are not', () => {

            const stateBefore = {
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
            };
            deepFreeze(stateBefore);
            const action = {
                type: types.DESELECT_ALL_TAGS
            };

            const stateAfter = {
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
            };

            testReducer(stateBefore, action, stateAfter);

        });

    });

    it('should handle FETCH_TAGS_REQUEST', () => {

        const stateBefore = {
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
        };
        deepFreeze(stateBefore);
        const action = {
            type: types.FETCH_TAGS_REQUEST
        };

        const stateAfter = {
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
        };

        testReducer(stateBefore, action, stateAfter);

    });

    it('should handle FETCH_TAGS_SUCCESS', () => {

        const stateBefore = {
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
        };
        deepFreeze(stateBefore);
        const action = {
            type: types.FETCH_TAGS_SUCCESS,
            tags: [
                {
                    id: 1,
                    title: 'javascript'
                },
                {
                    id: 4,
                    title: 'uml'
                }
            ]
        };

        const stateAfter = {
            isFetching: false,
            values: [
                {
                    id: 1,
                    title: 'javascript',
                    selected: false
                },
                {
                    id: 4,
                    title: 'uml',
                    selected: false
                }
            ]
        };

        testReducer(stateBefore, action, stateAfter);

    });

    it('should handle FETCH_TAGS_FAILURE', () => {

        const stateBefore = {
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
        };
        deepFreeze(stateBefore);
        const action = {
            type: types.FETCH_TAGS_FAILURE
        };

        const stateAfter = {
            isFetching: false,
            values: []
        };

        testReducer(stateBefore, action, stateAfter);

    });

});