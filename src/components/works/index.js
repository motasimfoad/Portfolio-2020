import React from 'react';
import '../works/style.css';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

function Works() {
  return (
    <Container className="footer" fluid={true}>
      <Row >
        <Col xl={12}>
        Copyright © 2018-{(new Date().getFullYear())} <strong>Motasim Foad</strong>,  <small>V2.0</small>
        </Col>
      </Row>
    </Container>
  );
}

export default Works;
