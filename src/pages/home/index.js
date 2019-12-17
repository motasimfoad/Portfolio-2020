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
import Particles from 'react-particles-js';
import particles from '../../const/particle.js';
import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';

function Analytics(){
  ReactGa.initialize("UA-154721739-1")
  ReactGa.pageview('Home Screen')
}

function Home() {
  Analytics()
  return (
      <Animate to="1" from="0" attributeName="opacity">
           <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Motasim Foad</title>
                <link rel="canonical" href="http://motasimfoad.com/home" />
                <meta name="description" content="Motasim Foad | Home - Product Manager | Project Manager | Software Engineer" />
           </Helmet>
        <Particles
        params={particles}
        className="particle"
        />
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
