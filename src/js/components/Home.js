import React from "react";
import { connect } from "react-redux";
import { Carousel, PageHeader, Modal, Button, Col, Row, Table } from 'react-bootstrap';
import Card from './Card.js';
import { fetchContent, fetchTestimonials } from "../actions/adminActions";

@connect((store) => {
  return {
    // testimonials: store.content.testimonials,
    // content: store.content.content,
  };
  this.resized = false;
})

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
    // this.props.dispatch(fetchTestimonials());
  }

    componentDidUpdate(){
         FB.XFBML.parse();
    }
    componentDidMount() {
        console.log(this.container);
        window.addEventListener('resize', this.throttle(this.handleResize, 500));
    }

    throttle = (callback, limit) =>  {
        var wait = false;                  // Initially, we're not waiting
        return function () {               // We return a throttled function
            if (!wait) {                   // If we're not waiting
                callback.call();           // Execute users function
                wait = true;               // Prevent future invocations
                setTimeout(function () {   // After a period of time
                    wait = false;          // And allow future invocations
                }, limit);
            }
        }
    }

    handleResize = (e) => {
        console.log("scrolling.", this.container);
        if (this.container.getBoundingClientRect().width <= 530 && this.resized === false){
            console.log("below 500px");
            FB.XFBML.parse();
            this.resized = true;
        }
    }

    render() {

        const { content, testimonials } = this.props;
        // const mappedTests = Object.keys(testimonials).map((key)=>{
        //     if(testimonials[key].approved === true){
        //     return <Col key={key} xs={12} md={12} className="card" bsSize="large">"{testimonials[key].testimonial}"<div className="testimonial--name">{testimonials[key].name}</div></Col>;
        //     }else{
        //     return null;
        // }})

    return <div ref={(div) =>{ this.container = div}}>
        <Carousel style={{marginTop: "0"}}>
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
        <PageHeader>Splatters War Zone <small>“Splatter your friends”</small></PageHeader>
        <h3>About</h3>
        <p>With a convenient location right in town, and a fresh new look, Splatters War Zone is the place to bring your friends. Company, birthday, and bachelor parties are always a hit, and our group rates help make it cheaper for everyone; the more the merrier!</p>
        <h3>Hours</h3>
        <Table responsive >
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Hours</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Monday - Thursday</td>
                    <td>2pm-9pm</td>
                </tr>
                <tr>
                    <td>Friday</td>
                    <td>2pm-10pm</td>
                </tr>
                <tr>
                    <td>Saturday</td>
                    <td>10am-10pm</td>
                </tr>
            </tbody>
        </Table>
        <Row>
            <Col xs={12} s={6} md={6} bsSize="large">
                <Card title="Facebook">
                    <div class="fb-page" data-href="https://www.facebook.com/SplattersWarzone/" data-tabs="timeline, events, messages" data-width="500" data-height="800" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/SplattersWarzone/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/SplattersWarzone/">Splatters Indoor Paintball Rexburg Idaho</a></blockquote></div>
                </Card>
            </Col>
        </Row>
        {/* <Row>
            <h3>Testimonials</h3>
            {mappedTests}
        </Row> */}
      </div>
  }
}
