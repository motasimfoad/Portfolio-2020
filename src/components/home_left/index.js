import React from "react";
import "../home_left/style.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";
import { Link } from "react-router-dom";

function Home_Left() {
  return (
    <Container className="home-left">
      <Row className="home-left-main">
        <Col xl={12} className="home-left-main-col">
          <h1 className="first-line">방가워요.</h1>
          <h2 className="second_line">
            응애개발자 <strong>임창범입니다!</strong>
          </h2>
          <h3>
            <ReactTypingEffect
              text="UNITY 엔진으로 개발을 합니다. || 게임회사 취직을 목표로 하고있어요! " //text=["Hello.", "World!"]
              className="typical"
              speed="100"
              eraseDelay="500000"
            />
          </h3>
          <br />
          <Button
            variant="outline-light"
            size="lg"
            className="home-left-aboutmme-btn"
          >
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
              className="home-left-aboutme"
            >
              나의 주력 언어
            </Link>
          </Button>{" "}
          &nbsp;
          <Button
            variant="outline-light"
            size="lg"
            className="home-left-aboutmme-btn"
          >
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://www.instagram.com/6ix_twlv/"
              target="_blank"
              className="home-left-aboutme"
            >
              My Wish
            </a>
          </Button>{" "}
          &nbsp;
          <Button
            variant="outline-light"
            size="lg"
            className="home-left-aboutmme-btn"
          >
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/contact"
              className="home-left-aboutme"
            >
              나의 취미
            </Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home_Left;
