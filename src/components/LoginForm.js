import React, {Component} from 'react';
import {connect} from 'react-redux';
//import { push } from 'react-router-redux';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        //this.state = {};
    }

    go(path){
        this.props.history.push(path);
    }

    render() {
        return (
            <form className="login-form">
                <label htmlFor="email">e-mail</label>
                <input type="email" id="email"/>
                <label htmlFor="password">password</label>
                <input type="password" id="password"/>
                <button type="button" onClick={this.go.bind(this,"/timetable")}>LogIn</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state
    };
}

export default connect(
    mapStateToProps,
    dispatch => ({})
)(LoginForm);
