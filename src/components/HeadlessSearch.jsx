import React from 'react'
import { searchItems } from '../utils/helper'
import CommonHeading from '../common/CommonHeading'
import CommonButton from '../common/CommonButton'

const HeadlessSearch = () => {
  return (
      <div className='pt-[148px] max-sm:pt-12 max-md:pt-16 max-lg:pt-20'>
          <div className="container">
              <div className="flex max-lg:flex-col-reverse justify-between max-lg:flex-wrap">                  
                  <div className='lg:w-5/12 w-full flex items-center max-lg:justify-center'>
                      <div>
                          <CommonHeading classList="!text-left" heading="Headless federated search"/>
                          <ul className="pb-6 max-w-[552px] max-lg:mx-auto lg:ml-4 pt-5">
                              {searchItems.map((item, index) => (
                                  <li key={index} className="list-disc text-royal_blue pb-2 text-base font-normal leading-custom_3xl max-lg:ml-4" >
                                      {item}
                                  </li>
                              ))}
                          </ul>
                          <CommonButton NavButton="Get a demo"/>
                      </div>
                  </div>
                  <div className='lg:w-6/12 w-full'>
                      <img className='max-w-[600px] w-full max-sm:max-w-[330px] max-xl:max-w-[450px] max-lg:mx-auto max-lg:pb-6' src="./assets/images/webp/headless-person.webp" alt="search" />
                  </div>
              </div>
          </div>
      </div>
  )
}

export default HeadlessSearch
