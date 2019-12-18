import React, { Component } from 'react';
import '../about/style.css';
import HamburgerMenu from '../../components/hamburger_menu';
import {Container, Row} from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fall-animation';
import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';
import CV from '../../components/cv'

class About extends Component {

  componentDidMount() {
    ReactGa.initialize("UA-154721739-1");
    ReactGa.pageview('About Screen');
  }
 
  render() {
    return (
      <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>About | Motasim Foad</title>
                <link rel="canonical" href="http://motasimfoad.com/about" />
                <meta name="description" content="Motasim Foad | About - Product Manager | Project Manager | Software Engineer" />
        </Helmet>
        <Animate to="1" from="0" attributeName="opacity">
       
        <Container className="About-header" fluid={true}>
         
          <Row className="About-main">
          <AwesomeSlider cssModule={AwesomeSliderStyles} className="About-slider">
            <div className="d1">
            <Row>
            {/* <HamburgerMenu /> */}
            <CV />
            </Row>
            </div>
            <div className="d2">2</div>
            <div className="d3">3</div>
          </AwesomeSlider>
          </Row>
          <Row className="About-footer">
            <Footer />
          </Row>
        </Container>
      </Animate>
      </div>
    );
  }
}

export default About;
