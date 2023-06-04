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
                <title>Project | CHANG BEOM IM</title>
                <link rel="canonical" href="http://motasimfoad.com/project"/>
                <meta name="description" content="Motasim Foad | About - Product Manager | Project Manager | Software Engineer
                Planning to build a brand or a product, especially tech products, and looking for someone with demonstrated work 
                history in the computer software industry. I have actively worked with leading-edge product development and project 
                management methodologies incorporating industry standards and beyond tools and trends for the past few years. Making 
                a product roadmap, integrating with SDLC, designing the User Experience & Customer Experience, Business Analysis, 
                Marketing Planning, and Communication with a cup of coffee is my hand; that looks like a typical day for me. If you 
                have a vision, want to make an impact, I am always open to discussion."/>
          </Helmet>
           <Animate to="1" from="0" attributeName="opacity">
           
           <Row className="About-main">
           <Particles
            params={particles}
            className="particle"
          />
              <HamburgerMenu />
              <ProjectBody />
           </Row>
           <br/>
          <Row className="About-footer">
           <Footer />
          </Row>
           </Animate>
       </Container>
    );
  }
}

export default Projects;
