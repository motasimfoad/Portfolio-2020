import React, { useState, useEffect } from "react";
import '../project_card_details/style.css';
import {
  Col,
  Row,
  Card,
  Button,
  Image,
  ButtonGroup
} from 'react-bootstrap';

const PCD = () => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState([]);

  async function fetchData() {
    const res = await fetch("https://api.github.com/users/motasimfoad/repos");
    res
      .json()
      .then(res => setPlanets(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });
  
  

  return (
    <div>
     
        {planets.map(item => (
         
          <Card style={{ width: '22rem' }} key = {item.id}>
            
            <Card.Body>
            <Row>
            <Col xs={4} className="project_card_left">
            <Image className="project_card_left_img" src="https://image.flaticon.com/icons/svg/25/25231.svg" roundedCircle />
            </Col>
            <Col xs={8} className="project_card_right">
              <Card.Text>
                Name : {item.name} < br />
                Git Location : {item.full_name} < br />
                Created at : {item.created_at} < br />
                Last Updated : {item.updated_at} < br />
                
                
                  <Button variant="dark">SSH</Button>
                  <Button variant="dark">HTTPS</Button>
                  <Button variant="dark"> <a href={item.svn_url} target="_blank">View</a></Button>
                
              </Card.Text>
            </Col>
            </Row>
            </Card.Body>
      
            </Card>
        ))

        }
     


 
      
    </div>

     

  );
};
export default PCD;
