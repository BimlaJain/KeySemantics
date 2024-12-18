import React from 'react'
import CommonButton from './CommonButton'
const Header = () => {
    return (      
      <div className='flex justify-between lg:pt-[47px] pt-7'>
        <a href="/"><img className='lg:w-[248px] md:w-[240px] w-[160px] max-sm:h-[36px] cursor-pointer' src="./assets/images/webp/logo.webp" alt="logo" /></a>
        <CommonButton classList="!py-2 !px-[14.7px] max-sm:!py-[5px] max-sm:!px-2 !max-sm:text-sm" NavButton="Request a demo"/>
    </div>
  )
}

export default Header
