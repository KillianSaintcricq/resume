import {SELECT_ALL_TAGS, SELECT_NO_TAGS, SELECT_TAG} from '../constants/ActionTypes';

const initialState = [
    {id: 1, text: 'React', selected: true},
    {id: 2, text: 'Angular', selected: false}
];

export default function tags(state = initialState, action) {
    switch (action.type) {
        case SELECT_ALL_TAGS:
            return state.map((tag) => {
                tag.selected = true;
                return tag;
            });
        case SELECT_NO_TAGS:
            return state.map((tag) => {
                tag.selected = false;
                return tag;
            });
        case SELECT_TAG:
            return state.map((tag) => {
               return tag.id === action.id ?
                   Object.assign({}, tag, {selected: !tag.selected}) :
                   tag;
            });
        default:
            return state;
    }
}
