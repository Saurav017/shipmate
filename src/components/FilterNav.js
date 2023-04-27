import React from 'react'

const FilterNav = () => {
  return (
    <div className='w-full flex items-center justify-center rounded-xl font-0'
            style={{
                background: "#EBE8FF",
                boxShadow: "14px 216px 86px rgba(21, 31, 72, 0.01), 8px 121px 73px rgba(21, 31, 72, 0.05), 3px 54px 54px rgba(21, 31, 72, 0.09), 1px 13px 30px rgba(21, 31, 72, 0.1), 0px 0px 0px rgba(21, 31, 72, 0.1)",
            }}
        >
           <div className='h-12 flex items-center justify-center w-full rounded-xl hover:bg-main-bg hover:text-purple  active:bg-main-bg active:text-purple '>
           <span className='text-sm font-medium cursor-pointer text-center'>Best Value 5-5 days, $3,121</span>
           </div>
         
           <div className='h-12 flex items-center justify-center w-full rounded-xl hover:bg-main-bg hover:text-purple'>
           <span className='text-sm font-medium cursor-pointer text-center '>Quickest 5-5 days, $3,121</span>
           </div>
         
           <div className='h-12 flex items-center justify-center w-full rounded-xl hover:bg-main-bg hover:text-purple'>
           <span className='text-sm font-medium cursor-pointer text-center'>Cheapest 5-5 days, $3,121</span>
           </div>
         
        </div>

  )
}

export default FilterNav