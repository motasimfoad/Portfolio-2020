import React from 'react';
import '../project_card_details/style.css';
import {
  Col,
  Row,
  Card,
  Button,
  Image,
  ButtonGroup
} from 'react-bootstrap';

function PCD() {
  return (
  
      
      <Card style={{ width: '22rem' }}>
      
      <Card.Body>
      <Row>
      <Col xs={4} className="project_card_left">
      <Image className="project_card_left_img" src="https://image.flaticon.com/icons/svg/25/25231.svg" roundedCircle />
      </Col>
      <Col xs={8} className="project_card_right">
        <Card.Text>
          Name : Repo name < br />
          Git Location : Location < br />
          Created at : Time date < br />
          Last Updated : Time date < br />
          
          <ButtonGroup aria-label="Basic example">
            <Button variant="dark">SSH</Button>
            <Button variant="dark">HTTPS</Button>
            <Button variant="dark">View</Button>
          </ButtonGroup>
        </Card.Text>
      </Col>
      </Row>
      </Card.Body>
     
      </Card> 
     
    
  );
}

export default PCD;
