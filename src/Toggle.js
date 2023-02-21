

import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring/web'



export default function Toggle() {
  const [isToggled, setToggle] = useState(false)
  const transition = useTransition(isToggled, null, {
     from: { opacity: 0},
     enter: { opacity: 1 },
     leave: { opacity: 0 },
    //  opacity: isToggled ? 1 : 0,
  })
 

  const handleClick = () => {
    setToggle(a => !a)
  }
  return (
    <div>
      {transition.map(({ item, key, props: styles }) =>
        item && (
           <animated.h1 key={key} style={styles}>
              Hello
           </animated.h1>
        )
      )}
      {/* <AnimatedTitle>Hello</AnimatedTitle> */}
      <button onClick={handleClick}>Toggle</button>
    </div>
  )
}

const AnimatedTitle = animated.h1