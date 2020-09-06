import React, { Component } from 'react';
import '../projects/style.css';
import {Container, Row} from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';
import {Helmet} from 'react-helmet';
import HamburgerMenu from '../../components/hamburger_menu';
import particles from '../../const/project_particle.js';
import Particles from 'react-particles-js';
import ProjectBody from '../../components/project_main';

class Projects extends Component {
 
  render() {
    return (
        <Container className="About-header" fluid={true}>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Project | Motasim Foad</title>
                <link rel="canonical" href="http://motasimfoad.com/project"/>
                <meta name="description" content="Motasim Foad | Project - Product Manager | Project Manager | Software Engineer
                Experienced Project & Product Manager with a demonstrated history of working in computer software industry. 
                Skilled in leading edge project management, web & software development tools & trends. 
                Strong computer engineering base with a BSc in Computer Science focused in Computer Software Engineering from BRAC University. 
                In addition to that minor on Basic Business studies to assist me through product & project management" />
          </Helmet>
           <Animate to="1" from="0" attributeName="opacity">
           <Particles
            params={particles}
            className="particle"
          />
           <Row className="About-main">
              <HamburgerMenu />
              <ProjectBody />
           </Row>
          <Row className="About-footer">
            <Footer />
          </Row>
           </Animate>
       </Container>
    );
  }
}

export default Projects;
