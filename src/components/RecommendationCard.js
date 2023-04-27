import React from 'react'
import { Link } from 'react-router-dom'
import { recommendations } from '../assets/assets'
import FilterNav from './FilterNav'
import  {GoPrimitiveDot} from 'react-icons/go'
import {ReactComponent as Location} from '../assets/location.svg'
import {ReactComponent as Airplane} from '../assets/airplane.svg'
import { useStateContext } from '../context/ContextProvider'


const RecommendationCard = () => {

    const {setCurrentStep, setIsSubmit} = useStateContext()
  return (
    <div className='w-full md:w-11/12 lg:w-10/12'>
        
        <FilterNav />

        {/* Recommendation Cards */}
        <div className='flex flex-col font-0 mt-10'>
            {
                recommendations.map((item) => (

                    <div key={item.id} className="bg-main-bg rounded-lg w-full p-4 mb-4 recom_card"
                        style={{
                            boxShadow: "39px 216px 88px rgba(0, 0, 0, 0.01), 22px 122px 74px rgba(0, 0, 0, 0.05), 10px 54px 55px rgba(0, 0, 0, 0.09), 2px 14px 30px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)"
                        }}
                    >   
                        {/* left one */}
                        <div>   
                            <div className='flex items-center'>
                                <div className='flex items-center justify-center  p-2 rounded-xl mr-2 '
                                    style={{
                                        minWidth: "100px",
                                        background: item.tag==="Eco" ? "#ADBFFF": "#AFFFAD"
                                    }}
                                ><span
                                style={{
                                        
                                        color: item.tag==="Eco" ? "#446DFF": "#05FF00"
                                    }}
                                 ><GoPrimitiveDot /></span>{item.tag}</div>
                                <p className="text-sm mr-2"
                                    style={{
                                        color: "#ff0000"
                                    }}
                                >Express</p>
                                <p className='text-grey text-sm font-medium border-l-2 px-2'>Est 5 days</p>
                            </div>

                            <div className='flex my-4 items-center text-grey font-medium text-sm'>
                                <p className='flex items-center '><span className=''><Location /></span>110003,Delhi</p> 
                                <span
                                    className='px-2 lg:px-10'
                                ><Airplane /></span>
                                <p className='flex items-center'><span className='pr-1'><Location /></span>200080, Shangai</p> 
                            </div>

                            <div className='flex items-center '>
                                <span>{item.logo}</span>
                                <p className='px-2 text-grey text-sm'>{item.company}</p>
                                <span>{item.star}</span>
                            </div>
                           
                        </div>

                        <div className='border-l-2 pl-2 text-grey flex flex-col items-center justify-evenly'>
                            <h2 className='text-xl text-black font-bold'>$3,982</h2>
                            <Link to={"/booking"}>
                            <button className=' rounded-xl md:rounded-2xl lg:rounded-3xl  py-2  px-4 lg:px-7 cursor-pointer text-main-bg font-0 bg-purple text-xs' onClick={() => {setCurrentStep(4)
                            setIsSubmit(false)
                            }}>Select</button>
                            </Link>
                            
                            <span className='text-xs text-center underline underline-offset-1 cursor-pointer'>View Details</span>
                        </div>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default RecommendationCard