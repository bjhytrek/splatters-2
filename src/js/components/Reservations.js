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
  loadJS(){
  return {
    __html: <script type="text/javascript" src=""/>};
}

  render() {

    return <div>
    <h2>The Reservations component.</h2>
    <div dangerouslySetInnerHTML={{__html: <script type='text/javascript' src='//splatters.simplybook.me/iframe/pm_loader_v2.php?width=960&url=//splatters.simplybook.me&theme=bootstrap__square_rainbow__colored_light&layout=bootstrap__square_rainbow&timeline=modern_week&mode=auto&mobile_redirect=0'></script>}} />
        </div>
  }
}
