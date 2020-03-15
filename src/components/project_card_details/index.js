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
      <ul>
        {planets.map(item => (
          <li key = {item.id}>{item.name}</li>
        ))

        }
      </ul>
       {/* {
        planets.map(function(item, i){
          return(
            <Col xl={4} className="works_content_col" key={i+1}>
              <Card style={{ width: '20rem' }} >
                <Card.Img variant="top" src={item.name} />
                <Card.Body>
                <Card.Title>{item.id}</Card.Title>
                  <Card.Text>
                  {item.name}
                  {item.name}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              </Col>
          )
        })
        } */}
    </div>

      // <Card style={{ width: '22rem' }}>
            
      // <Card.Body>
      // <Row>
      // <Col xs={4} className="project_card_left">
      // <Image className="project_card_left_img" src="https://image.flaticon.com/icons/svg/25/25231.svg" roundedCircle />
      // </Col>
      // <Col xs={8} className="project_card_right">
      //   <Card.Text>
      //     Name : Repo name < br />
      //     Git Location : Location < br />
      //     Created at : Time date < br />
      //     Last Updated : Time date < br />
          
          
      //       <Button variant="dark">SSH</Button>
      //       <Button variant="dark">HTTPS</Button>
      //       <Button variant="dark">View</Button>
          
      //   </Card.Text>
      // </Col>
      // </Row>
      // </Card.Body>

      // </Card> 

  );
};
export default PCD;
