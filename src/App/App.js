import React, { Component } from 'react';
import './App.css';
import ReservationsGrid from './ReservationsGrid';
import ReservationForm from './ReservationForm';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ReservationForm/>
        </div>
        <div className='resy-container'>
          <ReservationsGrid/>
        </div>
      </div>
    )
  }
}

export default App;
