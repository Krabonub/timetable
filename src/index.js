import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import './css/index.css';
import App from './components/App';
import reducer from './reducers/combineReducers';

//set off context menu
document.oncontextmenu = function () {
    return false;
};

/////////////////////// Redux ///////////////////

//store
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//subscribe on dispatch
store.subscribe(() => {
    console.log(store.getState());
});

//dispatch
/*
store.dispatch({ type : "ADD_STRING", payload : "Test string to dispatch" });
*/
/////////////////////// /Redux ///////////////////

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
