import React, {Component} from 'react';
import {connect} from 'react-redux';
import ControlPanel from './ControlPanel';
import Day from './Day';

class Main extends Component {
    constructor(props){
        super(props);
        //this.state = {};
    }
    render() {
        return (
            <main className="main">
                <ControlPanel></ControlPanel>
                <Day></Day>
            </main>
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
)(Main);
