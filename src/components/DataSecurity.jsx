import React from 'react'
import { SECURITY_ITEMS } from '../utils/helper'
import CommonCard from '../common/CommonCard'
const Security = () => {
    return (
        <div className='xl:py-[148px] py-12 md:py-16 lg:py-20'>
            <div className="container">
                <div className="flex justify-between max-lg:flex-wrap">
                    <div className='lg:w-5/12 w-full'>
                        <img className='max-w-[570px] max-sm:max-w-[330px] max-xl:max-w-[450px] xl:h-[337px] max-lg:mx-auto max-lg:pb-6 pointer-events-none' src="./assets/images/webp/data-security-host.webp" alt="search" />
                    </div>
                    <div className='lg:w-5/12 w-full flex items-center max-lg:justify-center'>
                        <CommonCard classList="!text-left" heading="Data Security and Hosting" NavButton="Get a demo" list={SECURITY_ITEMS}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Security