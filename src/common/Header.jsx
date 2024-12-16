import React from 'react'
import CommonButton from './CommonButton'
const Header = () => {
    return (      
      <div className='flex justify-between md:pt-[47px] pt-7'>
              <img className='lg:w-[248px] md:w-[240px] w-[200px] cursor-pointer' src="./assets/images/webp/logo.webp" alt="logo" />
        <CommonButton NavButton="Request a demo"/>
    </div>
  )
}

export default Header
