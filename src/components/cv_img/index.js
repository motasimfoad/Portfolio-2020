import React, { Component } from 'react';
import '../cv_img/style.css';
import {
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap';
import cv1 from '../../assets/img/cv1.png';
import cv2 from '../../assets/img/cv2.png';
import cv3 from '../../assets/img/cv3.png';
import cv4 from '../../assets/img/cv4.png';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 

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
      <div>
        <Image src={cv1} onClick={() => this.setState({ isOpen: true })} style={{height:"80%", width:"70%", padding:"1%", marginTop:"6%"}} />
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
    );
  }
}