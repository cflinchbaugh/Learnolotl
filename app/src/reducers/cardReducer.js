import { FETCH_CARDS, NEW_CARDS, REVEAL_OPTION, UPDATE_FILE_IDS } from '../actions/types';

const initialState = {
    items: [
        {
            "metadata": ["101"],
            "revealOptionData": [
                {
                    "id": "english",
                    "value": "I",
                    "type": "text"
                }, {
                    "id": "romaji",
                    "value": "watashi",
                    "type": "text"
                }, {
                    "id": "hiragana",
                    "value": "\u308E\u305F\u3057",
                    "type": "text"
                }
            ]
        },
        {
            "metadata": ["101"],
            "revealOptionData": [
                {
                    "id": "english",
                    "value": "you",
                    "type": "text"
                }, {
                    "id": "romaji",
                    "value": "anata",
                    "type": "text"
                }, {
                    "id": "hiragana",
                    "value": "\u3041\u306A\u305F",
                    "type": "text"
                }
            ]
        }
    ],
    card: {},
    flashCardIdx: 0,
    display: 'none',
    sampleData: true,
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
                items: mergedCards,
                sampleData: false
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