import { 
    FETCH_CARDS, 
    NEW_CARDS,
    REPLACE_CARDS, 
    REVEAL_OPTION, 
    UPDATE_FILE_IDS,
    REPLACE_FILE_IDS,
    UPDATE_MODE,
    UPDATE_MODE_OPTIONS,
    UPDATE_FORMAT,
    UPDATE_LEARN_DATA,
    RESET_LEARN_DEMO
} from '../actions/types';

const initialState = {
    items: [],
    card: {},
    flashCardIdx: 0,
    display: 'none',
    sampleData: false,
    revealOption: [{
        id: '',
        value: '',
    }],
    uploadedIds: [],
    modeOptions: [
    ],
    format: { },
    learnData: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case NEW_CARDS:
            let mergedCards = state.sampleData ? action.payload : [...state.items, ...action.payload];

            return {
                ...state,
                items: mergedCards,
                sampleData: false
            }

        case REPLACE_CARDS:
            return {
                ...state,
                items: action.payload
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
        case REPLACE_FILE_IDS:
            return {
                ...state,
                uploadedIds: action.payload
            }
        case UPDATE_MODE:
            return {
                ...state,
                mode: action.payload
            }
        case UPDATE_MODE_OPTIONS:
            return {
                ...state,
                modeOptions: action.payload
            }
        case UPDATE_FORMAT:
            return {
                ...state,
                format: action.payload
            }
        case UPDATE_LEARN_DATA:
            if (action.payload === '') {
                return {
                    ...state,
                    learnData: action.payload,
                    sampleData: false,
                    format: {},
                    mode: '',
                    modeOptions: [],
                    items: [],
                    uploadedIds: []
                }

            } else {
                return {
                    ...state,
                    learnData: action.payload,
                    sampleData: true,
                    format: {
                        "0": "English",
                        "1": "Romaji",
                        "2": "Hiragana"
                    },
                    mode: 'English',
                    modeOptions: [
                        {
                            id: 'English',
                            value: 'English'
                        }, {
                            id: 'Romaji',
                            value: 'Romaji'
                        }, {
                            id: 'Hiragana',
                            value: 'Hiragana'
                        }
                    ],
                    items: [
                        {
                            "metadata": ["101"],
                            "revealOptionData": [
                                {
                                    "id": "English",
                                    "value": "I",
                                    "type": "text"
                                }, {
                                    "id": "Romaji",
                                    "value": "watashi",
                                    "type": "text"
                                }, {
                                    "id": "Hiragana",
                                    "value": "\u308E\u305F\u3057",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "metadata": ["101"],
                            "revealOptionData": [
                                {
                                    "id": "English",
                                    "value": "you",
                                    "type": "text"
                                }, {
                                    "id": "Romaji",
                                    "value": "anata",
                                    "type": "text"
                                }, {
                                    "id": "Hiragana",
                                    "value": "\u3041\u306A\u305F",
                                    "type": "text"
                                }
                            ]
                        }
                    ]
                }
            }

        case RESET_LEARN_DEMO:
            return {
                ...state,
                items: [],
                sampleData: false,
                modeOptions: [],
                learnData: '',
                mode: ''
            }
        default: 
            return state;
    }
}