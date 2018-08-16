import { FETCH_CARDS, NEW_CARDS } from '../actions/types';

const initialState = {
    items: [],
    card: {}
}

export default function(state = initialState, action) {
    console.log(action.type);
    switch(action.type) {
        case NEW_CARDS:
            return {
                ...state,
                items: action.payload
            }
        
        default: 
            return state;
    }
}