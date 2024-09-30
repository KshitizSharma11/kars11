import React from 'react'
import { FaHandHoldingUsd, FaCar } from 'react-icons/fa';
import { FiZap } from 'react-icons/fi';
const Working = () => {
  return (
    <div className='py-28 mx-10'>
    <div className='text-center  font-semibold items-center'>
     <span className='text-4xl '>How It </span>
     <span className='text-4xl text-orange-500'>Works</span>
     <p className='text-base mt-6 font-normal mx-[25%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum aliquid consectetur officiis quas dicta aperiam doloremque amet ut! Similique nisi repellat dicta rem. Eius dicta consequuntur repellat, repudiandae temporibus cupiditate!</p>
    </div>
    <div className='grid grid-cols-3 mt-20 mx-10 p-4 text-center'>
    <div className='flex flex-col items-center space-y-6 p-4 m-4'>
    <FaHandHoldingUsd size={32} color={'#f97316'}/>
    <h1 className='font-semibold text-2xl'>
        Your Pick Of Cars At Low Prices.
    </h1>
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi sint, possimus qui pariatur accusantium iusto eius atque, libero illum in inventore distinctio veritatis quaerat. Libero unde deserunt autem iste cupiditate!
    </p>
    </div>
    <div className='flex flex-col items-center space-y-6 p-4 m-4'>
    <FaCar size={32} color={'#f97316'}/>
    <h1 className='font-semibold text-2xl'>
    Reliable Fleet Of Vehicles.
    </h1>
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi sint, possimus qui pariatur accusantium iusto eius atque, libero illum in inventore distinctio veritatis quaerat. Libero unde deserunt autem iste cupiditate!
    </p>
    </div>
    <div className='flex flex-col items-center space-y-6 p-4 m-4'>
    <FiZap size={32} color={'#f97316'}/>
    <h1 className='font-semibold text-2xl'>
        Scroll, click, tap and go!
    </h1>
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi sint, possimus qui pariatur accusantium iusto eius atque, libero illum in inventore distinctio veritatis quaerat. Libero unde deserunt autem iste cupiditate!
    </p>
    </div>
    </div>
    </div>
  )
}

export default Working