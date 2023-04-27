import React, { useEffect } from 'react'
import waterwaves from '../assets/waterwaves.png'
import TitleSection from '../components/TitleSection'
import Form from '../components/UI/Form'
import ServicesSection from '../components/ServicesSection'
import { useStateContext } from '../context/ContextProvider'
const Home = () => {

  const {currentStep,setCurrentStep} = useStateContext();


  useEffect(() => {
    setCurrentStep(1)
  }, [])

  return (
    <div className='relative'>
    <img src={waterwaves} alt='bg' className="bottom-0 absolute bg-contain" />
    <TitleSection />
    <div className='flex items-center justify-center'>
      <Form />
    </div>
    <ServicesSection />
    
    </div>
    
  )
}

export default Home