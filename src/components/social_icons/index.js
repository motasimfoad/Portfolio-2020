import React from "react";
import "../social_icons/style.css";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";

function SocialIcons() {
  return (
    <Col xl={12} className="social-icons">
      &nbsp; &nbsp; &nbsp; &nbsp;
      <a
        href="https://www.facebook.com/ckdqja5815"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="fb" icon={faFacebook} />
      </a>
      <a
        href="https://github.com/BlackMagicianZero"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="git" icon={faGithub} />
      </a>
    </Col>
  );
}

export default SocialIcons;
