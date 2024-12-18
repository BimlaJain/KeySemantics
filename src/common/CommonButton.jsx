import React from 'react'

const CommonButton = ({NavButton , classList}) => {
  return (
      <button className={`${classList} py-2 px-[15px] text-sm font-normal leading-custom-3xl border border-royalblue hover:text-white hover:bg-royalblue transition-all duration-500 rounded-[48px] flex `}>{NavButton}</button>
  )
}

export default CommonButton
