import React, { Component } from 'react';

class ReservationForm extends Component {
  constructor() {
    super()
    this.state = {
      id: "",
      name: "",
      date: "",
      time: "",
      number: ""
    }
  }
  submitReservation() {
    console.log('boop')
  }
  render() {
    return (
      <form className='reservation-form'>
      <input type='text' value='Name'></input>
      <input type='text' value='Date (mm/dd)'></input>
      <input type='text' value='Time'></input>
      <input type='text' value='Number of guests'></input>
      <button onClick={this.submitReservation()}
      </form>
    )
  }
}
