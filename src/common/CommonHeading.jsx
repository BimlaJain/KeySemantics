import React from 'react'

const CommonHeading = ({heading , classList}) => {
  return (
    <div>
      <h2 className={`${classList} lg:text-custom-lg text-2xl leading-normal font-bold text-royalblue text-center`}>{heading}</h2>
    </div>
  )
}

export default CommonHeading
