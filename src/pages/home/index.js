import React from 'react';
import '../home/style.css';
import HomeLeft from '../../components/home_left';
import HomeRight from '../../components/home_right';


function Home() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="App-main">
        <div className="App-left">
          <HomeLeft />
        </div>
        <div className="App-right">
           <HomeRight />
        </div>
      </div>
      <footer App-footer>
        Hello
      </footer>
      </header>
    </div>
  );
}

export default Home;
