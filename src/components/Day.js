import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../css/Day.css';

class Day extends Component {
    constructor(props) {
        super(props);
        //this.state = {};
    }

    render() {
        return (<div className="timetable">
            {this.props.appStore.workHours.map((item, index, arr) => {
                return (
                    <div key={item} className="background_hour">
                        {item + ".00"}
                        <div className="half_an_hour">{item + ".30"}</div>
                    </div>);
            })}
            {this.props.appStore.tasks.map((item, index, arr) => {
                let topVar = 2 * item.start + 'px';
                let heightVar = 2 * item.duration + 'px';
                let classVar = '';
                if (index !== (arr.length - 1)) {
                    if ((item.start + item.duration) > arr[index + 1].start) {
                        classVar = "right_task";
                    }
                }
                if (index !== 0) {
                    if ((arr[index - 1].start + arr[index - 1].duration) > item.start) {
                        classVar = "left_task";
                    }
                }
                return <div key={item.start} className={"task" + " " + classVar}
                            style={{top: topVar, height: heightVar}}>{item.title}</div>;
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