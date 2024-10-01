import React from 'react'
import Accordian from './Accordian'
const Safety = () => {
  return (
    <div className='py-20 px-28 bg-gradient-to-b from-blue-50 via-blue-200 to to-blue-50'>
       <div className='flex flex-row items-center justify-center '>
        
        <div className='flex-col text-left  font-semibold items-center rounded-lg w-[50%] '>
        <div className='w-[40%]'>   
        <span className='text-4xl text-orange-500'>Help Us </span>
        <span className='text-4xl'>Keep You Safe From Scams And Frauds</span>
        </div> 
         <Accordian/>
        </div>
        <div className='w-[40%] bg-gradient-to-b from-white to-blue-200 rounded-lg'>
            <img
            src="/assets/bmw-2.png"
            />
        </div>
        </div> 
    </div>
  )
}

export default Safety