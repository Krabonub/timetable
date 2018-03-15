import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../css/App.css';
import Main from './Main';
import LoginForm from "./LoginForm";
import {Switch, Route, Link} from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
        //this.state = {};
    }

    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/timetable'>Timetable</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path='/login' component={LoginForm}/>
                    <Route exact path='/timetable' component={Main}/>
                </Switch>
            </div>
        );
    }
}

export default App;