import React from 'react'
import {ReactComponent as Location} from '../../assets/location.svg'
import {ReactComponent as Calendar} from '../..//assets/calendar.svg'
import {AiOutlineArrowRight} from 'react-icons/ai'
import LoadForm from './LoadForm'
import { useStateContext } from '../../context/ContextProvider'
import { Link } from 'react-router-dom'

const Form = () => {

  const {setCurrentStep,onChange,handleSubmit} = useStateContext()


  return (
    <div style={{
        width: '80%',
        padding: '20px',
        background: '#fff',
        boxShadow: '296px 536px 245px rgba(21, 31, 72, 0.01), 167px 302px 207px rgba(21, 31, 72, 0.05), 74px 134px 153px rgba(21, 31, 72, 0.09), 19px 34px 84px rgba(21, 31, 72, 0.1), 0px 0px 0px rgba(21, 31, 72, 0.1)',
        borderRadius: '14px',
        zIndex: "10"
    }}
    >
      <div className='flex flex-col lg:flex-row justify-evenly font-0'>
          <div className='flex items-center relative text-grey'>
          
            <input type="text" className=' lg:py-0 px-4 pl-10 w-full cursor-pointer lg:border-r-2 focus:outline-none shadow-shadow lg:shadow-white py-2 mb-2 lg:mb-0' name='origin'  placeholder="Origin, Port City" onChange={onChange} required />
            <span className='absolute top-3 left-2'><Location /></span>
          </div>

          
          <div className='flex items-center relative text-grey'>
          
            <input className=' px-4 pl-10 cursor-pointer lg:border-r-2  focus:outline-none w-full shadow-shadow lg:shadow-white py-2 mb-2 lg:mb-0' name='destination' type="text" placeholder="Destination, Port City" onChange={onChange} required />
            <span className='absolute top-3 left-2'><Location /></span>
          </div>

          <div className='flex items-center relative text-grey'>
          
            <input className=' px-4 pl-10 cursor-pointer lg:border-r-2 relative date-picker focus:outline-none w-full shadow-shadow lg:shadow-white py-2 mb-2 lg:mb-0' name='date' type="date" placeholder='13 April 2023' onChange={onChange} required />
            {/* <span className='absolute top-2 left-2'><Calendar /></span> */}
          </div>

          <LoadForm />

          <div className='flex items-center justify-end lg:justify-center text-main-bg'>
          
          <button type='submit' className='bg-light-purple py-3 px-4 font-semibold font-0 rounded-lg cursor-pointer' onClick={handleSubmit}>
            <AiOutlineArrowRight />

          </button>
          
          
          
        </div>
          
      </div>
    </div>
  )
}

export default Form