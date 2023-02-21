import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring/web';

const Checkout = ({ isOpen }) => {

  const { x } = useSpring({
    x: isOpen ? 0 : 100,
    config: {
      ...config.slow
      // duration: 100,
      // tension: 400,
      // friction: 100,
      

    }

  })

  return (
     <div className='checkout' style={{
      pointerEvents: isOpen ? 'all' : 'none'
     }}>
      <animated.div style={{
        transform: x.interpolate(x => `translate3d(${x * -1}%,0,0)`)
      }} 
      className="checkout-left"></animated.div>
      <animated.div style={{
         transform: x.interpolate(x => `translate3d(${x}%,0,0)`)
      }} className="checkout-right"></animated.div>
     </div>
  )
}

export default Checkout