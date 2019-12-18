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
      <Row >
        <Col xl={12}>
        CV
        </Col>
      </Row>
    </Container>
  );
}

export default CV;
