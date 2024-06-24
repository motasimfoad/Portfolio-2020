import React from "react";
import "../contact/style.css";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/footer";
import Animate from "react-smooth";
import HamburgerMenu from "../../components/hamburger_menu";
import ContactLeft from "../../components/contact_left";
import EmailForm from "../../components/email_form";
import ReactGa from "react-ga";
import { Helmet } from "react-helmet";
import particles from "../../const/contact_particle.js";
import Particles from "react-particles-js";

class Contact extends React.Component {
  componentDidMount() {
    //--Motasim Foads Portfolio website Google analytics--
    //--Replace with your own key !!
    ReactGa.initialize("UA-154721739-1");
    ReactGa.pageview("motasimfoad.com - Contact Screen");
  }
  //--Motasim Foads Portfolio website Google analytics--

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Hobby</title>
          <link rel="canonical" href="http://motasimfoad.com/contact" />
          <meta
            name="description"
            content="Motasim Foad | Contact - Product Manager | Project Manager | Software Engineer"
          />
        </Helmet>
        <Animate to="1" from="0" attributeName="opacity">
          <Particles params={particles} className="particle" />
          <Container className="Contact-header" fluid={true}>
            <Row className="Hamburger-menu">
              <HamburgerMenu />
            </Row>
            <Row className="Contact-main">
              <Col xl={6} className="Contact-left">
                <ContactLeft />
              </Col>
              <Col xl={6} className="Contact-right">
                <EmailForm />
              </Col>
            </Row>
            <Row className="Contact-footer">
              <Footer />
            </Row>
          </Container>
        </Animate>
      </div>
    );
  }
}
export default Contact;
