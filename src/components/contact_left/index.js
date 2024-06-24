import React from 'react';
import '../contact_left/style.css';
import {Row, Col} from 'react-bootstrap';
import SocialIcons from '../social_icons';

function Contact_Left() {
  return (
    <div>
           <Row className="Contact-text">
              <Col xl={12}>
              <h1 className="p-heading1">My Hobby</h1>
              <p className="p-heading2">
              당연 <strong>게임을 좋아합니다 !!</strong><br />
              요즘 빠져사는 게임은 <strong>League of Legend</strong>와 <strong>Lost Ark</strong>입니다.
              하나는 AOS의 재미로 빠져있고, 다른 하나는 RPG로써 재미를 느낍니다.
              게임이 좋아서 게임 개발자가 되고싶었고, 현재 목표는 스마일게이트에 입사해서 
              최고의 MMORPG 로스트아크 팀에 들어가는 것입니다.
              </p>
              </Col>
           </Row>
          
            <Row className="contact-left-footer" >
              <SocialIcons />
            </Row>
    </div>
  );
}

export default Contact_Left;
