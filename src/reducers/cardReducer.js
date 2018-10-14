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
                            "revealOptionData": [
                                {
                                    "id": "English",
                                    "value": "Excuse Me",
                                    "type": "text"
                                },
                                {
                                    "id": "Romaji",
                                    "value": "Sumimasen",
                                    "type": "text"
                                },
                                {
                                    "id": "Hiragana",
                                    "value": "すみません",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "revealOptionData": [
                                {
                                    "id": "English",
                                    "value": "English (Language)",
                                    "type": "text"
                                },
                                {
                                    "id": "Romaji",
                                    "value": "Eigo",
                                    "type": "text"
                                },
                                {
                                    "id": "Hiragana",
                                    "value": "えいご",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "revealOptionData": [
                                {
                                    "id": "English",
                                    "value": "To understand",
                                    "type": "text"
                                },
                                {
                                    "id": "Romaji",
                                    "value": "wakarimasu",
                                    "type": "text"
                                },
                                {
                                    "id": "Hiragana",
                                    "value": "わかります",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "revealOptionData": [
                                {
                                    "id": "English",
                                    "value": "'?' (used at the end of a sentence to form a question)",
                                    "type": "text"
                                },
                                {
                                    "id": "Romaji",
                                    "value": "ka",
                                    "type": "text"
                                },
                                {
                                    "id": "Hiragana",
                                    "value": "か",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "revealOptionData": [
                                {
                                    "id": "English",
                                    "value": "No",
                                    "type": "text"
                                },
                                {
                                    "id": "Romaji",
                                    "value": "iie",
                                    "type": "text"
                                },
                                {
                                    "id": "Hiragana",
                                    "value": "いいえ",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "revealOptionData": [
                                {
                                    "id": "English",
                                    "value": "I",
                                    "type": "text"
                                },
                                {
                                    "id": "Romaji",
                                    "value": "watashi",
                                    "type": "text"
                                },
                                {
                                    "id": "Hiragana",
                                    "value": "わたし",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "revealOptionData": [
                                {
                                    "id": "English",
                                    "value": "To not know/understand",
                                    "type": "text"
                                },
                                {
                                    "id": "Romaji",
                                    "value": "wakarimasen",
                                    "type": "text"
                                },
                                {
                                    "id": "Hiragana",
                                    "value": "わかりません",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "revealOptionData": [
                                {
                                    "id": "English",
                                    "value": "Japanese (language)",
                                    "type": "text"
                                },
                                {
                                    "id": "Romaji",
                                    "value": "nihongo",
                                    "type": "text"
                                },
                                {
                                    "id": "Hiragana",
                                    "value": "にほんご",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "revealOptionData": [
                                {
                                    "id": "English",
                                    "value": "A few, a little",
                                    "type": "text"
                                },
                                {
                                    "id": "Romaji",
                                    "value": "sukoshi",
                                    "type": "text"
                                },
                                {
                                    "id": "Hiragana",
                                    "value": "すこし",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "revealOptionData": [
                                {
                                    "id": "English",
                                    "value": "American (nationality)",
                                    "type": "text"
                                },
                                {
                                    "id": "Romaji",
                                    "value": "amerika-jin",
                                    "type": "text"
                                },
                                {
                                    "id": "Hiragana",
                                    "value": "アメリカじん",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "revealOptionData": [
                                {
                                    "id": "English",
                                    "value": "You",
                                    "type": "text"
                                },
                                {
                                    "id": "Romaji",
                                    "value": "anata",
                                    "type": "text"
                                },
                                {
                                    "id": "Hiragana",
                                    "value": "あなた",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "revealOptionData": [
                                {
                                    "id": "English",
                                    "value": "Is/Are",
                                    "type": "text"
                                },
                                {
                                    "id": "Romaji",
                                    "value": "desu",
                                    "type": "text"
                                },
                                {
                                    "id": "Hiragana",
                                    "value": "です",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "revealOptionData": [
                                {
                                    "id": "English",
                                    "value": "Yes",
                                    "type": "text"
                                },
                                {
                                    "id": "Romaji",
                                    "value": "hai",
                                    "type": "text"
                                },
                                {
                                    "id": "Hiragana",
                                    "value": "はい",
                                    "type": "text"
                                }
                            ]
                        }
                    ]
                }
            }

        case RESET_LEARN_DEMO:
            return initialState;
            
        default: 
            return state;
    }
}