import React from 'react'
import { SEARCH_ITEMS } from '../utils/helper'
import CommonCard from '../common/CommonCard'

const HeadlessSearch = () => {
  return (
      <div className='xl:pt-[148px] pt-12 md:pt-16 lg:pt-20'>
          <div className="container">
              <div className="flex max-lg:flex-col-reverse justify-between max-lg:flex-wrap">                  
                  <div className='lg:w-5/12 w-full flex items-center max-lg:justify-center'>
                      <CommonCard classList="!text-left" heading="Headless federated search" NavButton="Get a demo" list={SEARCH_ITEMS} />
                  </div>
                  <div className='lg:w-6/12 w-full'>
                      <img className='max-w-[600px] w-full max-sm:max-w-[330px] max-xl:max-w-[450px] xl:h-[337px] pointer-events-none max-lg:mx-auto max-lg:pb-6' src="./assets/images/webp/headless-person.webp" alt="search" />
                  </div>
              </div>
          </div>
      </div>
  )
}

export default HeadlessSearch
