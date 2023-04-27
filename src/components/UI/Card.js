import React from 'react'

const Card = ({logo, title, description}) => {
  return (
    <div 
      className='flex flex-col items-start justify-center gap-4 px-5 py-4 mb-4'
    style={{
    width: "100%",
    maxWidth: "331px",
    height: "208px",
    background: "#FFFFFF",
    boxShadow: "0px 146px 58px rgba(0, 0, 0, 0.01), 0px 82px 49px rgba(0, 0, 0, 0.05), 0px 36px 36px rgba(0, 0, 0, 0.09), 0px 9px 20px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
    borderRadius: "16px"
    }}>
      <div className='flex items-center'>
        <span>{logo}</span>
        <h5 className='px-6 font-medium lg:text-xl'>{title}</h5>
      </div>
      <div style={{
        width: "95%",
        height: "0px",
        border: "0.7px solid #9E9E9E"
      }}></div>
      <p>{description}</p>
    </div>
  )
}

export default Card