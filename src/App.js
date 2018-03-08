import React, {Component} from 'react';
import Day from './components/Day';
import {connect} from 'react-redux';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
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
