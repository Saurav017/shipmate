import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Ship} from '../../assets/shipm.svg'
import { useStateContext } from '../../context/ContextProvider'

const LoadForm = () => {


    const {onChange,handleSubmit} = useStateContext()

    const [topping, setTopping]  = useState("Total")
    const [isClicked, setIsClicked] = useState(false)

    const onOptionChange = e => {
        setTopping(e.target.value)
    }

    const handleOpen = () => {
        setIsClicked((prev) => !prev)
    }

    return (

    <div className='flex items-start justify-start relative text-grey font-0'>
            <span className='absolute top-2  left-20 md:left-56 lg:left-1'><Ship /></span>
            <button className='px-0 lg:px-10 lg:pr-32 cursor-pointer lg:border-r-2 focus:outline-none bg-main-bg w-full lg:bg-white shadow-shadow lg:shadow-white py-2 mb-2 lg:mb-0' onClick={handleOpen}>Load</button>


            {/* additional details */}

            { isClicked && <div className='absolute flex flex-col bg-white p-5 top-16 left-0 w-96 text-sm rounded-md'>
        <div className='flex items-center justify-start mb-4'>
            <div className='flex items-center justify-center mr-6'>
                <input type="radio" className='mr-2 cursor-pointer' name='topping' value="Total" id='total' checked={topping==="Total"} onChange={onOptionChange}></input>
                <label>Calculate Total Unit</label>
            </div>
            <div className='flex items-center justify-center'>
                <input type="radio" className='mr-2 cursor-pointer' name='topping' value="Perunit" id='perunit' checked={topping==="Perunit"} onChange={onOptionChange}></input>
                <label >Calculate per pallete</label>
            </div>
        </div>

        <div className='flex items-center w-full mb-4'>
            <div className='flex items-start flex-col justify-start mr-4'>
                <label className="text-grey mb-2">Weight</label>
                <input type="text" name="weight" className='border-2 border-grey rounded-md w-20 px-2' onChange={onChange}/>
            </div>

            <div className='flex items-start flex-col justify-start mr-4'>
                <label className="text-grey mb-2">Quantity</label>
                <input type="text" name="quantity" className='border-2 border-grey rounded-md w-20 px-2' onChange={onChange}/>
            </div>
        </div>

        <div className='flex items-center w-full mb-4'>
        <div className='flex items-start flex-col justify-start mr-4'>
                <label className="text-grey mb-2">Length</label>
                <input type="text" name="length" className='border-2 border-grey rounded-md w-16 px-2' onChange={onChange}/>
            </div>
            <div className='flex items-start flex-col justify-start mr-4'>
                <label className="text-grey mb-2">Width</label>
                <input type="text" name="width" className='border-2 border-grey rounded-md w-16 px-2' onChange={onChange} />
            </div>
            <div className='flex items-start flex-col justify-start mr-4'>
                <label className="text-grey mb-2">Height</label>
                <input type="text" name="height" className='border-2 border-grey rounded-md w-16 px-2' onChange={onChange}/>
            </div>
        </div>

        <div className='w-full flex items-end justify-end'>
       
        <button type='submit' className='bg-light-purple p-3 font-semibold cursor-pointer text-main-bg rounded-2xl' onClick={handleSubmit}>Check Services</button>
       
        </div>
    </div>
    }

    </div>
  )
}

export default LoadForm