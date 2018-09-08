import { BUILD_CARD,
UPDATE_FILE_NAME,
UPDATE_FORM_ELEMENT_DATA,
UPDATE_FORMAT_FORM_ELEMENT_DATA,
UPDATE_FORMAT_FORM_ELEMENTS } from '../actions/types';

const initialState = {
    revealOptionData: [],
    fileName: '',
    formElementData: {},
    formatFormElementData: {},
    formatFormElements: [
        {
            type: 'input',
            data: {
                id: 'revealOptionId',
                label: 'Button Label',
                placeholder: '',
                value: ''
            }
        }
    ],
    
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
        case UPDATE_FORMAT_FORM_ELEMENT_DATA:
            return {
                ...state,
                formatFormElementData: action.payload
            }
        case UPDATE_FORMAT_FORM_ELEMENTS:
            return {
                ...state,
                formatFormElements: action.payload
            }

        default: 
            return state;
    }
}