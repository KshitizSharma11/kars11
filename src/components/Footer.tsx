import React from 'react'
import { FaInstagram, FaFacebook ,FaLinkedin } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='bg-[#184077] p-4 text-gray-50'>
    {/* For desktop footer */}
     <div className='flex flex-row  mx-24 py-20 justify-between'>
        <div className='space-y-4'>
            <h1 className='text-4xl font-semibold'>Kars11</h1>
            <ul className='space-y-2'>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
            <div className='flex flex-row space-x-4'>
            <FaInstagram color={'white'} size={28} className='hover:cursor-pointer'/>
            <FaFacebook color={'white'} size={28} className='hover:cursor-pointer'/>
            <FaLinkedin color={'white'} size={28} className='hover:cursor-pointer'/>
            </div>
        </div>
        <div className='space-y-4'>
            <h1 className='text-4xl font-semibold'>Terms</h1>
            <ul className='space-y-2'>
                <li>Privacy Policy</li>
                <li>Terms And Conditions</li>
            </ul>
        </div>
        <div>
            <h1 className='text-2xl'>Kars11</h1>
            <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Press</li>
            </ul>
        </div>

     </div>
    </div>
  )
}

export default Footer