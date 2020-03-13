import React from 'react';
import '../works/style.css';
import {
  Container,
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap';

import Data from '../../data/employer_data.json';
import ReactCardFlip from 'react-card-flip';

function Works() {
  return (
   
    <Container className="works_main">
      <Row className="works_content">
       
          <h1>
            Works
          </h1>
        
      </Row>
      <Row >
        {
        Data.employer.map(function(item, i){
          return(
            <Col xl={4} className="works_content_col" key={i+1}>
              <Card style={{ width: '20rem' }} >
                <Card.Img variant="top" src={item.logo} />
                <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                  {item.docs}
                  {item.logo}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              </Col>
          )
        })
        }
      </Row>
    </Container>
   
 
  );
}

export default Works;
