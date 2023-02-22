

import React, { useRef, useState} from 'react'
import { animated, useSprings, useTrail,useTransition,  useSpring, useChain } from 'react-spring/web'

const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function BoxesChain() {

  const transitionRef = useRef()

  const [on, toggle] = useState(false)
  
  const springRef = useRef()

  const {size} = useSpring({
    ref: springRef,
    from: { size: '20%' },
    to: { size: on ? '100%' : '20%'}

  })


  const transition = useTransition(on ? items : [], item => item, {
    ref: transitionRef,
    trail: 400 / items.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: {opacity: 1,  transform:  'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
  })


  useChain(on ? [springRef, transitionRef] : [transitionRef, springRef])
 
  return (
    
    <div className='full-height'>
      <animated.div style={{
        width: size, height: size,
      }} className='boxes-grid-two' onClick={() => toggle(!on)}>
      
        {transition.map(({ item, key, props}) => {
          return <animated.div key={key} style={props} className='box-two' />
        })}
      
      
      </animated.div>
    </div>
  )
}
