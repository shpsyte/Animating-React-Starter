
import React, { useState } from 'react'

import { animated, useSpring } from 'react-spring/web'
import { useGesture } from 'react-with-gesture'

export default function Gesture() {
  
  const [{ xy }, api] = useSpring(() => ({
    xy: [0, 0],
    
  }))
  
  const bind = useGesture(({ down, delta })  => {
    api({ xy: down ? delta : [0, 0] })
    
  })
 
  return (
      <animated.div 
          {...bind()} 
          className="box" 
          style={{
            transform: xy.interpolate((x, y) => `translate3d(${x}px, ${y}px, 0)`)
          }} 
      />
  )
}
