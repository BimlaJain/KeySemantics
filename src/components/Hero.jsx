import React from 'react'
import Header from '../common/Header'
import CommonButton from '../common/CommonButton'

const Hero = () => {
    return (
        <div className='lg:min-h-screen 2xl:min-h-fit bg-cover bg-no-repeat bg-center max-lg:pb-16 max-sm:pb-10 bg-pink' style={{ backgroundImage: `url(./assets/images/webp/hero-bg.webp)` }}>
            <div className="container">
                <Header />
                <h1 className='font-bold xl:text-custom-sm lg:text-custom-md md:text-5xl text-4xl leading-custom-sm text-royalblue lg:pb-10 md:pb-8 pb-6 text-center xl:pt-[200px] lg:pt-[140px] md:pt-28 pt-16 max-w-[650px] mx-auto'>AI-Powered Search as a Service</h1>
                <p className='font-medium md:text-2xl text-xl text-royalblue leading-custom-md lg:pb-12 md:pb-8 pb-6 text-center'>Unlock your content with KeySemantics.</p>
                <CommonButton classList="!px-[32px] !py-5 !bg-royalblue !border !border-royalblue hover:!text-royalblue !text-white hover:!bg-white !text-base !mx-auto " NavButton="Get Started"/>
            </div>
        </div>
    )
}

export default Hero
