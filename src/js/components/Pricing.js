import React from "react";
import {connect} from "react-redux";
import { PageHeader, Row, Col, Table } from 'react-bootstrap';
import Card from './Card.js';
export default class Pricing extends React.Component {

    render() {

        return <div>
            <PageHeader>Prices</PageHeader>
            <h2>Rental Packages</h2>
            <Row>
                <Col xs={12} s={6} md={6} bsSize="large">
                    <Card title="The “N00b” Rental option" img="./images/rentals600.jpg" price="$15">
                        <ul>
                            <li>Gun</li>
                            <li>Mask</li>
                            <li>100 rounds of paint</li>
                            <li>Unlimited play time</li>
                            <li>Access to both arenas</li>
                            <li>Refs to moderate games and help explain game types</li>
                        </ul>
                    </Card>
                </Col>
                <Col xs={12} s={6} md={6} bsSize="large">
                    <Card img="./images/rentals2600.jpg" title="The “Hit the Ground Running” Rental option" price="$20">
                        <ul>
                            <li>Gun</li>
                            <li>Mask</li>
                            <li>200 rounds of paint</li>
                            <li>Unlimited play time</li>
                            <li>Access to both arenas</li>
                            <li>Refs to moderate games and help explain game types</li>
                        </ul>
                    </Card>
                </Col>
            </Row>

            <h3>Paint Refills</h3>
            <Table responsive >
                <thead>
                    <tr>
                        <th>$</th>
                        <th>Number of Paintballs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="price">$5</td>
                        <td className="amount">100</td>
                    </tr>
                    <tr>
                        <td className="price">$7</td>
                        <td className="amount">200</td>
                    </tr>
                    <tr>
                        <td className="price">$15</td>
                        <td className="amount">500</td>
                    </tr>
                    <tr>
                        <td className="price">$50</td>
                        <td className="amount">2,000</td>
                    </tr>
                </tbody>
            </Table>

            <h2>Field Fees</h2>
                <h5><span className="price">$5</span>Field admission If you have your own gun and mask. (Pay for CO2 and paint separate)</h5>
                <h5><span className="price">$0.33 per ounce</span>CO2 fills</h5>

            <h2>Group Rates</h2>
            <Table responsive >
                <thead>
                    <tr>
                        <th>% Off</th>
                        <th>Number of Players</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="price">10% </td>
                        <td className="amount">15-19</td>
                    </tr>
                    <tr>
                        <td className="price">15%</td>
                        <td className="amount">20+</td>
                    </tr>
                </tbody>
            </Table>
                <h5>COMPANY EVENTS GET SPECIAL PRICING call for details</h5>
            <h2>Party/Presentation Room</h2>
            <h4>A large room with projector and surround sound.</h4>
            <h5 className="price">$25 per hour</h5>
        </div>
    }
}
