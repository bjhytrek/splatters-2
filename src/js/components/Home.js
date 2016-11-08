import React from "react";
import { connect } from "react-redux";
import { Carousel, PageHeader, Modal, Button, Col, Row } from 'react-bootstrap';
import { fetchContent, fetchTestimonials } from "../actions/adminActions";

@connect((store) => {
  return {
    testimonials: store.content.testimonials,
    content: store.content.content,
  };
})
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
    this.props.dispatch(fetchTestimonials());
  }

  render() {

    const { content, testimonials } = this.props;
    const mappedTests = Object.keys(testimonials).map((key)=>{
      if(testimonials[key].approved === true){
        return <Col key={key} xs={12} md={4} className="card" bsSize="large">"{testimonials[key].testimonial}"<div className="testimonial--name">{testimonials[key].name}</div></Col>;
    }else{
      return null;
    }})
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


      <Row>
      {mappedTests}
      </Row>
      </div>
  }
}
