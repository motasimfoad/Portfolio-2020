import React from 'react';
import '../cv_left_content/style.css';
import ReactTypingEffect from 'react-typing-effect';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge, faDiagnoses, faFileAlt, faPortrait, faFolder, faClone } from '@fortawesome/free-solid-svg-icons';
import {  faGithub, faGitAlt, faGitSquare } from '@fortawesome/free-brands-svg-icons';

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 1
      }}
  />
);

function CLC() {
  return (
    
      <Slide left > 
        <Bounce >
          <div className="clc_main">
          <div className="clc_container">
            <Fade top cascade>
            <h1 className="clc_header">About</h1>
            </Fade>
              <ColoredLine color="#FFC466" />
              <Fade top cascade>
              <div className="AboutBtnContainer">
                <div className="left"><FontAwesomeIcon className="fb" icon={faDiagnoses} className="left_icon"/><br/><br/>Awards & Experiences</div>
                <div className="right"><FontAwesomeIcon className="fb" icon={faGitAlt} className="right_icon"/><br/><br/>Projects</div>
              </div>
              {/* <p className="clc_paragraph">
              Experienced Project & Product Manager with a demonstrated history of working in the computer software industry. 
              Skilled in leading-edge project management, web & software development tools & trends. 
              Strong computer engineering base with a BSc in Computer Science focused in Computer Software Engineering from BRAC University.
              </p> */}
              </Fade>
          </div>
          </div>
        </Bounce>
      </Slide>
   
    
   
  );
}

export default CLC;
