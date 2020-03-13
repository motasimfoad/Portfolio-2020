import React, { Component } from 'react';
import '../about/style.css';
import {Container, Row} from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';
import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';
import CV from '../../components/cv';
import Works from '../../components/works';
import Projects from '../../components/projects';
import HamburgerMenu from '../../components/hamburger_menu';

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
                <meta name="description" content="Motasim Foad | About - Product Manager | Project Manager | Software Engineer
                Experienced Project & Product Manager with a demonstrated history of working in computer software industry. 
                Skilled in leading edge project management, web & software development tools & trends. 
                Strong computer engineering base with a BSc in Computer Science focused in Computer Software Engineering from BRAC University. 
                In addition to that minor on Basic Business studies to assist me through product & project management" />
        </Helmet>
        <Animate to="1" from="0" attributeName="opacity">
        <Container className="About-header" fluid={true}>
          <Row>
            <HamburgerMenu />
          </Row>
          <Row className="About-main">
            
              <div className="d1">
              <CV />
              </div>
              <div className="d2">
              <Works />
              </div>
              <div className="d3">
              <Projects />
              </div>
              
            
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
