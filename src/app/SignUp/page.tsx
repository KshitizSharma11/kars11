'use client'
import React,{useState} from 'react'
import Banner from '@/components/atoms/Banner'
import { FaGoogle, FaFacebook } from 'react-icons/fa'
import { handleFacebookLogin, handleGoogleLogin, signInWithEmail, } from "@/utils/loginServiceFunctions";
const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    await signInWithEmail(email, password);
  };

  const handleGoogleButtonClick = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();  // Prevent page reload
    await handleGoogleLogin();
  };

  const handleFacebookButtonClick = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();  // Prevent page reload
    await handleFacebookLogin();
  };
  return (
    <div>
        <Banner url='https://wallpapers.com/images/hd/ultra-wide-4k-car-xkxr4j3eotg26a22.jpg'  height={40} />
        
        <div className="flex flex-row items-center justify-between my-[5%] mx-[10%]">
        <div className="w-[50%]">
          <img
            src="https://img.freepik.com/premium-photo/best-car-wallpapers_1151350-19726.jpg"
            className="w-[90%] h-[80%] rounded-3xl"
          />
        </div>
        <div className="w-[50%] flex-col justify-center  items-center">
          <div className="space-y-4">
            <h1 className="text-4xl text-black font-bold">Sign Up</h1>
            <p className="text-lg text-gray-400">
              Find Your Ideal Deal With Kars11.
            </p>
          </div>
          <div>
            <form className="space-y-4 mt-4">
                <div className='flex gap-4'>
              <input
                type="text"
                placeholder="Name"
                className="p-4 w-full  rounded-lg border-2 border-gray-400"
                />
              <input
                type="text"
                placeholder="Email"
                onChange={(e)=>{setEmail(e.target.value);}}
                className="p-4 w-full  rounded-lg border-2 border-gray-400"
                />
                </div>
                <div className='flex gap-4'>

              <input
                type="password"
                placeholder="Password"
                onChange={(e)=>{setPassword(e.target.value);}}
                className="p-4 w-full  rounded-lg border-2 border-gray-400"
                />
              <input
                type="password"
                placeholder="Confirm Password"
                className="p-4  w-full  rounded-lg border-2 border-gray-400"
                />
                </div>
             
              <button onClick={handleLoginSubmit} className="w-full p-4 text-white bg-black rounded-lg hover:bg-orange-400">
                Create 
              </button>
              <div className="flex justify-center mt-4">
                <a href="#" className="text-blue-500">
                  Forgot Password?
                </a>
              </div>
              <div className="flex items-center">
                <span className="border-t border-gray-400 flex-grow mr-1"></span>
                <span className="text-gray-500 text-lg">OR</span>
                <span className="border-t border-gray-400 flex-grow ml-1"></span>
              </div>
              <div className=" flex flex-row items-center justify-center gap-8 mt-4">
               <FaGoogle onClick={handleGoogleButtonClick} size={64} className="p-4 rounded-lg bg-black text-white hover:bg-orange-500 cursor-pointer"/>
               <FaFacebook onClick={handleFacebookButtonClick} size={64} className="p-4 rounded-lg bg-black text-white hover:bg-orange-500 cursor-pointer"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpScreen