import React from 'react';
import '../projects/style.css';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

function Projects() {
  return (
    <Container className="footer" fluid={true}>
      <Row >
        <Col xl={12}>
        projects
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
