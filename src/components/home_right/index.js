import React from 'react';
import '../home_right/style.css';
import Foad from '../../assets/img/foad.jpg';
import Image from 'react-bootstrap/Image'

function Home_Right() {
  return (
    <div className="home-right">
    <div className="home-right-main">
    <Image src={Foad} className="home-right-main-img"/>  
    </div>
    <div className="home-right-footer">
        
    </div>
    </div>
  );
}

export default Home_Right;
