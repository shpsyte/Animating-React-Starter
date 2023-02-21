

import React from 'react'
import { animated, useSprings } from 'react-spring/web'

const items = [0.5,0.3,0.2,0.7,0.9,1]

export default function Boxes() {

  const springs = useSprings(items.length, items.map(item => ({
    from: { opacity: 0,  },
    to: { opacity: item },
    
  })))

  return (
    <div className='boxes-grid'>
      {springs.map((animation, i) => {
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
