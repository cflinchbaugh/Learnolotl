import { FETCH_CARDS, NEW_CARDS } from './types';

export const createCard = (cardData) => dispatch => {
    dispatch({
        type: NEW_CARDS,
        payload: cardData
    })
};