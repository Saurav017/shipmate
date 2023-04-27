import React from 'react'
import PricingDetails from '../components/PricingDetails'
import Progress from '../components/UI/ProgressBar'
import {ReactComponent as Pillar} from  '../assets/pillar.svg'
import {ReactComponent as Weight} from  '../assets/weightmeter.svg'
import {ReactComponent as Pallet} from  '../assets/pallets.svg'
import {ReactComponent as XCover} from  '../assets/Xcover.svg'
import {ReactComponent as PrimeTime} from  '../assets/primetime.svg'
import { useStateContext } from '../context/ContextProvider'

const Booking = () => {

  const {state} = useStateContext()

  return (
    <>
      <Progress />
      <div className='booking_container lg:px-10 '>
        <main className='flex flex-col w-11/12'>
          <div className='card-primary w-full'>
              <p className='text-lg font-semibold'>Booking Summary</p>
              <div className='flex items-center justify-between w-11/12 m-auto mt-14'>
                <div className='flex flex-col items-center justify-center'>
                  <span><Pillar /></span>
                  <span className='font-semibold text-center'>Delhi<br />110003 India</span>
                </div>
                <div  className='flex flex-col items-center justify-center'>
                  <span><Pillar /></span>
                  <span className='font-semibold text-center'>Shangai<br />200080 India</span>
                </div>
              </div>
          </div>

          <div className='card_row2'>
            <div className='card-primary flex flex-col items-center justify-center'>
                  <span>Total Weight/Volume</span>
                  <span><Weight /></span>
                  <span className='font-semibold'>{state.weight}KG</span>
            </div>

            <div className='card-primary'>
              <span>Load</span>
              <div className='flex items-center justify-center'>
                <span className='text-2xl font-semibold'>{state.quantity} X </span> 
                <div className='flex flex-col items-center justify-center'><span><Pallet /></span>
                <p className='flex flex-col font-semibold text-center'>Pallets<span>{state.length} X {state.width} X {state.height}CM</span></p></div>
              </div>
            </div>
          </div>

          <div className='card_row3'>
            <div className='card-primary'>
              <span>Seller: Primetime Worldwide</span>
              <div className='py-9 flex items-center justify-center text-xl'><PrimeTime /></div>
            </div>
            <div className='card-primary'>
              <span>Insurance Xcover.com</span>
              <div className='py-9 flex items-center justify-center'><XCover /></div>
            </div>
          </div>
        </main>

        {/* Pricing */}
          <PricingDetails />
      </div>
    </>
  )
}

export default Booking
