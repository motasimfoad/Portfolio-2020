import React from 'react';
import '../cv/style.css';
import {
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap';
import HamburgerMenu from '../hamburger_menu';
import cv1 from '../../assets/img/cv1.png';
import CLC from '../cv_left_content';


function lala(){
  alert("lalal")
}

function CV() {
  return (
    <Container className="cv_main" fluid={true}>
      <Row>
         <HamburgerMenu />
      </Row>
      <Row className="cv_content">
        <Col xl={6} className="cv_left">
          <CLC />
        </Col>
        <Col xl={6} className="cv_right">
        <Image src={cv1} onClick={lala} style={{height:"80%", width:"70%"}} />
        </Col>
      </Row>
    </Container>
  );
}

export default CV;
