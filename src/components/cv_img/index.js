import React, { Component } from 'react';
import '../cv_img/style.css';
import cv1 from '../../assets/img/cv1.png';
import cv2 from '../../assets/img/cv2.png';
import cv3 from '../../assets/img/cv3.png';
import cv4 from '../../assets/img/cv4.png';
import cv from '../../assets/img/cv.png';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 
import Roll from 'react-reveal/Roll';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';

const images = [
  cv1,cv2,cv3,cv4
];

export default class CRI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
     
      <Roll right>
        <Zoom right> 
        <Flip right>
        <div>
          <img src={cv} onClick={() => this.setState({ isOpen: true })} className="cv_img_mouse" alt="Motasim Foad CV preview"/>
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
        </Flip>
        </Zoom>
      </Roll>
     
    );
  }
}