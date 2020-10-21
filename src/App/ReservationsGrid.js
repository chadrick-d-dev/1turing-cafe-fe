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

  render() {
    return (

    )
  }
}
