import { BUILD_CARD } from '../actions/types';

const initialState = {
    results: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case BUILD_CARD:
            let mergedResults = [...state.results, action.payload]
            
            return {
                ...state,
                results: mergedResults
            }

        default: 
            return state;
    }
}