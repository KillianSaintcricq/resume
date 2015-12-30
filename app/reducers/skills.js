import {VOTE_FOR_SKILL} from '../constants/ActionTypes';

const initialState = [
    {id: 1, title: 'Javascript', text: 'I did some Javascript yep...', votes: 9, tags: ['javascript', 'front-end']},
    {id: 2, title: 'React', text: 'React is used right here!', votes: 10, tags: ['javascript', 'react', 'front-end']},
    {id: 3, title: 'Java', text: 'I used Java a lot in Capgemini and at school.', votes: 2, tags: ['java', 'back-end']}
];

export default function skills(state = initialState, action) {
    switch (action.type) {
        case VOTE_FOR_SKILL:
            return state.map((skill) => {
                if (skill.id === action.id) skill.votes++;
                return skill;
            });
        default:
            return state;
    }
}
