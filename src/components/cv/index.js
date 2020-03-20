import React from 'react';
import '../cv/style.css';
import {
  Col,
  Row
} from 'react-bootstrap';
import CLC from '../cv_left_content';
import CRI from '../cv_img'

function CV() {
  return (
  
      <Row>
        <Col xl={7}>
        < CLC />
        </Col>
        <Col xl={5}>
         < CRI />
        </Col>
      </Row>
    
  );
}

export default CV;
