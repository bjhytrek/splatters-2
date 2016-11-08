import React from "react";
import { connect } from "react-redux";
import { fetchContent, updateContent, deleteContent, fetchTestimonials } from "../actions/adminActions";
import { PageHeader, Button, Tabs, Tab } from 'react-bootstrap';

@connect((store) => {
  return {
    testimonials: store.content.testimonials,
    content: store.content.content,
  };
})

export default class Admin extends React.Component {

constructor(props) {
  super(props);
  this.props.dispatch(fetchContent());
  this.props.dispatch(fetchTestimonials());
 }

 render() {

   const { content } = this.props;
   return <div>
   <PageHeader>Admin Console <small>Update Content at will.</small></PageHeader>
   <Tabs defaultActiveKey={1} id="uncontrolled-tabs">
     <Tab eventKey={1} title="Home">
     {content.title}
     </Tab>
     <Tab eventKey={2} title="Pricing">Pricing</Tab>
     <Tab eventKey={3} title="Gallery">Gallery</Tab>
     <Tab eventKey={4} title="Contact Us">Contact Us</Tab>
   </Tabs>
       </div>
 }

 }
