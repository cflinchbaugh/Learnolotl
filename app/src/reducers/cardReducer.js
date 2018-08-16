import { FETCH_CARDS, NEW_CARDS } from '../actions/types';

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