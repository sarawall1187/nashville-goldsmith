import React from "react";
import Hero from "../components/Hero";
import Form from "react-bootstrap/form";
import { Button } from "react-bootstrap";

import Axios from "axios";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      disabled: true,
    });

    Axios.post("http://localhost:3001/api/email", this.state)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true,
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          disabled: false,
          emailSent: false,
        });
      });
  };

  render() {
    return (
      <div>
        <Hero title={this.props.title} />
        <Form onSubmit={this.handleSubmit} className="form">
          <Form.Group>
            <Form.Label htmlFor="full-name" className="font-weight-bold yellow">
              Full Name
            </Form.Label>
            <Form.Control
              id="full-name"
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email" className="font-weight-bold yellow">
              Email
            </Form.Label>
            <Form.Control
              id="email"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="message" className="font-weight-bold yellow">
              Message
            </Form.Label>
            <Form.Control
              id="message"
              name="message"
              as="textarea"
              rows="5"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button
            className="d-inline-block"
            variant="primary"
            type="submit"
            disabled={this.state.disabled}
          >
            Send
          </Button>
          {this.state.emailSent === true && (
            <p className="d-inline success-msg">Email Sent</p>
          )}
          {this.state.emailSent === false && (
            <p className="d-inline err-msg">Error - Email Not Sent</p>
          )}
        </Form>
      </div>
    );
  }
}

export default Contact;
