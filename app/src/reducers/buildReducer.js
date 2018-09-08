import { BUILD_CARD,
UPDATE_FILE_NAME,
UPDATE_FORM_ELEMENT_DATA } from '../actions/types';

const initialState = {
    revealOptionData: [],
    fileName: '',
    formElementData: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case BUILD_CARD:
            let mergedResults = [...state.revealOptionData, action.payload]
            
            return {
                ...state,
                revealOptionData: mergedResults
            }
        case UPDATE_FILE_NAME:
            return {
                ...state,
                fileName: action.payload
            }
        case UPDATE_FORM_ELEMENT_DATA:
            return {
                ...state,
                formElementData: action.payload
            }

        default: 
            return state;
    }
}