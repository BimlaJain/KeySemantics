import React from 'react'

const CommonButton = ({NavButton , classList}) => {
  return (
    <div>
      <button className={`${classList} py-3 px-4 text-sm font-normal leading-custom-3xl border border-royalblue hover:text-white hover:bg-royalblue transition-all duration-500 rounded-[48px] flex max-lg:mx-auto`}>{NavButton}</button>
    </div>
  )
}

export default CommonButton
