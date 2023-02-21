
import React, { useState } from 'react'

import { animated, useSpring } from 'react-spring/web'
import { useGesture } from 'react-with-gesture'

export default function Gesture() {
  
  const [{ xy }, api] = useSpring(() => ({
    xy: [0, 0],
    
  }))
  
  const bind = useGesture(({ down, delta })  => {
    if (down) {
      const [x, y] = delta
      api({ xy: down ? [x, 0] : [0, 0] })
    } else {
      if (delta[0] > 200) {
        api({ xy: [500, 0] })
      } else {
        api({ xy: [0, 0] })

      }
    }
    
  })
 
  return (
      <animated.div 
          {...bind()} 
          className="box" 
          style={{
            opacity: 
               xy.interpolate({ map: Math.abs, range: [0,400], output: [1,0]}),
                 
            transform: xy.interpolate((x, y) => `translate3d(${x}px, ${y}px, 0)`)
          }} 
      />
  )
}
