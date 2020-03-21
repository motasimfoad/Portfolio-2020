import React from 'react';
import '../works/style.css';
import {
  Row,
  Card,
  Button,
  CardColumns
} from 'react-bootstrap';
import Data from '../../data/employer_data.json';

function Works() {
  return (
   
    <div className="works_main">
      <Row className="works_content">
        <h1>
            Works
        </h1>
      </Row>
      <Row >
        <CardColumns className="card_container">
        {
                Data.employer.map(function(item, i){
                  return(
                    <Card key={i+1}>
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
                  )
                })
                }
        </CardColumns>
      </Row>
    </div>
   
 
  );
}

export default Works;
