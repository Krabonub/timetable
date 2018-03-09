import React, {Component} from 'react';
import {connect} from 'react-redux';

class ControlPanel extends Component {
    constructor(props) {
        super(props);
        //this.state = {};
    }

    AddTrack() {
        this.props.onAddTrack(
            {
                start: 200,
                duration: 200,
                text: "penis"
            }
        );
    }

    render() {
        return (
            <div>
                <form>
                    <label>Action name : <input type="text"/></label>
                    <button onClick={this.AddTrack.bind(this)}>Add</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        appStore: state
    };
}

export default connect(
    mapStateToProps,
    dispatch => ({
        onAddTrack: (eventObj) => {
            dispatch({
                type: "ADD_EVENT",
                payload: eventObj
            })
        }
    })
)(ControlPanel);
