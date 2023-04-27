import React from 'react'
import {VscChevronDown} from 'react-icons/vsc'

const Sidebar = () => {
    const title= ["Filters","Price","Modes","Seller"]

  return (
    <div className='hidden md:block'>
        <h3 className='font-bold pb-10'>3 Top Quote<span className='font-medium'> (6 in Total)</span></h3>
        {
            title.map((title,index) => (
                <div key={index} className="flex items-center justify-between py-2">
                    <h3 className='font-bold'>{title}</h3>
                    <span><VscChevronDown /></span>
                </div>
            ))
        }
    </div>
  )
}

export default Sidebar