import { BUILD_CARD,
UPDATE_FILE_NAME,
UPDATE_FORM_ELEMENT_DATA,
UPDATE_FORMAT_FORM_ELEMENT_DATA,
UPDATE_FORMAT_FORM_ELEMENTS,
UPDATE_BUILD_FILE_ID,
UPDATE_BUILD_CARD_FORMAT } from '../actions/types';

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
                label: 'Mode',
                placeholder: '',
                value: ''
            }
        }
    ],
    fileId: '',
    cardFormat: undefined
    
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
        case UPDATE_BUILD_FILE_ID:
            return {
                ...state,
                fileId: action.payload
            }
        case UPDATE_BUILD_CARD_FORMAT:
            return {
                ...state,
                cardFormat: action.payload
            }

        default: 
            return state;
    }
}