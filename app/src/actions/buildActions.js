import { BUILD_CARD } from './types';

export const buildCard = (cardData) => dispatch => {
    dispatch({
        type: BUILD_CARD,
        payload: cardData
    });
};
