
import React, { Component } from 'react';


export default class Searchbar extends Component {

    constructor (props) {
    
        super(props);

        this.state = {

            city: null,
            country: null
            
        }
        
        this.CityInput = this.CityInput.bind(this);
        this.CountryInput = this.CountryInput.bind(this);

        const AppKey = props.key;
        console.log(AppKey);
     
        //   const wURL = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&mode=json&appid=${AppKey}`;
    }

    /*
    componentDidMount () {
        this.setState ({city: 'seoul', country: 'kr'})
    }
    */

    render () {

        return (

            <form onSubmit = {this.DeliverData} >

                <div className = 'searchbar'>
                    <input type = 'text' value = {this.state.city} onChange = {(event) => this.CityInput(event.target.value)}/>
                    <input type = 'text' value = {this.state.country} onChange = {(event) => this.CountryInput(event.target.value)}/>
                    <input type = 'submit' value = 'SUBMIT' />
                </div>

            </form>
        );

    }

    CityInput (city) {

        this.setState ({ city });
    }

    CountryInput (country) {

        this.setState ({ country });

    }
/*
    DeliverData () {
      //  const wURL = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&mode=json&appid=${AppKey}`;
    }
*/
}
