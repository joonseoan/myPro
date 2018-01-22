import React, { Component } from 'react';


//I need to understand this again.!!!!!!!


class LogPass extends Component {

    constructor (props) {
        super(props);

        this.state = {
            logvalue : '',
            passvalue : ''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState( { logvalue: event.target.logvalue } )
        this.setState( { passvalue: event.target.passvalue } )
    }

    handleSubmit(event) {
        console.log ('all values were submitted: ' + this.state.logvalue + this.state.passvalue);

    }

    render () {

        return (

            <div className = "login-passwd">
            <form onSubmit={this.handleSubmit}>
                <label>
                <div className  = "login">
                    Login ID:  <input type = "text" value = {this.state.logvalue} onChange = {this.handleChange} />
                </div> 
                 
                <div className = "passwd">
                    Password: <input type = "password" value = {this.state.passvalue} onChange = {this.handleChange} />
                </div>
                </label>
                <div>
                    <input type="submit" value="Submit" />
                </div>         
            </form>
            </div>
        );

    }
}

export default LogPass;