import React from 'react';
import '../home/style.css';
import HomeLeft from '../../components/home_left';
import HomeRight from '../../components/home_right';
import Footer from '../../components/footer';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap'


function Home() {
  return (
   
      <Container className="App-header" fluid={true}>
        <Row className="App-main">
        <Col  md={7}  className="App-left">
          <HomeLeft />
        </Col>
        <Col  md={5} className="App-right">
          <HomeRight />
        </Col>
        </Row>
        <Row className="App-footer">
          <Footer />
        </Row>
       </Container>
    
  
   
  );
}

export default Home;
