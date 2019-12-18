import React, { Component } from 'react';
import '../cv_img/style.css';
import {
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap';
import cv1 from '../../assets/img/cv1.png';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 

const images = [
  cv1,
  
];

export default class CRI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
    this.lala = this.lala.bind(this);
  }

  lala(){
    // alert("lalal");
    this.setState({ isOpen: true })
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
         <div>
        <Image src={cv1} onClick={this.lala} style={{height:"80%", width:"70%"}} />
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
    );
  }
}