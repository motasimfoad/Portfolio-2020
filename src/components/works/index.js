import React from 'react';
import '../works/style.css';
import {
  Container,
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap';
import HamburgerMenu from '../hamburger_menu';
import Data from '../../data/employer_data.json'

function Works() {
  return (
    <Container className="works_main" fluid={true}>
    <Row>
       <HamburgerMenu />
    </Row>
    <Row>
       <div>
         hi
       </div>
    </Row>
    <Row className="works_content">
      
    {
       Data.employer.map(function(item, i){
         return(

        <Col xl={4} key={i+1}>
              <Card style={{ width: '18rem' }}>
              
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
