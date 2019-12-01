import React from 'react';
import '../home_right/style.css';
import Foad from '../../assets/img/foad.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGooglePlus, faInstagram,faPinterest, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap'

function Home_Right() {
  return (
    <Container className="home-right">
      <Row className="home-right-main">
        <Col xl={12}>
          <br />
          <Image src={Foad} className="home-right-main-img"/>
        </Col>
      </Row>
      <Row className="home-right-footer">
      <Col xl={12}>2 of 3 (wider)</Col>
      </Row>
    </Container>
  );
}

export default Home_Right;
