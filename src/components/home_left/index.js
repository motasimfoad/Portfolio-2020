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
        "value": 300,
        "density": {
            "enable": false
        }
    },
    "size": {
        "value": 2,
        "random": false,
        "anim": {
            "speed": 2,
            "size_min": 0.3
        }
    },
    "line_linked": {
        "enable": false
    },
    "move": {
        "random": false,
        "speed": 1,
        "direction": "top",
        "out_mode": "in"
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
       <Col xl={12} className="home-left-main-col">
         <h1 className="first-line">
           Hi There! 🙋‍♂️
         </h1>
         <h2 className="second-line">
           I am Motasim Foad
         </h2>
         <Typical
        steps={['Product Manager', 1000, 'Project Manager', 500]}
        loop={1}
        wrapper="p"
      />
       </Col>
     </Row>
     {/* <Particles
        params={particles}
      className="particle"
      /> */}
      <Particles
    params={{
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
	}} className="particle"/>
   </Container>
  );
}

export default Home_Left;
