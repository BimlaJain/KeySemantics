import React from 'react'
import Lottie from 'react-lottie-player'
import KeySemantic from '../lottie/infography (1).json'
import SmallKetSemantic from '../lottie/mobile.json'
const KeySemantics = () => {
  return (
    <div className='container'>
          <Lottie className='sm:block hidden'
              loop
              animationData={KeySemantic}
              play
      />
      <Lottie className='sm:hidden bloxk'
        loop
        animationData={SmallKetSemantic}
        play
      />
    </div>
  )
}

export default KeySemantics
