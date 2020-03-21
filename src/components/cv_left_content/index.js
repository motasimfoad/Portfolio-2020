import React from 'react';
import '../cv_left_content/style.css';
import ReactTypingEffect from 'react-typing-effect';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';

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
    
      <Slide left> 
        <Bounce>
          <div className="clc_main">
          <div className="clc_container">
          <h1 className="clc_header"><u>About</u></h1>
              <h3 className="clc_sub_header">
              <ReactTypingEffect
                text={["🚧 ACCIDENTAL 🚧 💣 💣 💣 ","Product Manager with Software Engineering base !! 🇧🇩"]} //text=["Hello.", "World!"]
                className="clc_sub_header"
                speed="100"
                eraseDelay="5000"
                />
              </h3>
              <ColoredLine color="#FFC466" />
              <p className="clc_paragraph">
              Experienced Project & Product Manager with a demonstrated history of working in the computer software industry. 
              Skilled in leading-edge project management, web & software development tools & trends. 
              Strong computer engineering base with a BSc in Computer Science focused in Computer Software Engineering from BRAC University.
              </p>
          </div>
          </div>
        </Bounce>
      </Slide>
   
    
   
  );
}

export default CLC;
