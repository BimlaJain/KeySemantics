import React from 'react'

const Footer = () => {
  return (
    <div className='bg-darkblue py-6 -mt-1'>
          <div className="container sm:flex justify-between">
        <p className='text-voilet text-xs font-normal max-sm:text-center'>
          ©{new Date().getFullYear()} KeySemantics GmbH | Ramsenburgweg 24, 9100 Herisau, Switzerland
        </p>
        <a href="info@keysemantics.ch" className='text-voilet text-xs font-normal cursor-pointer max-sm:pt-2 max-sm:text-center underline'><p>info@keysemantics.ch</p></a>
          </div>
    </div>
  )
}

export default Footer
