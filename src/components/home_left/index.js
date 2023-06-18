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
          <h1 className="first-line">Welcome</h1>
          <h2 className="second_line">
            Will be <strong>game client programmer</strong>
          </h2>
          <h3>
            <ReactTypingEffect
              text="Studying UNITY || I hope I get a job at a Game Company"
              className="typical"
              speed="100"
              eraseDelay="500000"
            />
          </h3>
          <h4>
            <ReactTypingEffect
              text="My name is 'Chang Beom IM"
              className="typical"
              speed="100"
              eraseDelay="500000"
            />
          </h4>
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
              My Git Intro
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
              My Instagram
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
              Introduce & Contect
            </Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home_Left;
