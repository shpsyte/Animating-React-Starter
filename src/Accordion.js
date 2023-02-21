import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring/web'
import useMeasure from './useMeasure'
export default function Accordion() {
  const [on, toggle] = useState(false)
  // const [on2, toggle2] = useState(false)
  const [bind, { height, top }] = useMeasure()
  // const [bind2, { height: height2, top: top2 }] = useMeasure()


  const animation = useSpring({
    overflow: 'hidden',
    height: on ? height + ( top * 2) : 0,
  })

  // const animation2 = useSpring({
  //   overflow: 'hidden',
  //   height: on2 ? height2 + ( top2 * 2) : 0,
  // })


  return (
    <div>
        <h1> <button  onClick={() => {
          toggle(!on)
          // toggle2(false)
          }}>Toggle</button></h1>
        <animated.div  style={animation}  >
            <div  {...bind} className='accordion'  >
              <p>Hello, im in the accordion</p>
           </div>
          
        </animated.div>
        {/* <h1> <button  onClick={() => {
          toggle2(!on2)
          toggle(false)
          }}>Toggle2</button></h1>
        <animated.div  style={animation2}  >
            <div  {...bind2} className='accordion'  >
              <p>Hello, im in the accordion 2</p>
           </div>
          
        </animated.div> */}

    </div>
  )
}
