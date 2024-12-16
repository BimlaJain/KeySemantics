import React from 'react'
import Header from '../common/Header'

const Hero = () => {
    return (
        <div className='lg:min-h-screen 2xl:min-h-fit bg-cover bg-no-repeat bg-center max-lg:pb-20 max-sm:pb-10' style={{ backgroundImage: `url(./assets/images/webp/hero-bg.webp)` }}>
            <div className="container">
                <Header />
                <h1 className='font-bold xl:text-custom_sm lg:text-custom_md md:text-5xl text-4xl leading-custom_sm text-royal_blue lg:pb-10 md:pb-8 pb-6 text-center xl:pt-[200px] lg:pt-[140px] md:pt-28 pt-16 max-w-[650px] mx-auto'>AI-Powered Search as a Service</h1>
                <p className='font-medium md:text-2xl text-xl text-royal_blue leading-custom_md lg:pb-12 md:pb-8 pb-6 text-center'>Unlock your content with KeySemantics.</p>

                <button className=' px-[32px] py-5 flex justify-center mx-auto bg-royal_blue text-white font-medium text-base rounded-full border border-royal_blue hover:text-royal_blue hover:bg-white transition-all duration-500'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero
