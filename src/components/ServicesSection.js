import React from 'react'
import Card from './UI/Card'
import {services} from '../assets/assets'

const ServicesSection = () => {
  return (
    <div className='font-0 flex flex-col items-center justify-center px-8 pt-16 pb-16 lg:pb-40'>
        <h2 className='font-semibold text-xl lg:text-2xl pb-10'>Services</h2>
        <div className='items-center justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 x-lg:grid-cols-4 gap-4'>
            {
              services.map((service) => (
                <Card 
                    key={service.id}
                    logo={service.logo}
                    title={service.title}
                    description={service.description}
                />
              ))
            }
        </div>
    </div>
  )
}

export default ServicesSection