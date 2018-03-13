import React, {Component} from 'react';
import {connect} from 'react-redux';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        //this.state = {};
    }

    render() {
        return (
            <form className="login-form">
                <label htmlFor="email">e-mail</label>
                <input type="email" id="email"/>
                <label htmlFor="password">password</label>
                <input type="password" id="password"/>
                <button type="button">LogIn</button>
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
