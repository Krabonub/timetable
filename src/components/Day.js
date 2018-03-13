import React, {Component} from 'react';
import {connect} from 'react-redux';

class Day extends Component {
    constructor(props) {
        super(props);
        //this.state = {};
    }

    deleteEvent(eventIndex) {
        this.props.onDeleteEvent(eventIndex);
    }

    render() {
        return (
            <div className="timetable">
                {this.props.store.workHours.map((item, index, arr) => {
                    return (
                        <div key={item} className="background_hour">
                            {item + ".00"}
                            <div className="half_an_hour">{item + ".30"}</div>
                        </div>);
                })}
                {this.props.store.events.map((item, index, arr) => {
                    let topVar = 2 * item.start + 'px';
                    let heightVar = 2 * item.duration + 'px';
                    let classVar = '';
                    if (index !== (arr.length - 1)) {
                        if ((item.start + item.duration) > arr[index + 1].start) {
                            if (index % 2) {
                                classVar = "right_task";
                            }
                            else {
                                classVar = "left_task";
                            }
                        }
                    }
                    if (index !== 0) {
                        if ((arr[index - 1].start + arr[index - 1].duration) > item.start) {
                            if (index % 2) {
                                classVar = "right_task";
                            }
                            else {
                                classVar = "left_task";
                            }
                        }
                    }
                    return <div key={item.start} className={"task" + " " + classVar}
                                style={{top: topVar, height: heightVar}}
                                onContextMenu={this.deleteEvent.bind(this, index)}>{item.title}</div>;
                })}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        store: state
    };
}

export default connect(
    mapStateToProps,
    dispatch => ({
        onDeleteEvent: (eventIndex) => {
            dispatch({
                type: "DELETE_EVENT",
                payload: eventIndex
            })
        }
    })
)(Day);