import React from 'react';
import '../contact/style.css';
import * as emailjs from 'emailjs-com';
import { Button, Form, FormGroup, Container, Row, Col } from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';

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
        <Container className="Contact-header" fluid={true}>
          <Row className="Contact-main">
          <Col  xl={6}  className="Contact-left">
            <Row className="Contact-text">
              <Col xl={12}>
              <p className="p-heading1">Get In Touch</p>
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
             <FormGroup controlId="formBasicEmail">
              
               <input
                type="email"
                name="email"
                value={this.state.email}
                
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Email Address"
              />
            </FormGroup><FormGroup controlId="formBasicName">
              
              <input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Your Name"
              />
            </FormGroup><FormGroup controlId="formBasicSubject">
             
              <input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              />
            </FormGroup><FormGroup controlId="formBasicMessage">
              
              <input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
                placeholder="Your text"
              />
            </FormGroup><Button variant="outline-light" size="lg" type="submit">
              Submit
            </Button>
          </Form>
       
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