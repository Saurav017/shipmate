
import React from 'react'

import Progress from '../components/UI/ProgressBar'
import { useStateContext } from '../context/ContextProvider'
import Form from '../components/UI/Form'
import Sidebar from '../components/Sidebar'
import RecommendationCard from '../components/RecommendationCard'


const Shipping = () => {

  return (
    <>
      <Progress />  
      <div className='flex items-center justify-center'>
      <Form />
    </div>
    <hr className='bg-grey my-5' />
      <div className='filter_container justify-start px-4 lg:px-32  '>
        <Sidebar />
        <RecommendationCard />
      </div>
    </>
  )
}

export default Shipping