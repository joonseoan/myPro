import React, { Component } from 'react';

import ReactDOM from 'react-dom';
  
import LogPass from './components/login';


// **************** In this case, there is no page reload.!!!!!

class App extends Component {
    
    constructor (props) {
        super(props);

        this.state = {date : new Date ()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.setState({date : new Date()}),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval (this.timerID);
    }

       render () {
           return (
               <div>
                   <LogPass />         
                   <h1>Please, Login!!!</h1>
                   <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
               </div>
   
           );
       }
   }
   
   ReactDOM.render (<App />, document.querySelector('.container'));



/*
// Just make sure that class component can be in a function!!!!
function tick () {

class App extends Component {
 // time must be in different component
    render () {
        return (
            <div>
                <LogPass />
                
                <h1>Please, Login!!!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>

        );
    }
}

ReactDOM.render (<App />, document.querySelector('.container'));

}

setInterval (tick, 1000);

*/





/*
// --------------------------------- study from React.js --------------------------------------------
// Findings
//   1) The structure of class component
//       - What is inside render() method : mainly HTML elements
//                                          with Attribute to call "state" or "props"
//   2) Flow of runnning
//       (1) constructor
//       (2) render() method
//       (3) ReactDOM
//       (4) LifeCycle Method : coponentDidMount()
//   3) The role of "this" (refer to the one below)


class Clock extends Component {
    
    constructor (props) {

        super(props);

        this.state = {date : new Date()};
    }

    componentDidMount() {
        // const timerID VS. this.timerID
        //   Please notice difference between "const" and "this".
        //   this" is not for viual data storage
        //   "const" is for both of visible and invisible data.
        // "tick() {}" is not used as an argument of a function.
        //    this.tick() is used to store the object in tick().  
        const timerID = setInterval(() => this.setState ({date : new Date()}), 1000);
        //setState({date : new Date()});
    }
    
    componentWillUnmount () {
        clearInterval (timerID);
    }
    
    
    tick() {
        this.setState({date : new Date()});
    }
    


    render () {

        return (
            <div>
              <h1>Hello, world!</h1>
              <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
          );
    };

    
  }
  
  
    ReactDOM.render(
      <Clock />,
      document.querySelector('.container')
    );


*/



