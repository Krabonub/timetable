import React, {Component} from 'react';
import {connect} from 'react-redux';

class Control_panel extends Component {
    constructor(props){
        super(props);
        //this.state = {};
    }
    render() {
        return (
            <div>
                <form>
                    <label>Action name : <input type="text" /></label>
                    <button>Add</button>
                </form>
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
)(Control_panel);
