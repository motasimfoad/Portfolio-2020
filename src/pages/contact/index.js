import React from 'react';
import '../contact/style.css';
import {Container, Row, Col} from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';
import HamburgerMenu from '../../components/hamburger_menu';
import ContactLeft from '../../components/contact_left';
import EmailForm from '../../components/email_form';
import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';

class Contact extends React.Component {

  componentDidMount() {
    ReactGa.initialize("UA-154721739-1");
    ReactGa.pageview('Contact Screen');
  }

  render() {
    return (
      <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Contact | Motasim Foad</title>
                <link rel="canonical" href="http://motasimfoad.com/contact" />
                <meta name="description" content="Motasim Foad | Contact - Product Manager | Project Manager | Software Engineer" />
        </Helmet>
        <Animate to="1" from="0" attributeName="opacity">
          <Container className="Contact-header" fluid={true}>
            <Row className="Hamburger-menu">
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
      </div>
    )
  }
}export default Contact