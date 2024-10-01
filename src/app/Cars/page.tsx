import React from 'react'
import Enquiry from '@/components/Enquiry'

const Cars = () => {
    const carData=[{
        title:'Mercedes Benz E-Class',
        price:'$25,000',
        img:'/assets/mercedes.png',
        desc:'The Mercedes-Benz E-Class is a luxury sedan with a sleek, modern design. It features a powerful engine, a comfortable interior, and a premium sound system. This car is suitable for both family and business travelers.'
},{
    title:'BMW 7 Series',
        price:'$40,000',
        img:'/assets/bmw.png',
        desc:'The BMW 7 Series is a mid-size sedan with a powerful engine, comfortable interior, and a premium sound system. This car is suitable for both family and business travelers.'
},{
    title:'Volkswagen Golf GTI',
        price:'$30,000',
        img:'/assets/car2.png',
        desc:'The Volkswagen Golf GTI is a luxury sedan with a powerful engine, comfortable interior, and a premium sound system. This car is suitable for both family and business travelers.'
},{
    title:'Volkswagen Golf GTI',
        price:'$30,000',
        img:'/assets/car2.png',
        desc:'The Volkswagen Golf GTI is a luxury sedan with a powerful engine, comfortable interior, and a premium sound system. This car is suitable for both family and business travelers.'
}]
  return (
    <div>
        <Enquiry />
        <div className='flex items-center justify-center'>
      <span className='text-4xl text-center font-bold text-orange-400'>Latest </span>
      <span className='text-4xl text-center font-bold '>&nbsp;Inventory</span>
      </div>
      <div className='grid grid-cols-3 mx-[10%] gap-8 mt-8'>
        {carData.map((car, index)=>(
          <div key={index} className='w-full p-4 shadow-lg'>
            <img src={car.img} alt={car.title} className='w-full h-64 object-contain'/>
            <h2 className='text-2xl text-center font-bold'>{car.title}</h2>
            <p className='text-lg text-gray-600'>{car.desc}</p>
            <h3 className='text-xl text-center font-semibold'>Price: {car.price}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cars