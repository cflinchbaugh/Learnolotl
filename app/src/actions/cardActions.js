import { FETCH_CARDS, NEW_CARDS, REVEAL_OPTION, UPDATE_FILE_IDS } from './types';

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

export const updateFileIds = (option) => dispatch => {
    dispatch({
        type: UPDATE_FILE_IDS,
        payload: option
    });
}