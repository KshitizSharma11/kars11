import React from 'react';
import Enquiry from './Enquiry';
const Hero = () => {
  return (
    <div className='min-h-[100vh] rounded-t-full shadow-[0_0_15px_15px_rgba(256,256,256,0.6)] flex flex-col items-center px-6'>
      <div className="flex mt-[5%] flex-col items-center space-y-[5%] z-50">
        <p className="w-[50%] text-7xl p-4 font-serif font-medium text-white text-center">
          Ride Smarter
          <br />
          Rent It Out!
        </p>
    
        <img
          src="/assets/mercedes.png"
          className="w-[65%] h-[35%] rounded-xl animate-pulse"
        />
      </div>
      <Enquiry />
    </div>
  );
};

export default Hero;
