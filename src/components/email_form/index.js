import React from 'react';
import '../footer/style.css';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

function Footer() {
  return (
    <Container className="footer" fluid={true}>
      <Row >
        <Col xl={12}>
        Copyright © 2018-2019 <strong>Motasim Foad</strong>,  <small>V2.0</small>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
