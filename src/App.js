import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSpring, animated, config } from 'react-spring/web';
import Toggle from './Toggle';
import Nav from './Nav';
import Checkout from './Checkout';
import Modal from './Modal';
import useMeasure from './useMeasure'
import Accordion from './Accordion'
// import Routes from './Router';
import Waypoints from './Waypoints';
import Gesture from './Gesture';
import Boxes from './Boxes';
import BoxesChain from './BoxesChain';
const App = () => {
  const [isNavOpen, setNavOpen] = useState(false)
  // const s = useMeasure()
  // console.log(s)

  const navAnimation = useSpring({
    transform: isNavOpen ? `translate3d(0,0,0) ` : `translate3d(-100%,0,0) `,


    // transform: isNavOpen ? `translate3d(0,0,0) ` : `translate3d(-100%,0,0) `,
    

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
         {/* <Routes /> */}
         <Modal />
         <Checkout isOpen={isNavOpen} />  
         <Accordion />
         <Gesture />
         {/* <Waypoints />
          <Boxes /> */}
         
      </main>
    </animated.div>
  );
}

export default App;
