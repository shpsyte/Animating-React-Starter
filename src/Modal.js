import React, { useState } from 'react'
import { animated, useTransition } from 'react-spring/web'


function Modal({toggle, animations, pointerEvents}) {
  return (
    <div className='modal' style={{ pointerEvents }}>
      <animated.div className='modal-card' style={animations} >
          <button onClick={toggle}>Close</button>
          <h1>Modal</h1>
      </animated.div>
    </div>
  )
}


const ModalWrapper = () => {
  const [on, toggle] = useState(false)
  const transitions = useTransition(on, null, {
    from: { opacity: 0, transform: 'translate3d(0, -40px, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(0, -40px, 0)' },
    config: { duration: 500 },
  })

  const pointerEvents = on ? 'all' : 'none'
  return (
    <div>

      {transitions.map(({ item, key, props: animations }) =>
        item &&  <Modal pointerEvents={pointerEvents} key={key} toggle={() => toggle(false)} animations={animations} /> 
      )}
    
    <button onClick={() => toggle(true)}>Open</button>
    </div>
  )
}

export default ModalWrapper
