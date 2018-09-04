import { BUILD_CARD } from '../actions/types';

const initialState = {
    revealOptionData: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case BUILD_CARD:
            let mergedResults = [...state.revealOptionData, action.payload]
            
            return {
                ...state,
                revealOptionData: mergedResults
            }

        default: 
            return state;
    }
}