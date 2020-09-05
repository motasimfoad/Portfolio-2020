import React from 'react';
import '../email_form/style.css';
import * as emailjs from 'emailjs-com';
import { Button, Form, FormGroup, Modal, Image } from 'react-bootstrap';
import ClipLoader from 'react-spinners/BarLoader';

class Email_Form extends React.Component {

  constructor(props, context) {
		super(props, context);
    this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
      loading: false,
		};
	}

	handleClose() {
    this.setState({ show: false });
    this.setState({ name: '' });
    this.resetForm();
	}

	handleShow() {
		this.setState({ show: true, loading: false });
	}

  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    show: false,
  }
  
  handleSubmit(e) {
    e.preventDefault(); 
    this.setState({ loading: true });   
    
    const {email, subject, message } = this.state    
    
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
        this.handleShow();
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });     
    }
    
    resetForm() {
    this.setState({
      email: '',
      subject: '',
      message: '',
      modal: false,
    })
  }
  
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
  
  render() {
    return (
  
          <Form onSubmit={this.handleSubmit.bind(this)} className="Contact-form">
            <p className="contact-form-header">Contact Form</p>
             <FormGroup controlId="formBasicEmail" className="contact_input">
              <Form.Control as="textarea" rows="1"
                type="email"
                name="email"
                value={this.state.email}
                className="contact_input_text"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Email Address"
                required
              />
            </FormGroup>
            <FormGroup controlId="formBasicName" className="contact_input">
              <Form.Control as="textarea" rows="1"
                type="text"
                name="name"
                value={this.state.name}
                className="contact_input"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Your Name"
                className="contact_input_text"
                required
              />
            </FormGroup>
            <FormGroup controlId="formBasicSubject" className="contact_input">
             <Form.Control as="textarea" rows="1"
                type="text"
                name="subject"
                value={this.state.subject}
                className="contact_input"
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
                className="contact_input_text"
                required
              />
            </FormGroup>
            <FormGroup controlId="formBasicMessage" className="contact_input">
              <Form.Control as="textarea" rows="6" name="message" placeholder="Your text" onChange={this.handleChange.bind(this, 'message')} className="contact_input_text" required/>
            </FormGroup>
           
           <Button className="contact-email-text-btn" variant="outline-light" size="lg" type="submit">
              Submit
              <ClipLoader
                size={5} // or 150px
                color={"#ffffff"}
                loading={this.state.loading}
              />
            </Button>
            
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                show={this.state.show} onHide={this.handleClose}
                centered
              >
              <Modal.Body className="contact_success_modal_body">
                <Image className="contact_success_modal_img" src="https://icon-library.net/images/success-icon/success-icon-5.jpg" />
                <h5>Thank you <span><strong>{this.state.name}</strong>!!</span> 😇</h5>
                <h6>Your message was successfully recorded</h6>
                < br />
                <Button variant="outline-light" size="lg" onClick={this.handleClose} className="contact-email-text-btn">Close</Button>
              </Modal.Body>
           </Modal>
          </Form>
    )
  }
}

export default Email_Form