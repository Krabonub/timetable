import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
//import { Router, Route, IndexRoute, browserHistory } from 'react-router'


/////////////////////// Redux ///////////////////

//initial store
const initialStore = {
    workHours: ['8', '9', '10', '11', '12', '1', '2', '3', '4', '5'],
    tasks: [
        {start: 0, duration: 15, title: "Exercise"},
        {start: 25, duration: 30, title: "Travel to work"},
        {start: 30, duration: 30, title: "Plan the day"},
        {start: 60, duration: 15, title: "Review yesterday's commits"},
        {start: 100, duration: 15, title: "Code review"},
        {start: 180, duration: 90, title: "Have a lunch with John"},
        {start: 360, duration: 30, title: "Skype call"},
        {start: 370, duration: 45, title: "Follow up with designer"},
        {start: 405, duration: 30, title: "Push up branch"}
    ]
};

//reducer
function reducer(state = initialStore, action) {
    //console.log(action);

    if (action.type === "ADD_EVENT") {
        return {
            ...state,
            tasks:[...state.tasks, action.payload]
        };
    }
    return state;
}

//store
const store = createStore(reducer);

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
        <App/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
