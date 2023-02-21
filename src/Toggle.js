

import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring/web'



export default function Toggle() {
  const [items, setItem] = useState([{
    letter: "S",
    key: 1
  },{
    letter: "C",
    key: 2
  },{
    letter: "O",
    key: 3
  },{
    letter: "T",
    key: 4
  }])


  const transitions = useTransition(items, todo => todo.key, {
    from: { opacity: 0, height: "0px" },
    enter: { opacity: 1, height: "20px" },
    leave: { opacity: 0, height: "0px" },
    
  });
 

  const handleClick = () => {
    setItem([...items, {letter: "T", key: new Date().getTime()}])
    // setToggle(a => !a)
  }
  return (
    <div>
      {transitions.map(({ item, key, props }) =>
          <animated.h1 style={props} key={key}>
            {item.letter}
          </animated.h1>
      )}
      {/* <AnimatedTitle>Hello</AnimatedTitle> */}
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

const AnimatedTitle = animated.h1



// const transition = useTransition(isToggled, null, {
//   from: { opacity: 0, position: 'absolute' },
//   enter: { opacity: 1 },
//   leave: { opacity: 0 },
//  //  opacity: isToggled ? 1 : 0,
 
// })


// const handleClick = () => {
//  setToggle(a => !a)
// }
// return (
//  <div style={{ position: 'relative'}}>
//    {transition.map(({ item, key, props: styles }) =>
//      item ? (
//         <animated.h1 style={{...styles}}>
//            Hello
//         </animated.h1>
//      ) : (
//        <animated.h1 style={styles}>
//            World
//        </animated.h1>
//      )
//    )}
//    {/* <AnimatedTitle>Hello</AnimatedTitle> */}
//    <button onClick={handleClick}>Toggle</button>
//  </div>
// )