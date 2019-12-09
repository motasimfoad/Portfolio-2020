import React from 'react';
import '../contact/style.css';
import {Container, Row, Col} from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';
import HamburgerMenu from '../../components/hamburger_menu';
import ContactLeft from '../../components/contact_left';
import EmailForm from '../../components/email_form';

class Contact extends React.Component {

  render() {
    return (
      <Animate to="1" from="0" attributeName="opacity">
        <Container className="Contact-header" fluid={true}>
          <Row>
          <HamburgerMenu />
          </Row>
          <Row className="Contact-main">
          <Col  xl={6}  className="Contact-left">
           <ContactLeft />
          </Col>
          <Col  xl={6}  className="Contact-right">
            <EmailForm />
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