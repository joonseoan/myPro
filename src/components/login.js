import React, { Component } from 'react';


// I need to understand this again.!!!!!!!
// http://www.hackingwithreact.com/read/1/9/handling-events-with-jsx-onclick
// 

export default class LogPass extends Component {

    constructor (props) {
        super(props);

        this.state = {
            logvalue: null,
            passvalue: null
        };
        
        this.handleChange_logvalue = this.handleChange_logvalue.bind(this);
        this.handleChange_passvalue = this.handleChange_passvalue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render () {

        return (

            <div className = "login-passwd">
                <form onSubmit={this.handleSubmit}>
                    <label>
                    <div className  = "login">
                        Login ID:  <input type = "text" value = {this.state.logvalue} onChange = { event => this.handleChange_logvalue(event.target.value)} />
                    </div> 
                    
                    <div className = "passwd">
                        Password: <input type = "password" value = {this.state.passvalue} onChange = {event => this.handleChange_passvalue(event.target.value)} />
                    </div>
                    </label>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>         
                </form>
            </div>
        );

    }

    handleChange_logvalue(logvalue) {
        this.setState( { logvalue } )
        
    }

    handleChange_passvalue(passvalue) {
        this.setState( { passvalue } )
    }

    handleSubmit() {
        // Without "this.method" it is not required to use bind()
        alert ('all values were submitted: ' + this.state.logvalue + '    ' + this.state.passvalue);

    }
}
