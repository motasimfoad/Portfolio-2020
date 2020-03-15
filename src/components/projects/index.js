import React from 'react';
import '../projects/style.css';
import {
  Container,
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap';
import PCD from '../project_card_details';

function Projects() {
  return (
    <Container className="project_main" fluid={true}>
      <Row >
        <h1>
        Projects
        </h1>
      </Row>
      
      <Row>
        <PCD />
      </Row>
    </Container>
  );
}

export default Projects;
