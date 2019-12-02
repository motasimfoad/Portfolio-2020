import React from 'react';
import '../home_left/style.css';
import {
  Container,
  Row,
  Col,
 } from 'react-bootstrap';
 import Particles from 'react-particles-js';

 const particles = {
      "particles": {
        "number": {
            "value": 420,
            "density": {
                "enable": true
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "speed": 4,
                "size_min": 0.3
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "random": true,
            "speed": 2,
            "direction": "top",
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "bubble": {
                "distance": 250,
                "duration": 2,
                "size": 0,
                "opacity": 0
            },
            "repulse": {
                "distance": 400,
                "duration": 4
            }
        }
    }
 }

function Home_Left() {
  return (
   <Container className="home-left" >
    
     
   <Row className="home-left-main">
       <Col xl={12}>
         <h1>
           Hi There!
         </h1>
         <h2>
           I am Motasim, ajsdfkasdfkg askdfh asdkfuh asdkfh asdkfhasd fasdf asdkasdf
         </h2>
       </Col>
     </Row>
     <Row className="home-left-footer">
        <Col xl={12}>
            <p>
              <br />
              Footer dfgdsf
            </p>
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
