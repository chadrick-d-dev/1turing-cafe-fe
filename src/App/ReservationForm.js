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
        <input name='name' type='text' value={this.state.name} onChange={this.handleChange}></input>
        <input name='date' type='text' value={this.state.date} onChange={this.handleChange}></input>
        <input name='time' type='text' value={this.state.time} onChange={this.handleChange}></input>
        <input name='number' type='text' value={this.state.number} onChange={this.handleChange}></input>
        <button onClick={this.submitReservation}>Make Reservation</button>
      </form>
    )
  }
}

export default ReservationForm;
