import React, {Component} from 'react';
import Day from './Day';
import {connect} from 'react-redux';
import Control_panel from './Control_panel'
import '../css/App.css';

class App extends Component {
    constructor(props){
        super(props);
        //this.state = {};
    }
    render() {
        return (
            <div class="app">
                <Control_panel></Control_panel>
                <Day></Day>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        appStore : state
    };
}

export default connect(
    mapStateToProps,
    dispatch =>({})
)(App);
