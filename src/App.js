import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSpring, animated } from 'react-spring/web';
import Toggle from './Toggle';
const App = () => {

  const fade = useSpring({
    from: { opacity: 0},
    opacity: 1 ,
  })


  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <img src={logo} className="logo" alt='tip' />
        <button className="menu-button">Menu</button>
      </header>
      <main>
         <Toggle />
      </main>
    </animated.div>
  );
}

export default App;
