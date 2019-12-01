import React from 'react';
import '../home_right/style.css';
import Foad from '../../assets/img/foad.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';
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
      <Col xl={12} className="home-right-footer-icons">
        <FontAwesomeIcon className="home-right-footer-icons-padding fb" icon={faFacebook} />
        <FontAwesomeIcon className="home-right-footer-icons-padding git" icon={faGithub} />
        <FontAwesomeIcon className="home-right-footer-icons-padding twitter" icon={faTwitter} />
        <FontAwesomeIcon className="home-right-footer-icons-padding insta" icon={faInstagram} />
        <FontAwesomeIcon className="home-right-footer-icons-padding dribble" icon={faDribbble} />
      </Col>
      </Row>
    </Container>
  );
}

export default Home_Right;
