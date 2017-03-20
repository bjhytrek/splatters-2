import React from "react";
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router';
// @connect((store) => {
//   return {
//     title: 'Splatters',
//   };
// })
export default class Footer extends React.Component {


  render() {

    return <footer>
      <div className="footer--container container">
        <div><h5><img src="./logos/splatters-plain-3.png" alt="Splatters"/></h5></div>
        <div>
            <h5 style={{color:'white'}}>157 N 2nd E Rexburg, ID 83440</h5>
            <h5 style={{color:'white'}}>
              phone: (208)-357-4171
          </h5>
            <h5 style={{color:'white'}}>
              paintball@splatterswarzone.com
          </h5>
      </div>
      </div>
      <div className="copyright">Copyright 2017 Splatters War Zone LLC. All rights reserved.</div>
</footer>
  }
}
