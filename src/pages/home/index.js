import React from 'react';
import '../home/style.css';
import HomeLeft from '../../components/home_left';
import HomeRight from '../../components/home_right';
import Footer from '../../components/footer';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Animate from 'react-smooth';

function Home() {
  return (
      <Animate to="1" from="0" attributeName="opacity">
        <Container className="App-header" fluid={true}>
          <Row className="App-main">
          <Col  xl={7}  className="App-left">
            <HomeLeft />
          </Col>
          <Col  xl={5} className="App-right">
            <HomeRight />
          </Col>
          </Row>
          <Row className="App-footer">
            <Footer />
          </Row>
       </Container>
      </Animate>
    );
}

export default Home;
