import React from 'react';
import '../home_left/style.css';
import {
  Container,
  Row,
  Col,
  Button
 } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {ToastsContainer, ToastsStore} from 'react-toasts';

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
           <br />
           <Button variant="outline-light" size="lg" onClick={() => ToastsStore.info("Development going on 👨‍💻 We will be back soon.")}><Link to="/about" className="home-left-aboutme">About Me</Link></Button>
           <ToastsContainer store={ToastsStore} timer = '9000' />
         </Col>
     </Row>
   </Container>
  );
}

export default Home_Left;
