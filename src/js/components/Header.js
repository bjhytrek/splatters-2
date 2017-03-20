import React from "react";
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router';
// @connect((store) => {
//   return {
//     title: 'Splatters',
//   };
// })
export default class Header extends React.Component {


  render() {

    return <header>
        <Navbar >
            <Navbar.Header>
                <Navbar.Brand>
                    <Link className="hidden-xs" to='/'><img width={300} src="./logos/splatters-no-background.png" alt="Splatters"/></Link>
                    <Link className="visible-xs" to='/'><img width={300} src="./logos/splatters-plain-3.png" alt="Splatters"/></Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <li eventKey={1}><Link to="Pricing">Prices</Link></li>
                    <li><Link to="Gallery">Gallery</Link></li>
                    {/* <li><Link to="Reservations">Reservations</Link></li> */}
                    <li><Link to="ContactUs">Contact Us</Link></li>
                    {/* <li><Link to="WaiverForm">Waiver Forms</Link></li> */}
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    </header>
  }
}
