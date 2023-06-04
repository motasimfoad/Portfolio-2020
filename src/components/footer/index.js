import React from "react";
import "../footer/style.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container className="footer" fluid={true}>
      <Row>
        <Col xl={12}>
          Copyright © 2018-{new Date().getFullYear()}{" "}
          <strong>motasim Foad</strong>, <small>V2.4 </small>/{" "}
          <strong>Made by CHANG BEOM IM</strong>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
