import React from 'react'
import CommonButton from './CommonButton'
import { Link } from 'react-router-dom'
const Header = () => {
    return (      
      <div className='flex justify-between md:pt-[47px] pt-7'>
          <img className='lg:w-[248px] md:w-[240px] w-[160px] cursor-pointer' src="./assets/images/webp/logo.webp" alt="logo" />
        <CommonButton classList="!py-2 !px-3 !max-sm:text-sm" NavButton="Request a demo"/>
    </div>
  )
}

export default Header
