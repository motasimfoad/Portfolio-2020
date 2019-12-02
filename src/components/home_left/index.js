import React from 'react';
import '../home_left/style.css';
import {
  Container,
  Row,
  Col,
 } from 'react-bootstrap';
 import Particles from 'react-particles-js';
 import ReactTypingEffect from 'react-typing-effect';
 
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
          <ReactTypingEffect
           text="Product & Project Manager || Software Engineer ... " //text=["Hello.", "World!"]
           className="typical"
           speed="100"
           eraseDelay="500000"
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
