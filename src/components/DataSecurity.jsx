import React from 'react'
import { securityItems } from '../utils/helper'
import CommonHeading from '../common/CommonHeading'
import CommonButton from '../common/CommonButton'
const Security = () => {
    return (
        <div className='py-[148px] max-sm:py-12 max-md:py-16 max-lg:py-20'>
            <div className="container">
                <div className="flex justify-between max-lg:flex-wrap">
                    <div className='lg:w-5/12 w-full'>
                        <img className='max-w-[570px] max-sm:max-w-[330px] max-xl:max-w-[450px] max-lg:mx-auto max-lg:pb-6' src="./assets/images/webp/data-security-host.webp" alt="search" />
                    </div>
                    <div className='lg:w-5/12 w-full flex items-center max-lg:justify-center'>
                        <div>
                            <CommonHeading classList="!text-left" heading="Data Security and Hosting"/>
                            <ul className="pb-6 max-w-[552px] max-lg:mx-auto lg:ml-4 pt-5">
                                {securityItems.map((item, index) => (
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