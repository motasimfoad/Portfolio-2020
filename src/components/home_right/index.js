import React from 'react';
import '../home_right/style.css';
import Foad from '../../assets/img/foad.jpg';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGooglePlus, faInstagram,faPinterest, faGithub } from '@fortawesome/free-brands-svg-icons';


function Home_Right() {
  return (
    <div className="home-right">
    <div className="home-right-main">
    <Image src={Foad} className="home-right-main-img"/>  
    </div>
    <div className="home-right-footer">
           
                <a href="https://www.facebook.com/okrittim" className="fb">
                <FontAwesomeIcon icon={faFacebook} />
                </a>      
             

            
                <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwi-7L3a5JnfAhWMaCsKHUqyAi4QFjAAegQIBBAB&url=https%3A%2F%2Fgithub.com%2Fmotasimfoad&usg=AOvVaw3pU-M9uRkMrYkI34XMFFsO" className="git">
                <FontAwesomeIcon icon={faGithub} />
                </a>      
             

            
                <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwjg2puN5ZnfAhXHdysKHaFBBT0QFjAAegQIChAB&url=https%3A%2F%2Fplus.google.com%2F%2Bmotasimfoadcharchill&usg=AOvVaw1NDECZJhuidt-B9U0Df04e" className="gplus">
                <FontAwesomeIcon icon={faGooglePlus} />
                </a>                
              

            
              <a href="https://www.instagram.com/motasimfoad/" className="insta">
              <FontAwesomeIcon icon={faInstagram} />
              </a>      
            

           
              <a href="https://www.pinterest.com/motasimf/" className="pin">
              <FontAwesomeIcon icon={faPinterest} />
              </a>      
            
    </div>
    </div>
  );
}

export default Home_Right;
