import React from 'react';
import '../cv/style.css';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import HamburgerMenu from '../hamburger_menu';

function CV() {
  return (
    <Container className="cv_main" fluid={true}>
      <Row>
         <HamburgerMenu />
      </Row>
      <Row className="cv_content">
        <Col xl={6} className="cv_left">
        <h1><u>About</u></h1>
        <h3>
        Accidental Product Manager with Software Engineering base
        </h3>
        <p>
        Experienced Project & Product Manager with a demonstrated history of working in computer software industry. 
        Skilled in leading edge project management, web & software development tools & trends. 
        Strong computer engineering base with a BSc in Computer Science focused in Computer Software Engineering from BRAC University.
        </p>
        </Col>
        <Col xl={6} className="cv_right">
        CV
        </Col>
      </Row>
    </Container>
  );
}

export default CV;
