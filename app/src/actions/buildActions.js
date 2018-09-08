import { BUILD_CARD,
UPDATE_FILE_NAME,
UPDATE_FORM_ELEMENT_DATA } from './types';

export const buildCard = (cardData) => dispatch => {
    dispatch({
        type: BUILD_CARD,
        payload: cardData
    });
};
export const updateFileName = (fileName) => dispatch => {
    dispatch({
        type: UPDATE_FILE_NAME,
        payload: fileName
    });
};
export const updateFormElementData = (formElementData) => dispatch => {
    dispatch({
        type: UPDATE_FORM_ELEMENT_DATA,
        payload: formElementData
    });
};
