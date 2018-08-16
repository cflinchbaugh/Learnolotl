import { FETCH_CARDS, NEW_CARDS } from './types';

export const createCard = (cardData) => dispatch => {
    console.log(this.props);
    // thunk allows us to call dispatch directly so we can make async requests
    
    //TODO: Rather than hard-coding the data, we'll want to grab it directly from the file uploads
    cardData = {
        "results": [
            {
                "metadata": ["P:Lesson 1"],
                "langData": [
                    {
                        "id": "english",
                        "value": "Excuse Me"
                    }, {
                        "id": "romaji",
                        "value": "Sumimasen"
                    }, {
                        "id": "hiragana",
                        "value": "すみません"
                    }
                ]
            }
        ]
    }

    let cardDataJSON = JSON.stringify(cardData);

    dispatch({
        type: NEW_CARDS,
        payload: cardDataJSON
    })
};