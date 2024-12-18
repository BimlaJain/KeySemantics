import React from 'react'
import { LOTTIE_LIST } from '../utils/helper'
import CommonHeading from '../common/CommonHeading'
import Lottie from 'react-lottie-player'

const KeySementicWork = () => {
    return (
        <div className='xl:pt-24 pt-12 md:pt-16 lg:pt-20'>
            <div className="container">
                <CommonHeading heading="How does KeySemantics work?"/>
                <div className="flex justify-between max-lg:flex-wrap max-lg:justify-center max-lg:gap-10 lg:pt-14 md:pt-12 pt-8">
                    {LOTTIE_LIST.map((item, index) => (
                        <div key={index}>
                            <Lottie className='w-[278px] h-[190px]'
                                loop
                                animationData={item.lottietext}
                                play
                            />
                            <p className='text-darkblue max-w-[289px] mx-auto text-center pt-6 sm:text-base text-sm leading-custom-2xl'>
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