import React from 'react'
import Lottie from 'react-lottie-player'
import KeySemantic from '../lottie/infography (1).json'
const KeySemantics = () => {
  return (
    <div className='container'>
          <Lottie className='h-[588px]'
              loop
              animationData={KeySemantic}
              play
          />
    </div>
  )
}

export default KeySemantics
