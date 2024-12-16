import React from 'react'
import { SECURITY_ITEMS } from '../utils/helper'
import CommonHeading from '../common/CommonHeading'
import CommonButton from '../common/CommonButton'
const Security = () => {
    return (
        <div className='xl:py-[148px] py-12 md:py-16 lg:py-20'>
            <div className="container">
                <div className="flex justify-between max-lg:flex-wrap">
                    <div className='lg:w-5/12 w-full'>
                        <img className='max-w-[570px] max-sm:max-w-[330px] max-xl:max-w-[450px] xl:h-[337px] max-lg:mx-auto max-lg:pb-6' src="./assets/images/webp/data-security-host.webp" alt="search" />
                    </div>
                    <div className='lg:w-5/12 w-full flex items-center max-lg:justify-center'>
                        <div>
                            <CommonHeading classList="!text-left" heading="Data Security and Hosting"/>
                            <ul className="pb-6 max-w-[552px] max-lg:mx-auto lg:ml-4 pt-5">
                                {SECURITY_ITEMS.map((item, index) => (
                                    <li
                                        key={index}
                                        className="list-disc text-royal_blue pb-2 text-base font-normal leading-custom_2xl max-lg:ml-4"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <CommonButton NavButton="Get a demo"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Security