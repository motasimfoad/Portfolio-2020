import React, { Component } from 'react';
import '../about/style.css';
import HamburgerMenu from '../../components/hamburger_menu';
import {Container, Row, Col} from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';
import PDFViewer from 'pdf-viewer-reactjs';
import PDF from '../../assets/pdf/mf.pdf';
import ClipLoader from 'react-spinners/BounceLoader';

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
            <div >
            <PDFViewer
             css="About-pdf"
             canvasCss="canvasCss"
              document={{
                  url: PDF,
              }}
              loader={
                <ClipLoader
                size={150} // or 150px
                color={"#ffffff"}
                loading={true}
              />
            }
            scale={0.8}
            navbarOnTop
          />
          Hi
            </div>
         
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
