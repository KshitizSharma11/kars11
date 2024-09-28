import React from 'react'

const Navbar = () => {
  return (
    <div>
    <ul className='flex flex-row space-x-5 justify-center m-2 p-4 bg-gray-800 rounded-lg'>
        <li>
            <h1>Home</h1>

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