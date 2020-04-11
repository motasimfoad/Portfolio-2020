import React, { Component } from 'react';
import '../cv_left_content/style.css';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiagnoses } from '@fortawesome/free-solid-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import cv1 from '../../assets/img/cv1.png';
import cv2 from '../../assets/img/cv2.png';
import cv3 from '../../assets/img/cv3.png';
import cv4 from '../../assets/img/cv4.png';
import Lightbox from 'react-image-lightbox';

const images = [
  cv1,cv2,cv3,cv4
];

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 1
      }}
  />
);

class CLC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render(){
    const { photoIndex, isOpen } = this.state;
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
                <div className="left"><FontAwesomeIcon onClick={() => this.setState({ isOpen: true })} icon={faDiagnoses} className="left_icon" /><br/><br/>Awards & Experiences</div>
                <div className="right"><FontAwesomeIcon icon={faGitAlt} className="right_icon"/><br/><br/>Projects</div>
              </div>
            </Fade>
          </div>
          {isOpen && (
                <Lightbox
                  mainSrc={images[photoIndex]}
                  nextSrc={images[(photoIndex + 1) % images.length]}
                  prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                  onCloseRequest={() => this.setState({ isOpen: false })}
                  onMovePrevRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + images.length - 1) % images.length,
                    })
                  }
                  onMoveNextRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + 1) % images.length,
                    })
                  }
                />
              )}
          </div>
        </Bounce>
      </Slide>
   );
  }

  
}

export default CLC;
