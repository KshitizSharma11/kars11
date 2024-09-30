import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
    <ul className='flex flex-row space-x-5 justify-center m-2 p-4 bg-gray-800 rounded-lg'>
        <li>
            <Link href="/">
                <h1 className='text-white hover:text-gray-400'>Home</h1>
            </Link>
            

        </li>
        <li>
            <h1>Cars</h1>
            
        </li>
        <li>
            <h1>Bookings</h1>
            
        </li>
        <li>
            <h1>About</h1>
            
        </li>
    </ul>


    </div>
  )
}

export default Navbar