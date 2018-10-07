import { combineReducers } from 'redux';
import cardReducer from './cardReducer';
import buildReducer from './buildReducer';

export default combineReducers({
    cards: cardReducer,
    build: buildReducer
})