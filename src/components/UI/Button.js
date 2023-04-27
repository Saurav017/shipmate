import React from 'react'

const Button = ({title,isPurple,handleBtn}) => {


  return (
    <button 
    type='button'
        className='border-2 border-purple rounded-lg px-4 py-1 font-0 font-semibold ml-4 w-fit hover:bg-purple cursor-pointer' 
        style={{
                backgroundColor:  isPurple ? '#6F57E9': '#F8F9FD',
                color : isPurple ? '#F8F9FD' : '#000000',
                zIndex:"9999"
        }}
        onClick={handleBtn}
        >
        {title}
    </button>
  )
}

export default Button