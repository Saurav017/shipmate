import React from 'react'
import { ReactComponent as BlackStar } from '../assets/black star.svg'
import { useStateContext } from '../context/ContextProvider'
const PricingDetails = () => {
    
    const {currency,goToHome} = useStateContext()


    return (

    <aside className='bg-white font-0 shadow-shadow rounded-xl p-5 flex flex-col h-fit'>
        <div className='flex items-center'>
            <h1 className='text-lg text-black font-semibold pr-4'>Price Details</h1>
            <span className='flex items-center justify-center p-2 text-xs rounded-2xl' 
                style={{
                    background: "#E5E6E6"
                }}
            ><BlackStar /><p className='pl-2'> Known Shipper</p></span>
        </div>

        <div className='w-full flex items-center justify-between text-grey my-4'>
                <span>Seller's Quote</span>
                <span>{currency} 3659.25</span>
        </div>

        <hr className='w-11/12 m-auto bg-grey'></hr>

        <div className='w-full flex items-center justify-between text-grey my-4'>
                <span>Duties and taxes</span>
                <span>Not included</span>
        </div>

        <div className='w-full flex items-center justify-between text-grey'>
                <span>Insurance</span>
                <span>{currency}323.40</span>
        </div>

        <span className='text-sm text-grey my-4'>Based on the items cost</span>

        <hr className='w-11/12 m-auto bg-grey'></hr>

        <p className='text-grey my-4'>Add a <span className='text-purple underline underline-offset-1 cursor-pointer'>promo code</span></p>
        <div className='w-full flex items-center justify-between text-grey mb-4'>
                <span>Platform Fee</span>
                <span>{currency}119.48</span>
        </div>

        <hr className='w-11/12 m-auto bg-grey'></hr>

        <div className='w-full flex items-center justify-between text-grey my-4'>
                <span className='text-2xl font-semibold text-black'>Total:</span>
                <span className='text-2xl font-semibold text-black'>{currency} 4,102.13</span>
        </div>

        <button type="submit" className='w-full p-4 bg-purple rounded-2xl text-main-bg font-semibold mt-5 curser-pointer' onClick={goToHome}>
            Checkout
        </button>
    </aside>
  )
}

export default PricingDetails