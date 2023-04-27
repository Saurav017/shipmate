import React from 'react'
import Logo from '../assets/Logo.png'
import Button from './UI/Button'
import {useStateContext} from '../context/ContextProvider.js'
import CurrencySymbol from './CurrencySymbol'
import { useParams } from 'react-router-dom'

const Navbar = () => {
  

  const {isNotAuth, handleAuth,isSubmit}  = useStateContext()
  return (
    <div className="h-16 w-full py-3 px-2 md:px-6 lg:px-12 flex items-center justify-between " style={{
      
    }}>
        <div>
            <img src={Logo} className="h-8" alt="Logo" />            
        </div>
        {isSubmit && <div className='w-auto flex items-center justify-center'>
            
            {isNotAuth && <Button title="Login" isPurple={true} handleBtn={handleAuth}/>}
            {isNotAuth && <Button title="Learn More" isPurple={false}/>}
            {!isNotAuth && <CurrencySymbol />}
            {!isNotAuth && <Button title="Track Shipment" isPurple={true}/>}
        </div>}
    </div>
  )
}

export default Navbar