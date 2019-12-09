import React, { Component } from 'react';
import '../about/style.css';
import HamburgerMenu from '../../components/hamburger_menu';
import {Container, Row, Col} from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';

class About extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <Animate to="1" from="0" attributeName="opacity">
        <Container className="About-header" fluid={true}>
          <Row className="Hamburger-menu">
          <HamburgerMenu />
          </Row>
          <Row className="About-main">
          <Col  xl={6}  className="About-left">
          HI
          </Col>
          <Col  xl={6}  className="About-right">
            Hi
          </Col>
          </Row>
          <Row className="About-footer">
            <Footer />
          </Row>
        </Container>
      </Animate>
    );
  }
}

export default About;
