import React from 'react';
import '../contact_left/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';
import {Row, Col} from 'react-bootstrap';

function Contact_Left() {
  return (
    <div>
           <Row className="Contact-text">
              <Col xl={12}>
              <p className="p-heading1">Get'in Touch</p>
              <p className="p-heading2">
              Holla <strong>Visitor!!</strong><br />
              Thank you for bumping in. If you have any queries/idea/project, feel free to <strong>PING</strong> me.
              I am always open for discussion. You can contact me via the Contact Form <strong>OR</strong> simply click on the social
              media icon if you are more comfortable there.
              </p>
              </Col>
           </Row>
          
            <Row className="contact-left-footer" >
              <Col xl={12} className="contact-left-footer-icons">
                <a href="https://fb.com/okrittim" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="contact-left-footer-icons-padding fb" icon={faFacebook} />
                </a>
                <a href="https://github.com/motasimfoad" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="contact-left-footer-icons-padding git" icon={faGithub} />
                </a>
                <a href="https://twitter.com/okrittim" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="contact-left-footer-icons-padding twitter" icon={faTwitter} />
                </a>
                <a href="https://www.instagram.com/motasimfoad/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="contact-left-footer-icons-padding insta" icon={faInstagram} />
                </a>
                <a href="https://dribbble.com/charchill" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="contact-left-footer-icons-padding dribble" icon={faDribbble} />
                </a>
              </Col>
            </Row>
    </div>
  );
}

export default Contact_Left;
