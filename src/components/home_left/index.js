import React from 'react';
import '../home_left/style.css';
import {
  Container,
  Row,
  Col,
 } from 'react-bootstrap';
 import Particles from 'react-particles-js';
 import Typical from 'react-typical';
 
 const particles = {
    "particles": {
        "number": {
            "value": 100
        },
        "size": {
            "value": 5
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
} 

function Home_Left() {
  return (
   <Container className="home-left" >
    <Row className="home-left-main">
       <Col xl={12} className="home-left-main-col">
         <p className="first-line">
           Hello! 🙋‍♂️
         </p>
         <p className="second_line">
           I am <strong>Motasim Foad</strong>
         </p>
         <Typical
                steps={['Product & Project Manager || Software Engineer ...', 1]}
                loop={1}
                wrapper="p"
                className="typical"
            />
       </Col>
     </Row>
     <Particles
        params={particles}
      className="particle"
      />
   </Container>
  );
}

export default Home_Left;
