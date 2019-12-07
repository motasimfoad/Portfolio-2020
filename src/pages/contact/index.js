import React from 'react';
import '../contact/style.css';
import * as emailjs from 'emailjs-com';
import { Button, Form, FormGroup, Container, Row, Col, Modal } from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';

class Contact extends React.Component {

  constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false,
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    show: false,
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
      modal: false,
    })
  }
  
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
  
  render() {
    return (
      <Animate to="1" from="0" attributeName="opacity">
        <Container className="Contact-header" fluid={true}>
          <Row className="Contact-main">
          <Col  xl={6}  className="Contact-left">
            <Row className="Contact-text">
              <Col xl={12}>
              <p className="p-heading1">Get'in Touch</p>
              <p className="p-heading2">
              Holla <strong>Visitor!!</strong><br />
              Thank you for bumping in. If you have any queries/idea/project, feel free to <strong>PING</strong> me.
              I am always open for discussion. You can contact me via the Contact Form <strong>OR</strong> simply click on the social
              media icon if you are more comfortable there.
              </p>
              </Col>
            </Row>
          
            <Row className="contact-left-footer" >
              <Col xl={12} className="contact-left-footer-icons">
                <a href="https://fb.com/okrittim" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="contact-left-footer-icons-padding fb" icon={faFacebook} />
                </a>
                <a href="https://github.com/motasimfoad" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="contact-left-footer-icons-padding git" icon={faGithub} />
                </a>
                <a href="https://twitter.com/okrittim" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="contact-left-footer-icons-padding twitter" icon={faTwitter} />
                </a>
                <a href="https://www.instagram.com/motasimfoad/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="contact-left-footer-icons-padding insta" icon={faInstagram} />
                </a>
                <a href="https://dribbble.com/charchill" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="contact-left-footer-icons-padding dribble" icon={faDribbble} />
                </a>
              </Col>
            </Row>
          </Col>

          <Col  xl={6}  className="Contact-right">
            
          <Form onSubmit={this.handleSubmit.bind(this)} className="Contact-form">
          <p className="contact-form-header">Contact Form</p>
             <FormGroup controlId="formBasicEmail">
              
               <input
                type="email"
                name="email"
                value={this.state.email}
                className="contact_input"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Email Address"
                required
              />
            </FormGroup><FormGroup controlId="formBasicName">
              
              <input
                type="text"
                name="name"
                value={this.state.name}
                className="contact_input"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Your Name"
                required
              />
            </FormGroup><FormGroup controlId="formBasicSubject">
             
              <input
                type="text"
                name="subject"
                value={this.state.subject}
                className="contact_input"
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
                required
              />
            </FormGroup><FormGroup controlId="formBasicMessage">
              
              <input
                type="textarea"
                name="message"
                value={this.state.message}
                className="contact_input"
                onChange={this.handleChange.bind(this, 'message')}
                placeholder="Your text"
                required
              />
            </FormGroup>
            <br />
            
            <Button variant="outline-light" size="lg" type="submit" onClick={this.handleShow}>
              Submit
            </Button>
          </Form>
          <Modal
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            show={this.state.show} onHide={this.handleClose}
            centered
          >
            <Modal.Header closeButton>
             
            </Modal.Header>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
            </Col>
          </Row>
          <Row className="Contact-footer">
            <Footer />
          </Row>
        </Container>
       </Animate>
    )
  }
}export default Contact