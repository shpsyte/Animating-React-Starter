

import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'



export default function Toggle() {
  const [isToggled, setToggle] = useState(false)
  const {color, y} = useSpring({
 
    //  opacity: isToggled ? 1 : 0,

    // opacity: isToggled ? 1 : 0,
    // fontSize: isToggled ? '2rem' : '5rem',
    color: isToggled ? 'red' : 'green',
    // transform: isToggled ? 'translate3d(0,0,0)' : 'translate3d(0,-50px,0)',
    y: isToggled ? 0 : -50,
    
  })

  console.log(' Am I rendering')

  const handleClick = () => {
    setToggle(a => !a)
  }
  return (
    <div>
      <AnimatedTitle style={
        {
          transform: y.interpolate(y => `translate3d(0, ${y}px, 0)`),
        // ...fade,
        // transform: `translate3d(0,${fade.y}px,0)`,
          color
        }}>Hello</AnimatedTitle>
      <button onClick={handleClick}>Toggle</button>
    </div>
  )
}

const AnimatedTitle = animated.h1