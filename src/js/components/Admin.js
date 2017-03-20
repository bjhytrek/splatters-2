import React from "react";
import { connect } from "react-redux";
import { fetchContent, fetchAllContent, updateContent, deleteContent, fetchTestimonials } from "../actions/adminActions";
import { PageHeader, Button, Tabs, Tab, Panel, } from 'react-bootstrap';

@connect((store) => {
  return {
    testimonials: store.content.testimonials,
    content: store.content.content,
  };
})

export default class Admin extends React.Component {

constructor(props) {
  super(props);
  this.state = {
      key: 'homepage',
  }
  this.props.dispatch(fetchAllContent());
  // this.props.dispatch(fetchTestimonials());
 }

 handleSelect(key) {
   console.log("handleSelect run", key)
    this.setState({key});
    // this.handleContentChange(key);
  }

  handleContentChange(key){
    // this.props.dispatch(fetchContent(key));
  }

 render() {
    let { content } = this.props;
    let { key } = this.state;
    // let mappedHome = Object.keys(content.homepage).map((d,i)=>{
    //
    // })
   function mapContent(data){
    Object.keys(data).map((i)=>{
      if(typeof data[i] == 'object'){
        mapcontent(data[i]);
      }else{
        return (
          <li key={i}>{data[i]}</li>
        )
      }
   })
 }

 const mappedContent = mapContent(content.testimonials);
   console.log(content.testimonials);
   console.log(mappedContent)

   return <div>
     <h1>Admin Console <small>Update Content at will.</small></h1>
     {/* <ul>{mappedContent}</ul> */}
       </div>
 }

 }
