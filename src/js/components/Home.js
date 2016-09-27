import React from "react";
import { connect } from "react-redux";
import { Carousel, PageHeader, Modal, Button } from 'react-bootstrap';

export default class Home extends React.Component {


  render() {

    return <div>
      <Carousel>
        <Carousel.Item>
          <img className="carousel--image" width={1000} height={400} src="./images/NXL.jpg"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel--image" width={1000} height={400} src="./images/NXL2.jpg"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel--image" width={1000} height={400} src="./images/NXL3.jpg"/>
        </Carousel.Item>
      </Carousel>
      <PageHeader>Welcome to Splatters! <small>Indoor Paintball at its Best! Like us on <a href="https://www.facebook.com/Splatters-indoor-Paintball-Rexburg-Idaho-1715109585371258/info?tab=overview">Facebook</a></small></PageHeader>
        </div>
  }
}
