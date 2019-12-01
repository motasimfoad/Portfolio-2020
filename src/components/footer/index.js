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
         © 2018-2019 Motasim Foad
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
