import React from 'react'
import { FaInstagram, FaFacebook ,FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt  } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='bg-[#184077] p-4 text-gray-50 hidden lg:block '>
    {/* For desktop footer */}
     <div className='flex flex-row  mx-24 py-20 justify-between'>
        <div className='space-y-4'>
            <span className='text-4xl font-semibold text-orange-400'>Kars</span>
            <span className='text-4xl font-semibold'>11</span>
            <p className='text-xl'>Trading Vehicles Made Super Easy.</p>
            <div className='flex flex-row space-x-4 '>
            <FaInstagram  size={28} className='hover:cursor-pointer text-white hover:text-orange-400'/>
            <FaFacebook  size={28} className='hover:cursor-pointer text-white hover:text-orange-400'/>
            <FaLinkedin  size={28} className='hover:cursor-pointer text-white hover:text-orange-400'/>
            </div>
        </div>
        <div className='space-y-4 items-center font-medium'>
            <h1 className='text-4xl font-semibold'>Our Services</h1>
            <ul className='space-y-2 text-xl'>
                <li className='hover:underline underline-offset-4 decoration-4 decoration-orange-400'>Rent Car</li>
                <li className='hover:underline underline-offset-4 decoration-4 decoration-orange-400'>Buy Car</li>
                <li className='hover:underline underline-offset-4 decoration-4 decoration-orange-400'>Sell Car</li>
            </ul>
        </div>
        <div className='space-y-4 items-center font-medium'>
            <h1 className='text-4xl font-semibold'>About Us</h1>
            <ul className='space-y-2 text-xl'>
                <li className='hover:underline underline-offset-4 decoration-4 decoration-orange-400'>Privacy Policy</li>
                <li className='hover:underline underline-offset-4 decoration-4 decoration-orange-400'>Terms And Conditions</li>
                <li className='hover:underline underline-offset-4 decoration-4 decoration-orange-400'>Pricing</li>
            </ul>
        </div>
        <div className='space-y-4 items-center font-medium'>
            <h1 className='text-4xl font-semibold'>Contact Us</h1>
            <div className='rounded-lg p-4 bg-orange-400 text-gray-100 items-center'>
             <div className='flex items-center justify-center space-x-6'>  
             <FaEnvelope size={28} color=""/>
             <h1 className='text-center text-2xl font-semibold'>Mail</h1>
             </div> 
             <p className='text-center text-lg font-medium p-2'>helpdesk@kars11.com</p>
            </div>
            <div className='rounded-lg p-4 bg-orange-400 text-gray-100 items-center'>
                <div className='flex items-center justify-center space-x-6'>
            <FaPhone size={28} color=""/>
             <h1 className='text-center text-2xl font-semibold'>Call</h1>
             </div>
             <p className='text-center text-lg font-medium p-2'>+919805147466</p>
            </div>
            <div className='rounded-lg p-4 bg-orange-400 text-gray-100 items-center'>
            <div className='flex items-center justify-center space-x-6'>
                <FaMapMarkerAlt size={28} color="" />
             <h1 className='text-center text-2xl font-semibold'>Address</h1>
             </div>
             <p className='text-center text-lg font-medium p-2'>VPO Ustehar Baijnath,176125 (H.P)</p>
            </div>
        </div>

     </div>
    </div>
  )
}

export default Footer