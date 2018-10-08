import { 
    FETCH_CARDS, 
    NEW_CARDS, 
    REVEAL_OPTION,
    UPDATE_FILE_IDS,
    REPLACE_FILE_IDS,
    REPLACE_CARDS,
    UPDATE_MODE,
    UPDATE_MODE_OPTIONS,
    UPDATE_FORMAT,
    UPDATE_LEARN_DATA,
    RESET_LEARN_DEMO
} from './types';

export const createCard = (cardData) => dispatch => {
    dispatch({
        type: NEW_CARDS,
        payload: cardData
    });
};

export const replaceCards = (cardData) => dispatch => {
    dispatch({
        type: REPLACE_CARDS,
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

export const replaceFileIds = (option) => dispatch => {
    dispatch({
        type: REPLACE_FILE_IDS,
        payload: option
    });
}

export const updateMode = (option) => dispatch => {
    dispatch({
        type: UPDATE_MODE,
        payload: option
    });
}

export const updateModeOptions = (option) => dispatch => {
    dispatch({
        type: UPDATE_MODE_OPTIONS,
        payload: option
    });
}
export const updateFormat = (option) => dispatch => {
    dispatch({
        type: UPDATE_FORMAT,
        payload: option
    });
}

export const updateLearnData = (option) => dispatch => {
    dispatch({
        type: UPDATE_LEARN_DATA,
        payload: option
    })
}
export const resetLearnDemo = () => dispatch => {
    dispatch({
        type: RESET_LEARN_DEMO
    })
}