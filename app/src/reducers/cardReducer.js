import { FETCH_CARDS, NEW_CARDS } from '../actions/cards';

const initialState = {
    items: [],
    card: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        default: 
            return state;
    }
}