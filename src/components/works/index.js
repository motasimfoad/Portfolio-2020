import React from 'react';
import '../works/style.css';
import {
  Row,
  Card,
  Button,
  CardColumns,
  Image
} from 'react-bootstrap';
import Data from '../../data/employer_data.json';
import Fade from 'react-reveal/Fade';

function Works() {
  return (
   
    <div className="works_main">
      <Fade left>
      <Row className="works_content">
        <h1>
            Works
        </h1>
      </Row>
      </Fade>
      
      <Row >
        <CardColumns className="card_container">
        {
                Data.employer.map(function(item, i){
                  return(
                    
                        <Card className="work_card_img_body" key={i+1}>
                          <div className="work_card_img_container">
                          <Image src={item.logo} className="work_card_img"/>
                          </div>
                          
                        {/* <Card.Title>{item.name}</Card.Title>
                          <Card.Text>
                          {item.docs}
                          {item.logo}
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button> */}
                        
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
