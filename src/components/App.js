import React, {Component} from 'react';
import {connect} from 'react-redux';
import ControlPanel from './ControlPanel';
import Day from './Day';
import '../css/App.css';

class App extends Component {
    constructor(props){
        super(props);
        //this.state = {};
    }
    render() {
        return (
            <div className="app">
                <ControlPanel></ControlPanel>
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
