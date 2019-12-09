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
} from 'react-bootstrap';

function Home_Right() {
  return (
    <Container className="home-right">
      <Row className="home-right-main">
        <Col xl={12}>
          <br />
          <Image src={Foad} className="home-right-main-img"/>
        </Col>
        <Row className="home-right-footer" >
          <Col xl={12} className="home-right-footer-icons">
          &nbsp; &nbsp; &nbsp; &nbsp;
          <a href="https://fb.com/okrittim" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="home-right-footer-icons-padding fb" icon={faFacebook} />
          </a>
          <a href="https://github.com/motasimfoad" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="home-right-footer-icons-padding git" icon={faGithub} />
          </a>
          <a href="https://twitter.com/okrittim" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="home-right-footer-icons-padding twitter" icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com/motasimfoad/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="home-right-footer-icons-padding insta" icon={faInstagram} />
          </a>
          <a href="https://dribbble.com/charchill" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="home-right-footer-icons-padding dribble" icon={faDribbble} />
          </a>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Home_Right;
