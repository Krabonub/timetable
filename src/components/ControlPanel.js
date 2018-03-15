import React, {Component} from 'react';
import {connect} from 'react-redux';

class ControlPanel extends Component {
    constructor(props) {
        super(props);
        //this.state = {};
    }

    AddTrack() {
        let startTimeArr = this.eventStartInput.value.split(':');
        startTimeArr[0] = (+startTimeArr[0] - 8) * 60;
        startTimeArr[1] = +startTimeArr[1];
        let startTimeNumber = startTimeArr[0] + startTimeArr[1];
        if (this.eventNameInput.value !== '' && +this.eventDurationInput.value > 10 && startTimeNumber > 0 && ((startTimeNumber + (+this.eventDurationInput.value)) < 540)) {
            this.props.onAddEvent(
                {
                    start: startTimeNumber,
                    duration: +this.eventDurationInput.value,
                    title: this.eventNameInput.value
                }
            );
        }
        else {
            alert("Wrong input!")
        }
        /*
        this.eventNameInput.value = '';
        this.eventStartInput.value = '';
        this.eventDurationInput.value = '';
        */
    }

    render() {
        return (
            <form className="control-panel-form">
                <div className="input-container">
                    <div className="labels">
                        <label htmlFor="event-name">Event name : </label>
                        <label htmlFor="event-start">Start : </label>
                        <label htmlFor="event-duration">Duration : </label>
                    </div>
                    <div className="inputs">
                        <input type="text" id="event-name" ref={(input) => {
                            this.eventNameInput = input;
                        }}/>
                        <input type="time" id="event-start" step="600" min="8:00" max="17:00" ref={(input) => {
                            this.eventStartInput = input;
                        }}/>
                        <input type="number" id="event-duration" step="10" min="10" placeholder="minutes"
                               ref={(input) => {
                                   this.eventDurationInput = input;
                               }}/>
                    </div>
                </div>
                <button type="button" onClick={this.AddTrack.bind(this)}>Add</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        appStore: state.mainReducer
    };
}

export default connect(
    mapStateToProps,
    dispatch => ({
        onAddEvent: (eventObj) => {
            dispatch({
                type: "ADD_EVENT",
                payload: eventObj
            })
        }
    })
)(ControlPanel);
