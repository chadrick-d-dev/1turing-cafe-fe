import React, { Component } from 'react';
import { getReservations } from './apiCalls';

class ReservationsGrid extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }
  async componentDidMount() {
    getReservations()
      .then(reservations => this.setState({reservations:reservations}))
  }

  cancelReservation() {
    console.log('rootbeer')
  }

  formatReservations() {
    return this.state.reservations.map((reservation) => {
      return (
        <>
          <section className='reservation-card'>
            <p className='resy-name'>{`${reservation.name}`}</p>
            <p className='resy-date'>{`${reservation.date}`}</p>
            <p className='resy-time'>{`${reservation.time}`}</p>
            <p className='resy-count'>Number of guests: {`${reservation.number}`}</p>
            <button className="button cancel-button" onClick={this.cancelReservation()}>Cancel</button>
          </section>
        </>
      )
    })
  }

  render() {
    if(!this.state.reservations){
      return 'Loading';
    }
    return (
      <div className='resy-grid'>
        {this.formatReservations()}
      </div>
    )
  }
}

export default ReservationsGrid;
