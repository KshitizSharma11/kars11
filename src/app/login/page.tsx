import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col'>
        <div className='h-[40vh] brightness-50 bg-cover bg-center relative bg-[url(https://wallpapers.com/images/hd/ultra-wide-4k-car-xkxr4j3eotg26a22.jpg)]'>
            </div>
            <div className='flex flex-row  justify-between my-[3%] mx-[10%]'>
        <div className='w-[60%]'>
            <img src="https://img.freepik.com/premium-photo/best-car-wallpapers_1151350-19726.jpg"
            className='w-[90%] h-[90%] rounded-3xl'/>
       </div>
       <div className='flex-1 flex-col justify-center items-center'>
        <div className='space-y-4'>
            <h1 className='text-4xl text-black font-bold'>Login</h1>
            <p className='text-lg text-gray-400'>Welcome Back To The Universe Of Exotic Cars.</p>
        </div>
        <div>
            <form className='space-y-4 mt-4'>
                <input type='text' placeholder='Email' className='p-4 w-full rounded-lg border-2 border-gray-400'/>
                <input type='password' placeholder='Password' className='p-4 mt-4 w-full rounded-lg border-2 border-gray-400'/>
                <button className='w-full p-4 text-white bg-black rounded-lg hover:bg-blue-600'>Login</button>
                <div className='flex justify-center mt-4'>
                    <a href='#' className='text-blue-500'>Forgot Password?</a>
                </div>
                <div className='flex items-center'>
                <span className="border-t border-gray-400 flex-grow mr-1"></span>
  <span className="text-gray-500 text-lg">OR</span>
  <span className="border-t border-gray-400 flex-grow ml-1"></span>
  </div> 
            </form>
        </div>
       </div>
        </div>
    </div>
  )
}

export default page