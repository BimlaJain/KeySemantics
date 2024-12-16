import React from 'react'
const Header = () => {
    return (      
      <div className='flex justify-between md:pt-[47px] pt-7'>
              <img className='lg:w-[248px] md:w-[240px] w-[200px] cursor-pointer' src="./assets/images/png/logo.png" alt="logo" />
          <button className='font-normal sm:text-sm text-xs border border-royal_blue rounded-full hover:text-white hover:bg-royal_blue transition-all duration-500 sm:px-4 sm:py-3 px-3 py-2 !leading-custom_lg '>Request a demo</button>
    </div>
  )
}

export default Header
