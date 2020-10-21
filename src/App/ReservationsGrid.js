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

  formatReservations() {
    return this.state.reservations.map((reservation) => {
      return (
        <>
          <section clasName='reservation-card'>
            <p className='resy-name'>{`${reservation.name}`}</p>
            <br/>
            <p className='resy-date'>{`${reservation.date}`}</p>
            <br/>
            <p className='resy-time'>{`${reservation.time}`}</p>
            </br>
            <p className='resy-count'>Number of guests: {`${reservation.number}`}</p>
            </br>
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
      <div>
        {this.formatReservations()}
      </div>
    )
  }
}

export default ReservationsGrid;
