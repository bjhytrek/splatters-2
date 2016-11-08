import React from "react";
import { connect } from "react-redux";
import { fetchBooking } from "../actions/bookingActions";

// @connect((store) => {
//   return {
//     booking: store.booking.booking,
//     bookingFetched: store.booking.fetched,
//   };
// })

export default class WaiverForm extends React.Component {

  render() {

    return <div>
    <h2>The Waiver component.</h2>
    <div dangerouslySetInnerHTML={{__html: '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfJELFZyVN-43OASmg9NVhqEakbkTiqT5mWw4fncCAi0d1Xsg/viewform?embedded=true" width="100%" height="1250px" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>'}} />
        </div>
  }
}
