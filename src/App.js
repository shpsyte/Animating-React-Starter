import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSpring, animated } from 'react-spring/web';
import Toggle from './Toggle';
import Nav from './Nav';
import Checkout from './Checkout';
import Routes from './Router';
const App = () => {
  const [isNavOpen, setNavOpen] = useState(false)

  const navAnimation = useSpring({
    transform: isNavOpen ? `translate3d(0,0,0) ` : `translate3d(-100%,0,0) `,

  })

  const fade = useSpring({
    from: { opacity: 0},
    opacity: 1 ,
  })


  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <img src={logo} className="logo" alt='tip' />
        <button className="menu-button" onClick={() => setNavOpen(a => !a)}>Menu</button>
        <Nav style={navAnimation} />
      </header>
      <main>
         <Routes />
         {/* <Checkout isOpen={isNavOpen} /> */}
      </main>
    </animated.div>
  );
}

export default App;
