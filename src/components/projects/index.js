import React from 'react';
import '../projects/style.css';
import {
  Container,
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap';

function Projects() {
  return (
    <Container className="project_main" fluid={true}>
      <Row >
        <h1>
        projects
        </h1>
      </Row>
      
      
      <Card style={{ width: '20rem' }}>
      <Row>
        <Card.Body>
        <Col className="project_card_left">
        <Button variant="primary">Go somewhere</Button>
        </Col>
        <Col className="project_card_right">
        <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Col>
         
        </Card.Body>
        </Row>
      </Card>
      
      
    </Container>
  );
}

export default Projects;
