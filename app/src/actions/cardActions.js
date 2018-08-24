import { FETCH_CARDS, NEW_CARDS, REVEAL_OPTION } from './types';

export const createCard = (cardData) => dispatch => {
    dispatch({
        type: NEW_CARDS,
        payload: cardData
    });
};

export const fetchCard = (idx) => dispatch => {
    dispatch({
        type: FETCH_CARDS,
        payload: idx
    });
};

export const revealOption = (option) => dispatch => {
    dispatch({
        type: REVEAL_OPTION,
        payload: option
    });
}