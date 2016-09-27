import React from "react";
import { connect } from "react-redux";
import { fetchBooking } from "../actions/bookingActions";

// @connect((store) => {
//   return {
//     booking: store.booking.booking,
//     bookingFetched: store.booking.fetched,
//   };
// })

export default class Reservations extends React.Component {

  render() {

    return <div>
    <h2>The Reservations component.</h2>
    <div dangerouslySetInnerHTML={{__html: '<iframe src="https://app.acuityscheduling.com/schedule.php?owner=12764859" width="100%" height="1000" frameBorder="0"></iframe>'}} />
        </div>
  }
}
