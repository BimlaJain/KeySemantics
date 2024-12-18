import React from 'react'

const CommonHeading = ({heading , classList}) => {
  return (
      <h2 className={`${classList} xl:text-custom-lg lg:text-custom-xsm text-2xl leading-normal font-bold text-royalblue text-center`}>{heading}</h2> 
  )
}

export default CommonHeading
