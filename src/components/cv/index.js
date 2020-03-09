import React from 'react';
import '../cv/style.css';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import CLC from '../cv_left_content';
import CRI from '../cv_img'

function CV() {
  return (
  
      <Row className="cv_content">
        <Col xl={7} className="cv_left">
          <CLC />
        </Col>
        <Col xl={5} className="cv_right">
          <CRI />
        </Col>
      </Row>
    
  );
}

export default CV;
