import React from 'react';
import '../home_left/style.css';
import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';

function Home_Left() {
  return (
   <Container className="home-left">
     <Row className="home-left-main">
       <Col xl={12}>
         Hi
       </Col>
     </Row>
     <Row className="home-left-footer">
     <Col xl={12} className="home-left-footer-text">
         <p>
           <br />
           Footer dfgdsf
         </p>
       </Col>
     </Row>
   </Container>
  );
}

export default Home_Left;
