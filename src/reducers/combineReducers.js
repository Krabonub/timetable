import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import mainReducer from './mainReducer';

export default combineReducers({
    routing: routerReducer,
    mainReducer
});