

import React, { useState} from 'react'
import { animated, useSprings, useTrail } from 'react-spring/web'

const items = [0.5,0.3,0.2,0.7,0.9,1]

export default function Boxes() {
  const [on, toggle] = useState(false)

  const trail = useTrail(items.length, {
    opacity: on ? 0 : 1,
    transform: on ? 'scale(0.3)' : 'scale(1)',
  })
 
  return (
    <div className='boxes-grid'>
      <button onClick={() => toggle(!on)}>Click me</button>
      {trail.map((animation, i) => {
        return <animated.div key={i} style={animation} className='box' />
      })}
      
      
       {/* <animated.div  className="box" />
       <animated.div  className="box" />
       <animated.div  className="box" />
       <animated.div  className="box" />
       <animated.div  className="box" />
       <animated.div  className="box" /> */}


    </div>
  )
}
