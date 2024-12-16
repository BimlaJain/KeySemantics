import React from 'react'
import { LOTTIE_LIST } from '../utils/helper'
import CommonHeading from '../common/CommonHeading'
import Lottie from 'react-lottie-player'

const KeySementicWork = () => {
    return (
        <div className='pt-24 max-sm:pt-12'>
            <div className="container">
                <CommonHeading heading="How does KeySemantics work?"/>
                <div className="flex justify-between max-lg:flex-wrap max-lg:justify-center max-lg:gap-10 pt-14">
                    {LOTTIE_LIST.map((item, index) => (
                        <div key={index}>
                            <Lottie className='w-[278px] h-[190px]'
                                loop
                                animationData={item.lottietext}
                                play
                            />
                            <p className='text-darkblue max-w-[298px] mx-auto text-center pt-6 text-base leading-custom-xl'>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default KeySementicWork