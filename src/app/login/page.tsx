"use client"
import React, { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { handleFacebookLogin, handleGoogleLogin, signInWithEmail, } from "@/utils/loginServiceFunctions";
import Banner from '@/components/atoms/Banner';

const Page = () => {
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
    <div className="flex flex-col">
      <Banner url="https://wallpapers.com/images/hd/ultra-wide-4k-car-xkxr4j3eotg26a22.jpg" height={40} />
      <div className="flex flex-row items-center justify-between my-[5%] mx-[15%]">
        <div className="w-[50%]">
          <img
            src="https://img.freepik.com/premium-photo/best-car-wallpapers_1151350-19726.jpg"
            className="w-[100%] h-[80%] rounded-3xl"
          />
        </div>
        <div className="w-[45%] flex-col justify-center items-center">
          <div className="space-y-4">
            <h1 className="text-4xl text-black font-bold">Login</h1>
            <p className="text-lg text-gray-400">
              Welcome Back To The Universe Of Exotic Cars.
            </p>
          </div>
          <div>
            <form onSubmit={handleLoginSubmit} className="space-y-4 mt-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-4 w-full rounded-lg border-2 border-gray-400"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-4 mt-4 w-full rounded-lg border-2 border-gray-400"
                required
              />
              <button type="submit" className="w-full p-4 text-white bg-black rounded-lg hover:bg-orange-400">
                Login
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
              <div className="flex flex-row items-center justify-center gap-8 mt-4">
                <button type="button" onClick={handleGoogleButtonClick}>
                  <FaGoogle size={64} className="p-4 w-[1/2] rounded-lg bg-black text-white hover:bg-orange-500 cursor-pointer" />
                </button>
                <button type="button" onClick={handleFacebookButtonClick}>
                  <FaFacebook size={64} className="p-4 w-[1/2] rounded-lg bg-black text-white hover:bg-orange-500 cursor-pointer" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
