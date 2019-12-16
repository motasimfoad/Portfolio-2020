import React, { Component } from 'react';
import '../about/style.css';
import HamburgerMenu from '../../components/hamburger_menu';
import {Container, Row} from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fall-animation';

class About extends Component {
 
  render() {
    return (
      <Animate to="1" from="0" attributeName="opacity">
        {/* <Container className="About-header" fluid={true}>
          <Row className="Hamburger-menu">
          <HamburgerMenu />
          </Row>
          <Row className="About-main"> */}
          <AwesomeSlider fillParent={true} cssModule={AwesomeSliderStyles} className="About-slider">
            <div className="d1">1
            <HamburgerMenu />
            </div>
            <div className="d2">2</div>
            <div className="d3">3</div>
          </AwesomeSlider>
          {/* </Row>
          <Row className="About-footer">
            <Footer />
          </Row>
        </Container> */}
      </Animate>
    );
  }
}

export default About;
