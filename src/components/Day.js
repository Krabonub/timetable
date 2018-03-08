import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../css/Day.css';

class Day extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<div className="timetable">
            {this.props.appStore.workHours.map((item, index, arr) => {
                return <div className="background_hour">{item}</div>;
            })}
            {this.props.appStore.tasks.map((item, index, arr) => {
                let topVar = 2 * item.start + 'px';
                let heightVar = 2 * item.duration + 'px';
                /*if(){

                }else{

                }*/
                let widthVar = 200 + "px";
                let leftVar = 50 +"px";
                return <div className="task"
                            style={{top: topVar, height: heightVar, width: widthVar, left: leftVar}}>{item.title}</div>;
            })}
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        appStore: state
    };
}

export default connect(
    mapStateToProps,
    dispatch => ({})
)(Day);