import React from "react";
import { connect } from "react-redux";
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

 const ContactUs = React.createClass({
   getInitialState() {
    return {
      name: {
        value: ''
      },
      email: {
        value: ''
      },
      phone: {
        value: ''
      },
      message: {
        value: ''
      },
    };
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
  },

  render() {

    return <div style={{display: 'flex'}}>
    <section className="contact-section">
      <h3>Quesions, location</h3>
    </section>
    <section className="contact-section">
      <h3>Questions or comments?</h3>
      <form>
      <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button type="submit">
          Send Email
        </Button>
      </form>
    </section>
        </div>
  }
});
export default ContactUs;
