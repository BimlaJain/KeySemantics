import React from 'react'
import Lottie from 'react-lottie-player'
import KeySemantic from '../lottie/KeySemanticsLottie.json'
import SmallKetSemantic from '../lottie/KeySemanticMobileLottie.json'
const KeySemantics = () => {
  return (
    <div className='key-bg'>
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
      </div>
  )
}

export default KeySemantics
