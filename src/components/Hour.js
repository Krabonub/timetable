import React, {Component} from 'react';

class Hour extends Component{
    constructor(props){
        super(props);
        this.state = {
            time:props.time
        };
    }
    render(){
        return(<div>
            <h1>Hour {this.state.time}</h1>
        </div>);
    }
}
export default Hour;