import React from 'react';
import '../contact/style.css';
import {Container, Row, Col} from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';
import Hamburger_Menu from '../../components/hamburger_menu';
import Contact_Left from '../../components/contact_left';
import Email_Form from '../../components/email_form';

class Contact extends React.Component {

  render() {
    return (
      <Animate to="1" from="0" attributeName="opacity">
        <Container className="Contact-header" fluid={true}>
          <Row className="Contact-main">
            <Hamburger_Menu />
          <Col  xl={6}  className="Contact-left">
           <Contact_Left />
          </Col>
          <Col  xl={6}  className="Contact-right">
            <Email_Form />
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