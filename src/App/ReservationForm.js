import React, { Component } from 'react';

class ReservationForm extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      date: "",
      time: "",
      number: ""
    }
  }
  submitReservation = (event) => {
    {/* event.preventDefault();
     if this.state.name */}
    console.log('boop');
  }

  handleChange = (event) => {
    let name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  render() {
    return (
      <form className='reservation-form'>
        <input name='name' type='text' value='Name' onChange={this.handleChange}></input>
        <input name='date' type='text' value='Date' onChange={this.handleChange}></input>
        <input name='time' type='text' value='Time' onChange={this.handleChange}></input>
        <input name='number' type='text' value='Number of guests' onChange={this.handleChange}></input>
        <button onClick={this.submitReservation}>Make Reservation</button>
      </form>
    )
  }
}
