import React from 'react';
import '../contact/style.css';
import * as emailjs from 'emailjs-com';
import { Button, Form, FormGroup, Container, Row, Col } from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';

class Contact extends React.Component {

  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
  
  handleSubmit(e) {
    e.preventDefault()    
    
    const { name, email, subject, message } = this.state    
    
    let templateParams = {
      from_name: email,
      to_name: 'motasimfoad@gmail.com',
      subject: subject,
      message_html: message,
     }
     
     emailjs.send(
      'gmail',
      'template_OErNDyFu',
       templateParams,
      'user_64rGh5RuHtigw7paS8NsX'
     )
     .then((result) => {
      console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });     
        this.resetForm()
    }
    
    resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
  
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
  
  render() {
    return (
      <Animate to="1" from="0" attributeName="opacity">
      <Container className="App-header" fluid={true}>
        <Row className="App-main">
          <Col  xl={7}  className="App-left">
            Hi
          </Col>
          <Col  xl={5} className="App-right">
           Yo
          </Col>
        </Row>
        <Row className="App-footer">
          <Footer />
        </Row>
      </Container>
      </Animate>
        // <div>
        //   <h1 className="p-heading1">Get in Touch</h1>
        //   <Form onSubmit={this.handleSubmit.bind(this)}>
        //     <FormGroup controlId="formBasicEmail">
        //       <Form.Label className="text-muted">Email address</Form.Label>
        //       <input
        //         type="email"
        //         name="email"
        //         value={this.state.email}
        //         className="text-primary"
        //         onChange={this.handleChange.bind(this, 'email')}
        //         placeholder="Enter email"
        //       />
        //     </FormGroup><FormGroup controlId="formBasicName">
        //       <Form.Label className="text-muted">Name</Form.Label>
        //       <input
        //         type="text"
        //         name="name"
        //         value={this.state.name}
        //         className="text-primary"
        //         onChange={this.handleChange.bind(this, 'name')}
        //         placeholder="Name"
        //       />
        //     </FormGroup><FormGroup controlId="formBasicSubject">
        //       <Form.Label className="text-muted">Subject</Form.Label>
        //       <input
        //         type="text"
        //         name="subject"
        //         className="text-primary"
        //         value={this.state.subject}
        //         onChange={this.handleChange.bind(this, 'subject')}
        //         placeholder="Subject"
        //       />
        //     </FormGroup><FormGroup controlId="formBasicMessage">
        //       <Form.Label className="text-muted">Message</Form.Label>
        //       <input
        //         type="textarea"
        //         name="message"
        //         className="text-primary"
        //         value={this.state.message}
        //         onChange={this.handleChange.bind(this, 'message')}
        //       />
        //     </FormGroup><Button variant="primary" type="submit">
        //       Submit
        //     </Button>
        //   </Form>
        // </div>
   
    )
  }
}export default Contact