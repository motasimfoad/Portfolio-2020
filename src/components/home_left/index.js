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
   Link
  } from "react-router-dom";
import {ToastsContainer, ToastsStore} from 'react-toasts';
 
function Home_Left() {
  return (
   <Container className="home-left" >
    <Row className="home-left-main">
       <Col xl={12} className="home-left-main-col">
         <p className="first-line">
           Hello! 
         </p>
         <p className="second_line">
           I am <strong>motasim foad</strong>
         </p>
          <ReactTypingEffect
           text="Product & Project Manager || Software Engineer ... " //text=["Hello.", "World!"]
           className="typical"
           speed="100"
           eraseDelay="500000"
           />
           <br />
           <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link to="/about" style={{ textDecoration: 'none', color: 'white' }} className="home-left-aboutme">About Me</Link></Button> &nbsp;
           {/* <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn" onClick={() => ToastsStore.warning("Under Development")}>About Me</Button> &nbsp; */}
           <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link style={{ textDecoration: 'none', color: 'white' }} to="/contact" className="home-left-aboutme">Contact Me</Link></Button>
           <ToastsContainer store={ToastsStore} timer = '9000' />
         </Col>
     </Row>
   </Container>
  );
}

export default Home_Left;
