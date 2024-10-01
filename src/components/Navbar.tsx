import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
    <ul className='flex flex-row space-x-8 justify-center p-6 bg-[#2d4067] shadow-md text-2xl font-medium'>
        <li>
            <Link href="/">
                <h1 className='text-white  hover:underline underline-offset-4 underline-[#008dda] decoration-4 decoration-[#008dda]'>Home</h1>
            </Link>
            

        </li>
        <li>
        <Link href="/Cars">
            <h1 className='text-white  hover:underline underline-offset-4 underline-[#008dda] decoration-4 decoration-[#008dda]'>Cars</h1>
            </Link>
        </li>
        <li>
            <h1 className='text-white  hover:underline underline-offset-4 underline-[#008dda] decoration-4 decoration-[#008dda]'>Bookings</h1>
            
        </li>
        <li>
            <h1 className='text-white  hover:underline underline-offset-4 underline-[#008dda] decoration-4 decoration-[#008dda]'>About</h1>
            
        </li>
    </ul>


    </div>
  )
}

export default Navbar