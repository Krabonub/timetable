import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
//import { Router, Route, IndexRoute, browserHistory } from 'react-router'

//set off context menu
document.oncontextmenu = function (){return false};

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
    ],
    sortState:function(){
        this.tasks.sort((a, b) => {
            if (a.start > b.start) return 1;
            if (a.start < b.start) return -1;
        });
    },
    editBusyTime:function(){
        this.busyTime = [];
        for (let i = 0; i < this.tasks.length - 1; i++) {
            if (this.tasks[i].start + this.tasks[i].duration > this.tasks[i + 1].start) {
                let tmpEnd;
                if ((this.tasks[i + 1].start + this.tasks[i + 1].duration) < (this.tasks[i].start + this.tasks[i].duration)) {
                    tmpEnd = this.tasks[i + 1].start + this.tasks[i + 1].duration;
                }
                else {
                    tmpEnd = this.tasks[i].start + this.tasks[i].duration;
                }
                this.busyTime.push({
                    start: this.tasks[i + 1].start,
                    end: tmpEnd
                });
            }
        }
    }
};

//reducer
function reducer(state = initialStore, action) {
    if (action.type === "ADD_EVENT") {
        for (let item of state.busyTime) {
            if (action.payload.start > item.start && action.payload.start < item.end) {
                alert("This time is busy!");
                return state;
            }
            if (action.payload.start + action.payload.duration > item.start && action.payload.start + action.payload.duration < item.end) {
                alert("This time is busy!");
                return state;
            }
            if (action.payload.start < item.start && action.payload.start + action.payload.duration > item.end) {
                alert("This time is busy!");
                return state;
            }
            if (action.payload.start > item.start && action.payload.start + action.payload.duration < item.end) {
                alert("This time is busy!");
                return state;
            }
        }
        for (let item of state.tasks) {
            if (item.start === action.payload.start) {
                alert("You already have event starting at this time!");
                return state;
            }
        }
        let stateObj = {
            ...state,
            tasks: [...state.tasks, {...action.payload}]
        };
        stateObj.sortState.call(stateObj);
        stateObj.editBusyTime.call(stateObj);
        return stateObj;
    }
    else if (action.type === "DELETE_EVENT") {
        let tmpTasks = [...state.tasks];
        tmpTasks.splice(action.payload, 1);

        let stateObj = {
            ...state,
            tasks: tmpTasks
        };
        stateObj.sortState.call(stateObj);
        stateObj.editBusyTime.call(stateObj);
        return stateObj;
    }
    state.sortState.call(state);
    state.editBusyTime.call(state);
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
