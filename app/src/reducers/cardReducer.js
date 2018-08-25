import { FETCH_CARDS, NEW_CARDS, REVEAL_OPTION, UPDATE_FILE_IDS } from '../actions/types';

const initialState = {
    items: [
        {
            "metadata": ["101"],
            "langData": [
                {
                    "id": "english",
                    "value": "I"
                }, {
                    "id": "romaji",
                    "value": "watashi"
                }, {
                    "id": "hiragana",
                    "value": "\u308E\u305F\u3057"
                }
            ]
        },
        {
            "metadata": ["101"],
            "langData": [
                {
                    "id": "english",
                    "value": "you"
                }, {
                    "id": "romaji",
                    "value": "anata"
                }, {
                    "id": "hiragana",
                    "value": "\u3041\u306A\u305F"
                }
            ]
        }
    ],
    card: {},
    flashCardIdx: 0,
    display: 'none',
    revealOption: [{
        id: '',
        value: '',
    }],
    uploadedIds: []
}

export default function(state = initialState, action) {
    console.log(action.type);
    switch(action.type) {
        case NEW_CARDS:
            let mergedCards = [...state.items, ...action.payload];

            return {
                ...state,
                items: mergedCards
            }

        case FETCH_CARDS:
            return {
                ...state,
                revealOption: [{
                    id: '',
                    value: '',
                }],
                flashCardIdx: action.payload
            }

        case REVEAL_OPTION:
            return {
                ...state,
                revealOption: action.payload
            }

        case UPDATE_FILE_IDS:
            return {
                ...state,
                uploadedIds: action.payload
            }
        default: 
            return state;
    }
}