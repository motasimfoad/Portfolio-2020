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
       Works
        </Col>
      </Row>
    </Container>
  );
}

export default Works;
