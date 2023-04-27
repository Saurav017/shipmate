import React from 'react'
import { useStateContext } from '../context/ContextProvider'

const CurrencySymbol = () => {

    const {currency, handleChange} = useStateContext()

  return (
    <div style={{
        zIndex: "9999"
    }}>
        <select name="currency" id="currency" className='bg-main-bg border-2 rounded-md p-1 px-3 cursor-pointer flex items-center justify-center text-purple currency-picker  font-0 text-xl font-semibold relative border-purple' onChange={
          handleChange
        }>
            <option value="$" defaultValue>$</option>
            <option value="€">€</option>
            <option value="₹">₹</option>
        </select>
    </div>
  )
}

export default CurrencySymbol