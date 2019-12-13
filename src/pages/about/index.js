import React, { Component } from 'react';
import '../about/style.css';
import HamburgerMenu from '../../components/hamburger_menu';
import {Container, Row, Col} from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';
import Gallery from 'react-grid-gallery';
import cv1 from '../../assets/img/cv1.png'
import cv2 from '../../assets/img/cv2.png'
import cv3 from '../../assets/img/cv3.png'
import cv4 from '../../assets/img/cv4.png'

const IMAGES =
[
  {
    src: cv1,
    thumbnail: cv1,
    
    tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
    caption: "Boats (Jeshu John - designerspics.com)"
},
{
  src: cv2,
 },
{
  src: cv3,
},
{
  src: cv4,
 }
]


class About extends Component {
 
  render() {
    return (
      <Animate to="1" from="0" attributeName="opacity">
        <Container className="About-header" fluid={true}>
          <Row className="Hamburger-menu">
          <HamburgerMenu />
          </Row>
          <Row className="About-main">
          <Col  xl={6}  className="About-left">
          HI
          </Col>
          <Col  xl={6}  className="About-right">
           
          <Gallery className="About-gallery" images={IMAGES}/>,
         
          </Col>
          </Row>
          <Row className="About-footer">
            <Footer />
          </Row>
        </Container>
      </Animate>
    );
  }
}

export default About;
