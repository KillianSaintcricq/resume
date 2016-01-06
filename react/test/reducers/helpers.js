import expect from 'expect';
import deepFreeze from 'deep-freeze';

/**
 * Creates a method to test a reducer.
 * @param reducer
 * @return a method to test the given reducer
 */
export const createTestReducer = (reducer) => (stateBefore, action, stateAfter) => {
    if (stateBefore) deepFreeze(stateBefore);
    expect(reducer(stateBefore, action, stateAfter)).toEqual(stateAfter);
};
