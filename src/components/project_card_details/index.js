import React, { useState, useEffect } from "react";
import '../project_card_details/style.css';
import {
  Col,
  Row,
  Card,
  Button,
  Image,
  CardColumns
} from 'react-bootstrap';

const PCD = () => {
  const [hasError, setErrors] = useState(false);
  const [git, setGit] = useState([]);

  async function fetchData() {
    const res = await fetch("https://api.github.com/users/motasimfoad/repos");
    res
      .json()
      .then(res => setGit(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });
  
  

  return (
    <Row >
     <CardColumns className="card_container">
     {git.map(item => (
            <Card key = {item.id}>
            <Card.Body>
            <Row>
            <Col xs={3} className="project_card_left">
            <Image className="project_card_left_img" src="https://image.flaticon.com/icons/svg/25/25231.svg" roundedCircle />
            </Col>
            <Col xs={9} className="project_card_right">
              <Card.Text>
                Name: {item.name} < br />
                Location: {item.full_name} < br />
                Created: {item.created_at} < br />
                Updated: {item.updated_at} < br />
                
                < br />
                  <Button variant="dark" className="project_card_btn">SSH</Button>
                  <Button variant="dark" className="project_card_btn">HTTPS</Button>
                  <Button variant="dark" className="project_card_btn"> <a href={item.svn_url} target="_blank" rel="noopener noreferrer">View</a></Button>
                
              </Card.Text>
            </Col>
            </Row>
            </Card.Body>
            </Card>
          ))

        }
     </CardColumns>
    </Row>

     

  );
};
export default PCD;
